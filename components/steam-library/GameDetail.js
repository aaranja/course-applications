import React, { Component, Fragment } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView
} from "react-native";
import axios from "axios";
import HTMLView from "react-native-htmlview";
import * as style from "../../styles/SteamLibraryStyle";

export default class GameDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            game_data: null,
        }
        const url = "https://store.steampowered.com/api/appdetails?appids=" + this.props.route.params.appid;
        this.cancelablePromise =  this.setCancelable(axios.get(url));
    }

    componentDidMount() {
        this.mounted = true;
        this.props.navigation.setOptions({
            title: this.props.route.params.name
        });
        this.cancelablePromise.promise().then(response => {
           if(this.mounted){
               this.setState({
                   game_data: response.data[this.props.route.params.appid].data,
                   loading: false,
               })
           }
       });
    }

    componentWillUnmount() {
        this.mounted = false;
        this.cancelablePromise.cancel();
    }

    setCancelable = (fn) =>{
        let hasCanceled = false;
        return{
            promise: (val) => new Promise((resolve, reject) => {
                if (this.mounted) {
                    resolve(fn);
                } else {
                    fn = null;
                }
            }),
            cancel() {
                hasCanceled = true;
            }
        }
    }

    renderNode = (node, index, siblings, parent, defaultRenderer) =>{
        if (node.name === 'h2' || node.name === 'h1') {
            const a = node.attribs;
            var text = node.children[0].data;
            //console.log(text);
            return(<Text key={index} style={{fontWeight:"bold", textAlign:"center", marginLeft: 10, marginRight: 10}}>{"\n\n"}{text}{"\n"}</Text>);
        }
    }

    render(){
        let img_url;
        let description;

        if(!this.state.loading){
            img_url = this.state.game_data.header_image;
            //console.log(this.state.game_data);

            if(this.state.game_data.detailed_description === undefined){
                description = `<div> ${this.state.game_data.short_description}</div>`;
            }else {
                description = `<div> ${this.state.game_data.detailed_description}</div>`;
            }
        }

        return (
            <View>
                {!this.state.loading ?
                    <SafeAreaView>
                        <ScrollView>
                            <Fragment>

                                <Image
                                    style={style.game_style.thumbnail}
                                    source = {{uri:img_url}}
                                />
                                <Text>Descripción</Text>


                                <HTMLView
                                    value={description}
                                    stylesheet={style.html_styles}
                                    renderNode={this.renderNode}
                                />


                            </Fragment>
                        </ScrollView>

                    </SafeAreaView>
                    :
                    <Text>Cargando</Text>}

            </View>
        );
    }



}

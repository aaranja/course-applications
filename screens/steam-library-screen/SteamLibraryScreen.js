import React, {Component } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    Image,
    TouchableHighlight
} from "react-native";
import GameDetail from "../../components/steam-library/GameDetail";
import {steam_games} from "../../const/steam-game-list";
import * as home_s from "../../styles/HomeScreenStyle";
import axios from "axios";
import GameImage from "../../components/steam-library/GameImage";


export default class SteamLibraryScreen extends Component{
    abortController = new AbortController();
    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerStyle: {
                backgroundColor: '#171a21',
            },
            headerTintColor: '#e8e8e8',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    }

    componentWillUnmount() {
        this.source.cancel("Cancelado");
    }

    setGame = (id, name) => {
        this.props.navigation.navigate(
            'Juego Steam',
            {
                appid: id,
                name: name
            });
    }

    renderRow(data) {
        return (
            <TouchableHighlight
                key = {data.index}
                onPress={() => this.setGame(data.item.appid, data.item.name)}
            >
                <View style={home_s.style.listItemContainer}>
                    <View style={home_s.style.listDesign}>
                        <Text style={{ flex:2}}>{data.item.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        });
        return <View style={{backgroundColor: '#2a465d'}}>
            <FlatList
                style={{paddingLeft:'2%', paddingRight:'2%'}}
            data = {steam_games}
            renderItem={ item => (this.renderRow(item)) }
            keyExtractor={(item) => item.appid.toString()}
            />
        </View>
    }
}

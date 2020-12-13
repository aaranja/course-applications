import React, {Component } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableWithoutFeedback
} from "react-native";
import GameDetail from "../../components/steam-library/GameDetail";
import {steam_games} from "../../const/steam-game-list";


export default class SteamLibraryScreen extends Component{
    constructor(props) {
        super(props);
    }

    setGame = (id, name) => {
        this.props.navigation.navigate(
            'Juego Steam',
            {
                appid: id,
                name: name
            });
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
        return <View style={styles.container}>
            <FlatList
            data = {steam_games}
            renderItem={({item}) => (
                <TouchableWithoutFeedback onPress={() => this.setGame(item.appid, item.name)}>
                    <Text>{item.name}</Text>
                </TouchableWithoutFeedback>
            )}
            keyExtractor={(item) => String(item.appid)}
            />

            {/*<GameDetail appid={"1172470"} />*/}
        </View>
    }
}

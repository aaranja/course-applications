import React, {Component} from "react";
import {Text, View, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import * as home_s from "../styles/HomeScreenStyle";

export default class HomeScreen extends Component {

    renderRow(data) {
        if(data.item.name !== undefined) console.log(data.item.name)
        return (
            <TouchableHighlight
                key = {data.index}
                onPress={()=> this.props.navigation.navigate(data.item.navigation, {name: data.item.name !== undefined ? data.item.name : ""})}
            >
                <View style={home_s.style.listItemContainer}>
                    <View style={home_s.style.listDesign}>
                        <Text style={home_s.style.text}> {data.item.title}</Text>
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

        const list_app = [
            {
                id: 1,
                title: "Ir a datos del curso",
                navigation: "Datos del curso",
                name: "Jesus Luque Espinoza"
            },
            {
                id:2,
                title: "Jugar a adivina el número!",
                navigation: "Adivina el número",
            },
            {
                id:3,
                title: "Ver librería de Steam",
                navigation: "Librería de Steam"
            }
        ]

        return(
            <View >
                <FlatList
                          data={list_app}
                          renderItem={item => (
                              this.renderRow(item)
                          )}
                          keyExtractor={(item) => item.id.toString()}

                />


                {/*<Button
                    title="Ir a datos del curso"
                    onPress={() =>
                        this.props.navigation.navigate('Datos del curso', { name: 'Jesus Luque Espinoza' })
                    }
                />
                <Button
                    title="Jugar a adivina el número!"
                    onPress={()=> this.props.navigation.navigate('Adivina el número')}
                />
                <Button
                    title="Ver librería de Steam"
                    onPress={()=> this.props.navigation.navigate('Librería de Steam')}
                />*/}
            </View>
            )
    }


}

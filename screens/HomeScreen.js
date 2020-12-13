import React, {Component} from "react";
import { Button, View } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View>
                <Button
                    title="Ir a datos del curso"
                    onPress={() =>
                        this.props.navigation.navigate('Datos del curso', { name: 'Jesus Luque Espinoza' })
                    }
                />
                <Button
                    title="Jugar a adivina el número!"
                    onPress={()=> this.props.navigation.navigate('Adivina el número')}
                />
            </View>
            )
    }
}

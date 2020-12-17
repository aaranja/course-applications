import React, {Component } from "react";
import {Text, View, Image} from "react-native";
import * as cds from "../../styles/CourseDataStyle";

export default class CourseDataScreen extends Component {
    render(){
        return (<View style={cds.styles.container}>
                <Image style={cds.styles.img}
                       source = {require('../../assets/logo.png')} />
                <View style={cds.styles.caja}>
                    <Text style={cds.styles.text_data} >
                        Alumno: {this.props.route.params.name}</Text>
                    <Text style={cds.styles.text_data} >
                        Carrera: Ingeniería en sistemas computacionales</Text>
                    <Text style={cds.styles.text_data} >
                        Materia: Programación en dispositivos móviles</Text>
                    <Text style={cds.styles.text_data} >
                        Docente: Xenia Padilla Madrid</Text>
                </View>
                <View style={cds.styles.pie}>
                    <Text style={cds.styles.copy}>
                        Algún día de diciembre de 2020</Text>
                </View>
            </View>
        )
    }
}


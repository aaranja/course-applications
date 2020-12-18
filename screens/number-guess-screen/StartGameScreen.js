import React, {Component, Fragment } from "react";
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import Card from "../../components/number-guess/Card";
import Input from "../../components/number-guess/Input";
import * as style from "../../styles/StartGameStyles";

export default class StartGameScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            enteredValue: "",      /* Valor introducido */
            confirmed: false,      /* Inicio del juego */
            selectedNumber: null,   /* Número elegido */
            try: 5,            /* Intentos */
            chosenNumber: 0,     /* Número generado */
        }
    }
    /* Calcular un nuevo número para adivinar */
    newGameNumber = () => { return this.setState({
        chosenNumber: Math.floor(Math.random() * (99 - 1) + 1), }) }
    /* Resetear valor introducido */
    resetInputHandler = () => { return this.setState({ enteredValue: "", }) };
    /* Resetear el juego */
    resetGame = () => {
        Keyboard.dismiss();
        return this.setState({
            enteredValue: "",      /* Valor introducido */
            confirmed: false,      /* Inicio del juego */
            selectedNumber: null,   /* Número elegido */
            try: 5,            /* Intentos */
            chosenNumber: 0,     /* Número generado */
        });
    }
    /* Consigue el texto de entrada y reemplaza por vacio lo que no es número */
    numberInputHandler = (inputText) => { return this.setState({
        enteredValue: inputText.replace(/[^0-9]/g, ""), }) };
    /* Verificación de entrada al presionar el botón del input */
    confirmInputHandler = () =>{
        Keyboard.dismiss();                                 /* Ocultar teclado */
        if(this.state.confirmed) this.newGameNumber();
        const number = parseInt(this.state.enteredValue);
        if(isNaN(number) || number <= 0 || number > 99){    /* Si no es un número */
            Alert.alert("Introduce un número válido!",
                "el número debe estar entre 1 y 99",
                [{
                    text: "okay",
                    style: "destructive",
                    onPress: this.resetInputHandler(),
                }]);
        } else {                                            /* Si es un número */
            this.setState({
                confirmed: true,                    /* Empezar la comparación */
                selectedNumber: number,             /* Asignar el número elegido */
                enteredValue: "",                   /* Resetear entrada */
                try: this.state.try - 1,            /* Restar un intento */
            })
        }
    }

    render(){
        let attempsOutput;
        let confirmedOutput;
        let distancia = "";
        let win = false;
        /* Si se confirma la entrada, se calcula la adivinanza */
        if (this.state.confirmed) {
            confirmedOutput = <Text>Número elegido: {this.state.selectedNumber}</Text>;
            if (
                this.state.selectedNumber <= this.state.chosenNumber + 10 &&
                this.state.selectedNumber >= this.state.chosenNumber - 10
            ) { distancia = "cerca"; } else {distancia = "lejos";}
            attempsOutput = ( <Text> Estás {distancia}, te quedan {this.state.try} intentos. </Text> );
        } else { attempsOutput = <Text>Te quedan {this.state.try} intentos.</Text>; }
        /* Si el número es adivinado, win = true */
        if(this.state.selectedNumber === this.state.chosenNumber){
            win = true;
        }
        return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
                <View style={style.start_game.screen}>
                    <Card style={style.start_game.card}>
                        {win ? (
                            <Fragment>
                                <Text styel={style.start_game.title}>{this.state.selectedNumber !== null ?
                                    this.state.selectedNumber : "no"}</Text>
                                <Text style={style.start_game.title}>Haz ganado!!</Text>
                                <Text style={style.start_game.subtitle}>
                                    Con solo {this.state.try} intentos restantes!
                                </Text>
                                <Text style={style.start_game.title}>{this.state.selectedNumber}</Text>
                                <View style={style.start_game.buttonResetGame}>
                                    <Button title={"Volver a jugar! :)"} onPress={this.resetGame} />
                                </View>
                            </Fragment>
                        ) : ( <Fragment>
                                {this.state.try >= 1 ? (
                                    <Fragment>
                                        <Text style={style.start_game.title}>
                                            Secciona un número
                                        </Text>
                                        <Input
                                            style={style.start_game.input}
                                            blurOnSubmit
                                            autoCapitalize="none"
                                            maxLength={2}
                                            onChangeText={this.numberInputHandler}
                                            value={this.state.enteredValue}
                                            keyboardType={"number-pad"}
                                        />
                                        <View style={style.start_game.buttonContainer}>
                                            <Button title={"Reiniciar"} onPress={this.resetGame} />
                                            <Button title={"Confirmar"} onPress={this.confirmInputHandler} />
                                        </View>
                                    </Fragment>
                                ) : ( <Fragment>
                                        <Text style={style.start_game.title}>Haz perdido :c</Text>
                                        <Text style={style.start_game.title}>El número era {this.state.chosenNumber}
                                        </Text>
                                        <Button title={"Jugar de nuevo"} onPress={this.resetGame}/>
                                    </Fragment>
                                )}
                            </Fragment>
                        )}
                    </Card>
                    {this.state.selectedNumber === this.state.chosenNumber ? null : (
                        <Fragment>
                            {this.state.confirmed ? (
                                <Card style={style.start_game.cardChosen}>{confirmedOutput}</Card>
                            ) : null}
                            <Card style={style.start_game.cardChosen}>{attempsOutput}</Card>
                        </Fragment>
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

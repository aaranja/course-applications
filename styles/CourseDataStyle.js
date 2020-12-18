import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff9c71",
        padding: 5,
    },
    img: {
        margin: 40,
        marginBottom: 30,
        width: 280,
        height: 120,
        alignSelf: "center",

    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight:'bold',
        color: 'white'
    },
    text_data:{
        fontSize: 16,
        paddingTop: 4,
    },
    caja:{
        backgroundColor: 'white',
        padding: 10,
        marginTop:10,
        borderRadius: 10,
    },

    pie: {
        flex: 0.1,
        position: "absolute",
        right: 10,
        bottom: 10,
    },
    copy: {
        fontSize: 12,
    },
});

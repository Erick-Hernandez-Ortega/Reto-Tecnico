import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MusicPlayer = () : JSX.Element => {
    return (
        <View style={styles.container} >
            <View style={styles.containerTrack} >
                <Image style={styles.imageTrack} source={{ uri: "http://placekitten.com/300/300" }} />
                <Text style={styles.nameTrack}>Cat (feat. Dogs)</Text>
                <View style={styles.containerMusic}>
                    <Text>⏪️</Text>
                    <Text>▶️</Text>
                    <Text>⏩️</Text>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFBFF",
        height: 120,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        padding: 25,
    },
    containerTrack: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageTrack: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    containerMusic: {
        flexDirection: "row",
        gap: 10,
    },
    nameTrack: {
        color: "#A6B1B7",
        fontSize: 16,
        fontWeight: "bold"
    },
    line: {
        height: 1,
        backgroundColor: '#A6B1B7',
        marginVertical: 20,
    },
})
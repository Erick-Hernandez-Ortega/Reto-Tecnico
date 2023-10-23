import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import apiKey from '../api/last-fm-key';
import Song from './Song';
import MusicPlayer from './MusicPlayer';
import { useNavigation } from '@react-navigation/native';


const Home = (): JSX.Element => {
    const [tracksData, setTracksData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchApiLastFM = async () => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey.apiKey}&format=json`);

                if (response.status === 200) {
                    setTracksData(response.data.tracks.track);
                } else {
                    throw new Error('Error al hacer la solicitud a la API de Last.fm');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchApiLastFM();
    }, [])

    const toProfile = () => {
        /* @ts-ignore */
        navigation.navigate("Profile");
    }

    const button = () => (
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={toProfile}>
                <Text style={styles.buttonText}>Ir a vista</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} >
            {/* @ts-ignore */}
            <StatusBar barStyle={"white-content"} backgroundColor={"#172238"} />

            <View style={styles.containertituloCentral} >
                <Text style={styles.tituloCentral} >Top tracks of Spain</Text>
            </View>

            <FlatList
                data={tracksData}
                renderItem={({ item }: any) => (
                    // Enviamos el codigo de la cancion para sacar mas info como la imagen si el codigo no esta en blanco
                    (item.mbid != "" ? <Song mbid={item.mbid} /> : null)
                )}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={button}
            />

            <MusicPlayer />
        </SafeAreaView>
    )
}
// secunadrio FAFBFF
export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#172238",
        flex: 1,
    },
    tituloCentral: {
        color: "#FAFBFF",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    containertituloCentral: {
        paddingVertical: 20,
    },
    profileText: {
        color: "#FAFBFF",
        fontSize: 22,
        textAlign: "center"
    },
    containerButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 10,
        backgroundColor: "#FAFBFF",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "#172238"
    }
})
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import apiKey from '../api/last-fm-key';
import Song from './Song';

const Profile = () => {
    const [tracksData, setTracksData] = useState([]);

    useEffect(() => {
        const fetchApiLastFM = async () => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey.apiKey}&format=json`);

                if (response.status === 200) {
                    setTracksData(response.data.tracks.track.slice(0,5));
                } else {
                    throw new Error('Error al hacer la solicitud a la API de Last.fm');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchApiLastFM();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.textProfile}>Mi perfil</Text>
                <Text style={styles.textSubtitle}>Ultimas canciones reproducidas</Text>
            </View>

            <FlatList
                data={tracksData}
                renderItem={({ item }: any) => (
                    // Enviamos el codigo de la cancion para sacar mas info como la imagen si el codigo no esta en blanco
                    (item.mbid != "" ? <Song mbid={item.mbid} /> : null)
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172238',
        flex: 1,
    },
    textProfile: {
        color: "#FAFBFF",
        textAlign: "center",
        fontSize: 22,
        fontWeight: 'bold'
    },
    textSubtitle: {
        color: "#707990",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    },
    containerText: {
        paddingVertical: 30,
    }
})
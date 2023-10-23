import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiKey from '../api/last-fm-key'
import { useNavigation } from '@react-navigation/native';

const Song = ({ mbid }: any): JSX.Element => {
    const [track, setTrack]: any = useState({})
    const navigation = useNavigation();

    // Aca sacamos la info de una cancion por su codigo para tener acceso completo a su info como su imagen
    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey.apiKey}&format=json&mbid=${mbid}`);

                if (response.status === 200) {
                    setTrack(response.data.track);
                } else {
                    throw new Error('Error al hacer la solicitud a la API de Last.fm');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchTrack();
    }, [])

    const toSongIndividual = () => {
        /* @ts-ignore */
        navigation.navigate("SongIndividual", { track: track });
    }

    return (
        <View>
            {/* Si no tiene imagen que no se muestre */}
            {track?.album?.image?.[3]["#text"] ? (
                <TouchableOpacity onPress={toSongIndividual}>
                    <View style={styles.container}>

                        <Image
                            source={{ uri: track.album.image[3]["#text"] }}
                            style={styles.imagen}
                        />
                        <View style={styles.containerText}>
                            <View style={styles.containerTags}>
                                <View style={styles.tags}>
                                    {track?.toptags?.tag.slice(0, 2).map((tag: any, index: number) => (
                                        <Text key={index} style={styles.tag}>#{tag.name}</Text>
                                    ))}
                                </View>
                                <Text style={styles.doodle}>...</Text>
                            </View>
                            <Text style={styles.nameTrack}>{track.name}</Text>
                            <Text style={styles.nameArtist}>{track.artist.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

export default Song

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    containerTags: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tags: {
        flexDirection: "row",
        gap: 5,
    },
    containerText: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        width: "75%"
    },
    nameTrack: {
        fontSize: 20,
        color: "#FAFBFF",
        fontWeight: "bold"
    },
    tag: {
        color: "#707990",
        fontSize: 14,
    },
    nameArtist: {
        color: "#707990",
        fontSize: 18,
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    doodle: {
        color: "#707990",
        fontSize: 22,
    },
})
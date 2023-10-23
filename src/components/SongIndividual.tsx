import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const SongIndividual = (): JSX.Element => {
  const route: any = useRoute();
  const { track } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSongName}>
        <Text style={styles.doodle}>...</Text>
        <View>
          <Text style={styles.tag}>Playing from</Text>
          <Text style={styles.namePlayList}>Top tracks of Spain</Text>
        </View>
        <Text style={styles.doodle2}>v</Text>
      </View>
      <View style={styles.containerTrack}>

        <View style={styles.containerImage}>
          <Image
            source={{ uri: track.album.image[3]["#text"] }}
            style={styles.imagen}
          />

        </View>
        <View>

          <View style={styles.containerTextName}>
            <Text style={styles.nameText}>{track.name}</Text>
            <Text style={styles.nameArtist}>{track.artist.name}</Text>
          </View>

          <View style={styles.containerMusicPlayer}>
            <Text style={styles.minute}>
              2:23
            </Text>
            <View style={styles.line}></View>
            <Text style={styles.minute}>
              3:30
            </Text>
          </View>

          <View style={styles.containerControls}>
            <Text style={styles.controls}>⏪️</Text>
            <Text style={styles.controls}>▶️</Text>
            <Text style={styles.controls}>⏩️</Text>
          </View>

          <View style={styles.containerStats}>
            <View style={styles.containerStat}>
              <Text style={styles.stat}>↑</Text>
              <Text style={styles.statNumber}>{track.listeners}</Text>
              <Text style={styles.stat}>↓</Text>
            </View>

            <View style={styles.containerStat}>
              <Text style={styles.stat}>↹</Text>
              <Text style={styles.statNumber}>16</Text>
            </View>

            <View style={styles.containerStat}>
              <Text style={styles.stat}>▶</Text>
              <Text style={styles.statNumber}>{track.playcount}</Text>
            </View>

            <View style={styles.containerStat}>
              <Text style={styles.stat}>+</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SongIndividual;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#172238',
    flex: 1,
  },
  containerSongName: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tag: {
    color: '#707990',
    fontSize: 15,
    textAlign: 'center',
  },
  namePlayList: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FAFBFF',
    fontWeight: 'bold',
  },
  doodle: {
    color: '#707990',
    fontSize: 22,
  },
  doodle2: {
    color: '#FAFBFF',
    fontSize: 22,
  },
  containerTrack: {
    backgroundColor: '#FAFBFF',
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: 30,
    justifyContent: "space-evenly"
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerTextName: {
    marginVertical: 30,
  },
  nameText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold"
  },
  nameArtist: {
    fontSize: 18,
    textAlign: "center",
    color: '#B6BBC1',
  },
  containerMusicPlayer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  minute: {
    color: '#B6BBC1',
  },
  containerControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  controls: {
    fontSize: 30,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 40,
  },
  containerStats: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between"
  },
  stat: {
    color: "#B6BBC1",
    fontSize: 20,
  },
  statNumber: {
    color: "#B6BBC1",
    fontSize: 15,
  },
  containerStat: {
    flexDirection: "row",
    alignItems: "center",
  },
});

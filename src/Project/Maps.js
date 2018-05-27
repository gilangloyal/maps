import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.188063,
          longitude: 115.117324
        },
        title: 'Air Terjun Jembong',
        subtitle: 'Air Terjun Jembong, Ambengan, Sukasada, Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.177631,
          longitude:  115.184566
        },
        title: 'Air Terjun Sekumpul',
        subtitle: 'Air Terjun Sekumpul, Sawan, Buleleng, Bali'
      },
      {
        key:3,
        latlng: {
          latitude: -8.172675,
          longitude: 115.104537
        },
        title: 'Air Terjun Aling Aling',
        subtitle: 'Air Terjun Aling Aling, Sambangan, Buleleng, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.506481,
          longitude: 115.331816
        },
        title: 'Air Terjun Tibumana',
        subtitle: 'Air Terjun Tibumana, Desa Apuan, Susut, Bangli, Bali'
      },
      {
        key:5,
        latlng: {
          latitude:-8.575032,
          longitude: 115.290261
        },
        title: 'Air Terjun Tegenungan',
        subtitle: 'Air Terjun Tegenungan, Sukawati, Gianyar, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.217010,
          longitude: 114.101956
        },
        title: 'Air Terjun Banyumalla',
        subtitle: 'Air Terjun Banyumalla, Desa Wanagiri, Sukasada, Buleleng, Bali'
      },
      {
        key:7,
        latlng: {
          latitude:-8.217010,
          longitude: 114.101956
        },
        title: 'Air Terjun Banyumalla',
        subtitle: 'Air Terjun Banyumalla, Desa Wanagiri, Sukasada, Buleleng, Bali'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Air Terjun di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

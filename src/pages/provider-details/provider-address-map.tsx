import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Location} from '../../models/location';
import MapView from 'react-native-maps';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    map: {
        minWidth: '100%',
        minHeight: Dimensions.get('window').height,
    },
});

function ProviderAddressMap(props): JSX.Element {
    const [userLocation, setUserLocation] = useState<Location>();

    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            ({coords}) =>
                setUserLocation({
                    longitude: coords.longitude,
                    latitude: coords.latitude,
                }),
            err => console.log(err),
            {enableHighAccuracy: true, interval: 1000, distanceFilter: 0.1},
        );
        return () => Geolocation.clearWatch(watchId);
    }, []);
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -20.22875777915862,
                longitude: -40.29061554505814,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            }}
        />
    );
}

export default ProviderAddressMap;

import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Location} from '../../models/location';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions, StyleSheet} from 'react-native';
import {Nullable} from '../../shared/types/general';

const styles = StyleSheet.create({
    map: {
        minWidth: '100%',
        minHeight: Dimensions.get('window').height,
    },
});

function ProviderAddressMap(props: {targetLocation: Location}) {
    const [userLocation, setUserLocation] = useState<Nullable<Location>>();
    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            ({coords}) =>
                setUserLocation({
                    longitude: coords.longitude,
                    latitude: coords.latitude,
                }),
            err => console.log('Err', err),
            {enableHighAccuracy: true, interval: 1000, distanceFilter: 0.1},
        );
        return () => Geolocation.clearWatch(watchId);
    }, []);
    console.log(userLocation);
    return (
        <MapView
            showsUserLocation
            zoomControlEnabled
            zoomEnabled
            zoomTapEnabled
            style={styles.map}
            region={{
                latitude: userLocation?.latitude ?? 0,
                longitude: userLocation?.longitude ?? 0,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            }}>
            <Marker
                coordinate={{
                    latitude: userLocation?.latitude ?? 0,
                    longitude: userLocation?.longitude ?? 0,
                }}
                title={'Zéquinha'}
                description={'The zékinha position'}
            />
        </MapView>
    );
}

export default ProviderAddressMap;

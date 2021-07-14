import {Nullable} from '../types/general';
import {Location} from '../../models/location';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation, {ErrorCallback} from 'react-native-geolocation-service';

export async function requestAccessFineLocation(): Promise<boolean> {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return result === RESULTS.GRANTED;
}

export async function getLocation(
    successCallback: (l: Nullable<Location>) => void,
    errorCallback?: ErrorCallback,
): Promise<Nullable<Location>> {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (result !== RESULTS.GRANTED) {
        return null;
    }

    Geolocation.getCurrentPosition(
        position => successCallback(position.coords),
        err => (errorCallback ? errorCallback(err) : successCallback(null)),
        {enableHighAccuracy: false, timeout: 10000, maximumAge: 2000},
    );
}

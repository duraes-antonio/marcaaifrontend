export interface Location {
    latitude: number;
    longitude: number;
}

export interface Address {
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: number;
    zipcode: string;
    location: Location;
}

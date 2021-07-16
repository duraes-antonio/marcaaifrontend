import React, {memo, useCallback} from 'react';
import {Linking, View, ViewStyle} from 'react-native';
import {Address, Location} from '../../../models/location';
import ActionButton from '../../../shared/components/buttons/action-button';
import {IconLib} from '../../../shared/components/icon/icon-lib';
import {colorRed} from '../../../shared/styles/global-styles';
import {pagePaddingHorizontal} from '../../../shared/components/general/page/styles';
import {Container, Info, styles, TextSmall, TextSmallBold} from './styles';
import {getLocation} from '../../../shared/util/permission';

export interface AddressCardProps {
    address: Address;
    style: ViewStyle;
    dest?: Location;
    source?: Location;
}

function openMapsLinking(source: Location, dest: Location): void {
    const baseUrl = 'https://www.google.com/maps/dir/?api=1';
    const sourceParams = `&origin=${source.latitude},${source.longitude}`;
    const destParams = `&destination=${dest.latitude},${dest.longitude}`;
    const finalUrl = `${baseUrl}${sourceParams}${destParams}&travelmode=driving`;
    Linking.openURL(finalUrl);
}

async function handleOpenMaps(dest?: Location): Promise<void> {
    await getLocation(position => {
        if (!position || !dest) {
            return;
        }
        openMapsLinking(position, dest);
    });
}

function AddressCard(props: AddressCardProps): JSX.Element {
    const fieldNameValue: {[key: string]: string | number | null} = {
        [`${props.address.city} - ${props.address.state}`]: null,
        'CEP:': props.address.zipcode,
        'Bairro:': props.address.neighborhood,
        'Logradouro:': props.address.street,
        ['Nº']: props.address.number,
    };
    const openMaps = useCallback(
        () => handleOpenMaps(props.dest),
        [props.dest],
    );

    return (
        <View style={{paddingHorizontal: pagePaddingHorizontal}}>
            <Container
                onPress={openMaps}
                activeOpacity={4 / 5}
                style={props.style}>
                <ActionButton
                    color={colorRed}
                    name={'map-marker-alt'}
                    lib={IconLib.FONT_AWESOME_5}
                    size={24}
                    containerStyle={styles.actionButton}
                />
                <Info>
                    {Object.keys(fieldNameValue).map(key => (
                        <TextSmall key={key}>
                            <TextSmallBold>{key}</TextSmallBold>{' '}
                            {fieldNameValue[key]}
                        </TextSmall>
                    ))}
                </Info>
            </Container>
        </View>
    );
}

export default memo(AddressCard);

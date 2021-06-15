import {IconProps} from 'react-native-vector-icons/Icon';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAewsome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export enum IconLib {
    FEATHER,
    FONT_AEWSOME_5,
    MATERIAL_COMMUNITY,
}

const libComponent: {
    [key in IconLib]: (props: IconProps) => JSX.Element;
} = {
    [IconLib.FEATHER]: (props: IconProps) => <IconFeather {...props} />,
    [IconLib.FONT_AEWSOME_5]: (props: IconProps) => (
        <IconFontAewsome5 {...props} />
    ),
    [IconLib.MATERIAL_COMMUNITY]: (props: IconProps) => (
        <IconMaterialCommunity {...props} />
    ),
};

export const IconWrapper = (props: IconProps & {lib: IconLib}): JSX.Element => {
    const icon = libComponent[props.lib];
    if (!icon) {
        throw new Error('Icon not found');
    }
    return <TouchableOpacity>{icon(props)}</TouchableOpacity>;
};

import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
    colorLabel,
    colorOrange,
    colorPrimary,
    grey5,
    robotoMedium,
    robotoRegular,
} from '../../../styles/global-styles';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 15px;
    background-color: white;
    overflow: hidden;
`;

export const InfoContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    margin: 0 13px;
    padding: 18px 0;
    width: auto;
    flex: 1;
    position: relative;
`;

export const ServiceName = styled.Text`
    color: ${colorPrimary};
    font-family: ${robotoMedium};
    font-size: 14px;
`;

export const AppointmentTime = styled.Text`
    color: ${colorOrange};
    font-family: ${robotoRegular};
    font-size: 12px;
    margin: 5px 0;
`;

export const ProviderName = styled.Text`
    color: ${colorLabel};
    font-family: ${robotoRegular};
    font-size: 12px;
`;

export const styles = StyleSheet.create({
    containerShadow: {
        elevation: 7,
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    containerGeneral: {
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 8,
    },
    serviceImage: {
        borderWidth: 2,
        borderColor: grey5,
        width: 55,
        height: 55,
        alignSelf: 'center',
        borderRadius: 15,
        marginLeft: 15,
    },
});

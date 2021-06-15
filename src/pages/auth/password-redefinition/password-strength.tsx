import React from 'react';
import {
    colorGreen,
    colorGreen60,
    colorOrange,
    colorRed,
    grey3,
    grey6,
} from '../../../shared/styles/global-styles';
import {
    PasswordSecurityLevel,
    PasswordStrengthPipeline,
} from '../../../models/password-validator';
import {CommonText} from '../../../shared/components/texts';
import {Container, ContainerSteps, StepBar} from './styles';
import {StyleSheet} from 'react-native';

export interface PasswordStrengthProps {
    password: string;
    securityLevel: (level: PasswordSecurityLevel) => void;
}

const strengthColor: {[key in PasswordSecurityLevel]: string} = {
    [PasswordSecurityLevel.EMPTY]: grey6,
    [PasswordSecurityLevel.VERY_WEAK]: colorRed,
    [PasswordSecurityLevel.WEAK]: colorOrange,
    [PasswordSecurityLevel.GOOD]: colorGreen60,
    [PasswordSecurityLevel.GREAT]: colorGreen,
};

const textColor = {...strengthColor, [PasswordSecurityLevel.EMPTY]: grey3};

const PasswordStrength = (props: PasswordStrengthProps) => {
    const validation = PasswordStrengthPipeline.validate(props.password);
    const levels = Object.keys(PasswordSecurityLevel).filter(
        k => !isNaN(+k) && k !== '0',
    );
    props.securityLevel(validation.level);
    const styles = StyleSheet.create({
        text: {
            color: textColor[validation.level],
            fontSize: 13,
            marginTop: 5,
        },
    });
    return (
        <Container>
            <ContainerSteps>
                {levels.map((level, i) => (
                    <StepBar
                        key={level}
                        style={{
                            backgroundColor:
                                i < validation.level
                                    ? strengthColor[validation.level]
                                    : grey6,
                        }}
                    />
                ))}
            </ContainerSteps>
            <CommonText style={styles.text}>{validation.message}</CommonText>
        </Container>
    );
};

export default PasswordStrength;

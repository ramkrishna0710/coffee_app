import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../../theme/theme';
import CustomIcon from '../global/CustomIcon';

interface GradientBGIconProps {
    name?: string;
    color?: string;
    size?: number;
}

const GradientBGIcon: FC<GradientBGIconProps> = ({ name, color, size }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradientBG}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            >
                <CustomIcon name={name ?? ""} color={color} size={size} />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden'
    },
    linearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default GradientBGIcon

import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { BORDERRADIUS, SPACING } from '../../theme/theme';
import CustomIcon from '../global/CustomIcon';

interface BGIconProps {
    name?: string;
    size?: number;
    color?: string;
    backgroundColor?: string;
}

const BGIcon: FC<BGIconProps> = ({ name, size, color, backgroundColor }) => {
    return (
        <View style={[styles.iconBgColor, { backgroundColor: backgroundColor }]}>
            <CustomIcon name={name ?? ""} color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconBgColor: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_8,
    }
})

export default BGIcon

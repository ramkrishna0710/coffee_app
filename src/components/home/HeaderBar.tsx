import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import GradientBGIcon from '../icon/GradientBGIcon';
import ProfiePic from '../global/ProfiePic';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
      <Text style={styles.headerText}>{title}</Text>
      <ProfiePic />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex
  }
})

export default HeaderBar

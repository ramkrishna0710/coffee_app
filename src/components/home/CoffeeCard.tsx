import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import CustomIcon from '../global/CustomIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
    id: string;
    index: number;
    name: string;
    roasted: string;
    special_ingredient: string;
    imagelink_square: ImageProps;
    average_rating: string;
    prices: any;
    type: string;
    buttonPressHandler: any;
}

const CoffeeCard: FC<CoffeeCardProps> = ({
    id, index, name, roasted, imagelink_square, average_rating, prices, type, special_ingredient
}) => {
    console.log("Prices in CoffeeCard:", prices[1].price, "Name:", name);
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            style={styles.cardContainer}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        >
            <ImageBackground
                source={imagelink_square}
                style={styles.cardImageBackground}
                resizeMode='cover'
            >
                <View style={styles.cardRatingContainer}>
                    <CustomIcon name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_18} />
                    <Text style={styles.ratingText}>{average_rating}</Text>
                </View>
            </ImageBackground>
            <Text style={{color: COLORS.primaryWhiteHex}}>{name}</Text>
            <Text>{special_ingredient}</Text>
            <View>
                <Text>$ <Text style={{color: COLORS.primaryWhiteHex}}>{prices.price}</Text></Text>
            </View>

            <TouchableOpacity
                onPress={() => { }}
            >
                <BGIcon name={'add'} color={COLORS.primaryWhiteHex} backgroundColor={COLORS.primaryOrangeHex} size={FONTSIZE.size_10} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CoffeeCard

const styles = StyleSheet.create({
    cardContainer: {

    },
    cardImageBackground: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        overflow: 'hidden',
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15
    },
    cardRatingContainer: {

    },
    ratingText: {}
})
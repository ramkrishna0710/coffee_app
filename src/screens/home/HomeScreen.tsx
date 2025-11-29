import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { userStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme'
import HeaderBar from '../../components/home/HeaderBar'
import CustomIcon from '../../components/global/CustomIcon'
import CoffeeCard from '../../components/home/CoffeeCard'

const getCategoriesFromData = (data: any) => {
    let temp: any = {};
    for (let i = 0; i < data.length; i++) {
        if (temp[data[i].name] == undefined) {
            temp[data[i].name] = 1;
        } else {
            temp[data[i].name] += 1;
        }
    }
    let categories = Object.keys(temp);
    categories.unshift("All");
    return categories;
}

const getCoffeeList = (category: string, data: any) => {
    if (category == "All") {
        return data;
    } else {
        return data.filter((item: any) => item.name == category);
    }
}

const HomeScreen = () => {

    const CoffeeList = userStore((state: any) => state.CoffeeList);
    // console.log("CoffeeList: ", CoffeeList);
    const BeansList = userStore((state: any) => state.BeansList);
    // console.log("BeansList: ", BeansList);

    const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
    const [search, setSearch] = useState(undefined);
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0]
    });
    const [sortedCoffees, setSortedCoffees] = useState(getCoffeeList(categoryIndex.category, CoffeeList));
    const [searchText, setSearchText] = useState('');

    // console.log("categories: ", categories);

    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewFlew}
            >
                {/* APP HEADER */}
                <HeaderBar />

                <Text style={styles.screenTitle}>Find the best {'\n'} coffee for you</Text>

                {/* Search Input */}
                <View style={styles.searchInputContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <CustomIcon
                            style={styles.inputIconStyle}
                            name='search'
                            size={FONTSIZE.size_18}
                            color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Find Your Coffee..'
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        placeholderTextColor={COLORS.primaryLightGreyHex}
                        style={styles.textInputStyle}
                    />
                </View>

                {/* Categories List */}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryScrollViewStyle}
                >
                    {categories.map((data, index) => (
                        <View key={index.toString()} style={styles.categoryViewStyle}>
                            <TouchableOpacity
                                onPress={() => {
                                    setCategoryIndex({
                                        index: index,
                                        category: categories[index]
                                    });
                                    setSortedCoffees([...getCoffeeList(categories[index], CoffeeList)]);
                                }}
                                style={styles.categoryScrollStyle}
                            >
                                <Text style={[
                                    styles.categoryTextStyle,
                                    categoryIndex.index == index ? {
                                        color: COLORS.primaryOrangeHex
                                    } : {}]}
                                >{data}</Text>
                                {
                                    categoryIndex.index == index ?
                                        <View style={styles.activeCategory} />
                                        : <></>
                                }
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Coffee Items List */}

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={sortedCoffees}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContentContainer}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity>
                                <CoffeeCard
                                    id={item.id}
                                    index={item.index}
                                    name={item.name}
                                    type={item.type}
                                    roasted={item.roasted}
                                    imagelink_square={item.imagelink_square}
                                    special_ingredient={item.special_ingredient}
                                    average_rating={item.average_rating}
                                    prices={item.prices}
                                    buttonPressHandler={()=>{}}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    scrollViewFlew: {
        flexGrow: 1,
    },
    screenTitle: {
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhiteHex,
        paddingLeft: SPACING.space_30
    },
    searchInputContainer: {
        flexDirection: 'row',
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
    },
    inputIconStyle: {
        marginHorizontal: SPACING.space_20,
    },
    textInputStyle: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
    categoryViewStyle: {
        paddingHorizontal: SPACING.space_20,
        marginBottom: SPACING.space_20,
    },
    categoryScrollViewStyle: {
        paddingHorizontal: SPACING.space_15,
    },
    categoryScrollStyle: {
        alignItems: 'center',
    },
    categoryTextStyle: {
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryLightGreyHex,
        marginBottom: SPACING.space_4,
    },
    activeCategory: {
        height: SPACING.space_10,
        width: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryOrangeHex,
    },
    flatListContentContainer: {
        gap: SPACING.space_20,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_30,
    }
})

export default HomeScreen
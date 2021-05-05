import React from 'react'
import { View, Text, FlatList,List,Dimensions } from 'react-native'
import styles from './style'
import CarItem from '../CarItem'
import cars from '../CarList/Car'

const CarList = () => {

    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=> <CarItem car={item} />}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").height}
            showsVerticalScrollIndicator={false}
            // snapToEnd={"s"}

            />
        </View>
    )
}

export default CarList

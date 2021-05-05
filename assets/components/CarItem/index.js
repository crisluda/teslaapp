import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyleButton from '../StyleButton'
import styles from './style'



const CarItem = (props) => {
  const{name,tagline,image,taglineCTA}=props.car
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={image}
        style={styles.image}/>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}{" "}
        <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
      <StyleButton type="primary" content="custom order" onPress={()=>{
        console.warn("custom order was press")
      }}/>
       <StyleButton type="secondary" content="exising inventory" onPress={()=>{
        console.warn("exising inventory was press")
      }}/>
      </View>
        
      </View>
    )
}

export default CarItem



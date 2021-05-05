import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from "./style"

const StyleButton = ({type,content,onPress}) => {
    // const type=props.type
    // const content = props.content
    // const onPress = props.onPress
    const backgroundColor = type === "primary" ? "black" : "white"
    const color = type === "primary" ? "white" : "black"
    
    return (
        <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor}]} onPress={()=>{onPress()}}>
        <Text style={styles.text,{color}}>{content}</Text>
        </Pressable>
        </View>
    )
}

export default StyleButton


import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        // backgroundColor:"white",
        top:50,
        zIndex:100,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingHorizontal:20,
        // paddingTop:10,
        // height:100
    },
    logo:{
        width:100,
        height:20,
        resizeMode:"contain",
        // top:50
    },
    menu:{
        width:25,
        height:25,
        // top:50
        
    }
})

export default styles

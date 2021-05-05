
import { StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer:{
        width: "100%",
        height: Dimensions.get("window").height
      },
      titles:{
        paddingTop: "30%",
        width: "100%",
        alignItems: "center"
    
      },
      title:{
        fontSize: 40,
        fontWeight: "600",
    
      },
      subTitleCTA:{
        textDecorationLine:"underline"
      },
      subtitle:{
        fontSize: 16,
        color: "#5c5e62"
      },
      image:{
        width: "100%",
        height: "100%",
        position: "absolute",
      },
      buttonsContainer:{
        position:"absolute",
        bottom:35,
        width:"100%"
      }
})
export default styles
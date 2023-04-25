import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style ={styles.firstLogo}
        source={require('./assets/large_Money_Tap_9772cc1fbf.png')}/>
      <Text>Modefu Loan App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop:90,
    // paddingBottom:50
  },
  firstLogo:{
    resizeMode: 'stretch',
    width:145,
    height:130,
    marginLeft:56,
    marginBottom:25,
    padding:90
  }
});

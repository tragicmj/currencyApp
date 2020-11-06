import React,{useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  Pressable
} from 'react-native';

import Snackbar from "react-native-snackbar";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

const App = () => {
  const [inputValue,setInputValue] = useState(0);
  const [resultValue,setResultValue] = useState(0);

  const buttonPressed = (currency) => {
      if(!inputValue){
          return Snackbar.show({
            text:'Please enter a value',
            backgroundColor:"#ea7773",
            textColor:"#fff",
          })
      }

      let result = parseFloat(inputValue) * currencyPerRupee[currency];
      setResultValue(result.toFixed(2));  
  }

  return (
      <ScrollView backgroundColor="#1b262c" 
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        >
        <StatusBar backgroundColor="#1b262c" />
        <SafeAreaView style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultValue}>{resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter Value"
                placeholderTextColor="#c1c1c1"
                value={inputValue}
                onChangeText={
                  (inputValue) => setInputValue(inputValue)
                }
                ></TextInput>
            </View>
            <View style={styles.convertButtonContainer}>
                {
                  Object.keys(currencyPerRupee).map((currency)=>{
                    return(
                      <Pressable key={currency} style={styles.converterButton} onPress={
                        ()=>buttonPressed(currency)
                      }>
                        <Text style={styles.converterButtonText}>{currency}</Text>
                      </Pressable>
                    )
                  })
                }
            </View>
        </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c",
    padding:15,
  },
  resultContainer:{
      height:70,
      marginTop:80,
      justifyContent:"center",
      borderColor:"#bbe1fa",
      borderWidth:2,
      alignItems:"center"
  },
  resultValue:{
    fontSize:30,
    color:"#ffffff",
    fontWeight:"bold"
  },
  inputContainer:{
    height:70,
    marginTop:15,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center"
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#ffffff"
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:12
  },
  converterButton:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"32%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    margin:2,
    backgroundColor:"#0f4c75",
  },
  converterButtonText:{
    color:"#fff",
    fontSize:15
  }
});

export default App;

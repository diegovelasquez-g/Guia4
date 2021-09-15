/**
* @format
* @flow strict-local
*/
import React, { useState,useEffect} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 StatusBar,
} from 'react-native';
import colors from './src/utilis/colors';
import Form from './src/Components/Form';
import Footer from './src/Components/Footer';
import Result from './src/Components/Result';
export default function App(){

  const[capital,setCapital] = useState(null);
  const [total, setTotal] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');
useEffect(() => {
 if (capital) calculate();
 else reset();
 }, [capital]);
 const calculate = () => {
 reset();
 if (!capital) {
  setErrorMessage('Añade la cantidad que quieres solicitar');
  }else {
  setTotal({
  afp: (capital*0.04).toFixed(2).replace('.', ','),
  seguro: (capital*0.03).toFixed(2).replace('.', ','),
  renta: (capital*0.05).toFixed(2).replace('.',','),
  neto: (capital-((capital*0.04)+(capital*0.03)+(capital*0.05))).toFixed(2).replace('.',','),
  
  });
  }
  };
  const reset = () => {
  setErrorMessage('');
  setTotal(null);
  };

return(
 <>
 <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.Header}>
 <Text style={styles.HeadApp}>Salario neto</Text>
 <Form
  setCapital ={setCapital}
 
 />
 </SafeAreaView>
 
 <Result
 capital={capital}
 total={total}
 errorMessage={errorMessage}
 />
<Footer calculate={calculate} />
 </>
 );
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor: colors.PRIMARY_COLOR,
 height:200,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
 HeadApp:{
   fontSize:25,
   fontWeight: 'bold',
   color: '#fff',
   marginTop:15,
 },
 titleApp: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
  marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
    },
    safeArea: {
      height: 290,
      alignItems: 'center',
      },
})

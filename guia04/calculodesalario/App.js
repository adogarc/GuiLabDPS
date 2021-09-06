import React, {useState, useEffect} from 'react';
import {
 StyleSheet,
 View,
 Text,
 SafeAreaView,
 StatusBar,
 Button,
} from 'react-native';
import Form from './src/components/form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors';
export default function App() {
 const [nombre, setNombre] = useState(null);
 const [salariobase, setSalariobase] = useState(null);
 const [total, setTotal] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');
useEffect(() => {
 if (nombre && salariobase) calculate();
 else reset();
 }, [nombre, salariobase]);
 const calculate = () => {
 reset();
 if (!nombre) {
 setErrorMessage('Ingrese el nombre del empleado');
 } else if (!salariobase) {
 setErrorMessage('Ingrese el salario base');
 } else {
 const isss = salariobase * 0.03;
 const afp = salariobase * 0.04;
 const renta = salariobase * 0.05;
 const deducciones = isss + afp + renta;
 const salarioneto = salariobase - deducciones;
 setTotal({
 totalPayable: (salarioneto).toFixed(2).replace('.', ','),
 totalDeducciones: (deducciones).toFixed(2).replace('.', ','),
 });
 }
 };
 const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };
 return (
 <>
 <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.safeArea}>
 <View style={styles.background} />
 <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
 <Form
 setNombre={setNombre}
 setSalariobase={setSalariobase}
 />
 </SafeAreaView>
 <Result
 nombre={nombre}
 salariobase={salariobase}
 total={total}
 errorMessage={errorMessage}
 />
 <Footer calculate={calculate} />
 </>
 );
}
const styles = StyleSheet.create({
 safeArea: {
 height: 290,
 alignItems: 'center',
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
 titleApp: {
 fontSize: 25,
 fontWeight: 'bold',
 color: '#fff',
 marginTop: 15,
 },
});
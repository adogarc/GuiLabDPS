import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Text,View,FlatList, StyleSheet, SafeAreaView, StatusBar,Image} from 'react-native';

const DATA=[
  {id:'1',
  title: 'Pupusas',
  src:require('./src/imgs/pupusas.jpg'),
  },
  {id:'2',
  title: 'Riguas',
  src:require('./src/imgs/riguas.jpg'),
  },
  {id:'3',
  title: 'Elotes locos',
  src:require('./src/imgs/eloteslocos.jpg'),
  },
];

const Item = ({ title,img })=>(
  <View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
  <Image style={styles.img} source={img}/>
  </View>
);


 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src}/>
 );

 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }


const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#6633FF',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 alignItems:'left'
 },
 title: {
 fontSize: 32,
 },
 img:{
   width:200,
   height:125,
   borderWidth:2,
   borderColor:'black',
   resizeMode:'contain',
   margin:8
 }
 });

export default App;

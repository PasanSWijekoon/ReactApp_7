import React, {useState} from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
 const jsarray = ["PHP","Java","React","c#"];
 const [x,setX] = useState([]);

  const ui = (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Load Data</Text>
     
      <Button title="Load Data"  onPress={n} />

      <FlatList data={x} renderItem={m}/>

    </SafeAreaView>
  );

  function n(){


    var requestContent = {method:"GET"};

    fetch("http://10.0.2.2/React_php1/index.php",requestContent)
   .then(response=>{return response.json();})
   .then(json=>{setX(json.names);})
    .catch(error=>{Alert.alert('Error',error);});


  //  .then(p)
    //.then(q)
   // .catch(r);

   // var request = new XMLHttpRequest();
   // request.onreadystatechange=function(){
      //if (request.readyState==4&&request.status==200){
    
       // var json = request.responseText;
       // var JS_object = JSON.parse(json);
       // setX(JS_object.names);
    //
     // }
    
    //};
    
    //request.open("GET","http://10.0.2.2/React_php1/index.php",true);
   // request.send();
    
    }

   // function p(response){
    // return response.json();
   // }

  // function q(json){
  //    setX(json.names);
  // }

  //  function r(error){
   //  Alert.alert('Error',error);
   // }


  return ui;
}



function m({item}){
  const itemui =(
<Text >{item}</Text>
  );
  return itemui;
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container } from "native-base";
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";

export default function App () {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.container}>
      {!userName ?(
        //Carga Login
        <Login setUserName={setUserName}/>
      ):(
        //Carga el chat
        <Chat userName={userName}/>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#16202B"
  },
})

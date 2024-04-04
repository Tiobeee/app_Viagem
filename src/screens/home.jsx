import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Entra ai
        </Text>
      <View style={styles.footerContainer}>
        <Button onPress={() => nav.navigate("openCamera")} style={styles.button} label="aa"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

{/*  */}


// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import Device from 'expo-device';
// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android' && !Device.isDevice) {
//         setErrorMsg(
//           'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
//         );
//         return;
//       }
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   useEffect(() => {
//     console.log(text);
//   }, [text]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 20,
    
//   },
// });

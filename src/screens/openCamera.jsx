import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraRoll } from 'react-native';


export default function OpenCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState (null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}> Abrir câmera </Text>
        <Button onPress={requestPermission} title="Abrir!" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const __takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, exif: false };
      const photo = await cameraRef.current.takePictureAsync(options);
      setPhoto(photo);
    }
  };
  

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Virar Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.takeButton} onPress={__takePicture}>
            <Text style={styles.text}>Tirar Foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
    marginRight: 100,
  },
  takeButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

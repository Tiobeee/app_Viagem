import { Text, View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import photo from '../../src/screens/openCamera';

export default function AlbumScreen({ }) {

  if (photo) {
    return (
      <View style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo.uri }} />
        <View>
          <Button title="Share" onPress={sharePhoto} />
          {hasMediaLibraryPermissions && (
            <Button title="Save" onPress={savePhoto} />
          )}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>
      </View>
    );
  }
};
  const styles = StyleSheet.create({
    preview: {
      justifyContent: 'center'
    }
  });
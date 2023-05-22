import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Routine = ({name}) => {
  return (
    <TouchableOpacity style={styles.featured}><Text> {name}</Text></TouchableOpacity>
  );
};

export default Routine;

const styles = StyleSheet.create({
    featured: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 8,
      paddingHorizontal: 80,
      borderWidth: 1,
    }
  });

  const data = [
    {
      name: "workout1",
      id: "001",
    },
    {
      name: "workout2",
      id: "002",
    }
  ];

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeSvg from '../assets/images/home.svg';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title_text}>Game On</Text>
        <HomeSvg width={400} height={400} style={styles.home_img} />

        <Pressable
          onPress={() => navigation.navigate('Game')}
          style={({pressed}) => [
            styles.begin_button,
            {
              backgroundColor: pressed ? '#00ff00' : '#F66074',
            },
          ]}
          android_ripple={{color: 'blue'}}>
          <Text style={styles.button_text}>Lets Begin</Text>
          <Icon name="chevron-right" style={styles.button_text} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  title_text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  begin_button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  home_img: {
    transform: [{rotate: '00deg'}],
  },
});

export default Home;

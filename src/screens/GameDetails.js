import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

const GameDetails = ({route}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Image source={route?.params.image} style={styles.item_image} />
      </View>

      <Text style={styles.item_title}>{route?.params.title}</Text>
      <Text style={styles.item_owner}>{route?.params.owner}</Text>
      <Text style={styles.item_price}>{route?.params.price}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item_image: {
    height: 200,
    width: 300,
    borderRadius: 20,
    marginBottom: 10,
  },
  item_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  item_owner: {
    fontSize: 20,
    color: '#000',
  },
  item_price: {
    color: '#F66074',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 200,
  },
});

export default GameDetails;

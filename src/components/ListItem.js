import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ListItem = ({item, uniqueKey}) => {
  return (
    <View style={styles.item_container} key={uniqueKey}>
      <View style={{flexDirection: 'row', width: '60%'}}>
        <Image source={item.image} style={styles.item_image} />
        <View>
          <Text numberOfLines={1} style={styles.item_title}>
            {item.title}
          </Text>
          <Text style={styles.item_title}>{item.owner}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.price_button}>
        <Text
          style={{color: '#fff', fontWeight: 'bold', margin: 0, padding: 0}}>
          {item?.price ? item.price : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item_image: {
    width: 55,
    height: 55,
    marginRight: 10,
    borderRadius: 8,
  },
  price_button: {
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 0,
    height: 40,
  },
  item_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

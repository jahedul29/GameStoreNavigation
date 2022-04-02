import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../assets/images/drawer-bg.jpg')}
          style={styles.bg_image}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{height: 80, width: 80}}
          />
          <Text style={styles.name_text}>John Doe</Text>
          <View style={styles.balance}>
            <Text style={styles.balance_text}>Coins 280</Text>
            <FontAwesome name="bitcoin" style={styles.balance_icon} />
          </View>
        </ImageBackground>
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawer_footer}>
        <View style={styles.drawer_footer_item}>
          <Ionicons name="share-social-outline" size={16} color={'black'} />
          <Text style={styles.drawer_footer_text}>Tell a Friend</Text>
        </View>
        <View style={styles.drawer_footer_item}>
          <Ionicons name="log-out-outline" size={16} color={'black'} />
          <Text style={styles.drawer_footer_text}>Sign Out</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg_image: {
    padding: 30,
  },
  name_text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balance_icon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawer_footer: {
      borderTopWidth: 1,
      borderTopColor: 'black',
      paddingVertical: 30,
  },
  drawer_footer_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  drawer_footer_text: {
      fontSize: 16,
      color: 'black',
      marginLeft: 10,
  },
});

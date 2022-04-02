/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { freeGames, sliderData } from './../model/data';
import { deviceWidth } from './../utils/dimentions';
import BannerSlider from './../components/BannerSlider';
import ListItem from './../components/ListItem';
import CustomSwitch from './../components/CustomSwitch';

const Game = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onTabSelection = (value) => {
    setSelectedTab(value);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top_profile_content}>
            <Text style={styles.profile_title}>Hello Jahed</Text>
            <Image
              style={styles.profile_img}
              source={require('../assets/images/profile.png')}
            />
          </View>

          <View style={styles.search_wrapper}>
            <Feather name="search" size={20} color="#ccc" />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'#ccc'}
              style={styles.search_input}
            />
          </View>

          <View style={styles.top_profile_content}>
            <Text style={styles.profile_title}>Upcoming Games</Text>
            <TouchableOpacity>
              <Text style={styles.see_all_text}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.games_carousel_wrapper}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={deviceWidth - 40}
              itemWidth={300}
              loop={true}
            />
          </View>

          <CustomSwitch
            selectedTab={selectedTab}
            onTabSelection={onTabSelection}
            option1="Free Games"
            option2="Paid Games"
          />
          {
            selectedTab === 0 && freeGames.reverse().map((item, index) =>(
              <ListItem item={item} uniqueKey={`${index}free`}/>
            ))
          }
          {
            selectedTab === 1 && freeGames.reverse().map((item, index) =>(
              <ListItem item={item} uniqueKey={`${index}paid`}/>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
  },
  profile_title : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profile_img: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  top_profile_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  search_wrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // height: 40,
    padding: 10,
    flexDirection: 'row',
  },
  search_input: {
    height: 20,
    padding: 0,
    marginLeft: 10,
  },
  see_all_text: {
    color: '#F66074',
    fontWeight: 'bold',
    fontSize: 16,
  },
  games_carousel_wrapper: {
    
  }
});

export default Game;

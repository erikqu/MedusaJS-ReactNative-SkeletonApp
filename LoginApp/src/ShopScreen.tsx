import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import baseURL from '../constants/urls';
import axios from 'axios';
import ProductList from './ProductList';

const ShopScreen: React.FC = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('Mens');

  return (
    <View style={styles.container}>
      <View style={styles.subMenu}>
        <TouchableOpacity onPress={() => setSelectedCategory('Mens')}>
          <Text
            style={[
              styles.subMenuItem,
              selectedCategory === 'Mens' && styles.selected,
            ]}>
            Mens
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Womens')}>
          <Text
            style={[
              styles.subMenuItem,
              selectedCategory === 'Womens' && styles.selected,
            ]}>
            Womens
          </Text>
        </TouchableOpacity>
      </View>
      <ProductList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    height: '5%',
  },
  subMenuItem: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0,
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default ShopScreen;

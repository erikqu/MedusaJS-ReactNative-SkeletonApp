import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import baseURL from '../constants/urls';

const ProductList = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/store/products`)
      .then(response => {
        console.log(JSON.stringify(response, null, 2));
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data: ', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading data!</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <View style={styles.block}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {product: item})
            }>
            <Image
              source={{
                uri: item.thumbnail,
              }}
              style={styles.block}
            />
            <Text>
              {item.title} {item.price}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2}
    />
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
    height: '200%',
    margin: 5,
    borderWidth: 0,
    borderColor: 'gray',
    textShadowColor: 'gray',
    textShadowRadius: 5,
  },
});

export default ProductList;

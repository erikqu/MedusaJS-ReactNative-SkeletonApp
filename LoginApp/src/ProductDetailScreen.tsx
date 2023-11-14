import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductDetailScreen = ({route, navigation}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.thumbnail,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>{product.subtitle}</Text>
      <Text style={styles.description}>{product.description}</Text>

      {product.images.map(img => (
        <Image key={img.id} source={{uri: img.url}} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default ProductDetailScreen;

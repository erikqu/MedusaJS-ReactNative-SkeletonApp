import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const data = [
  {id: '1', name: 'Order History', description: "Track what's on the way"},
  {
    id: '2',
    name: 'Payment Methods',
    description: 'Add a default payment method',
  },
  {
    id: '3',
    name: 'Address Book',
    description: 'lorem ipsum',
  },
  {
    id: '4',
    name: 'Password & Personal Information',
    description: 'Update password, Phone Number, lorem ipsum',
  },
  // ... add more items as needed
];

const AccountScreen: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDescription: {
    color: 'darkgray',
    marginTop: 5,
  },
});

export default AccountScreen;

import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      {/* <ProductItem item={products[0]} /> */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {padding: 10},
});

export default ShoppingCartScreen;

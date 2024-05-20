import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import service from '../../api/service';
import {Category} from '../../types/Category';
import CategoryBox from '../home/CategoryBox';

const CategoryListBox = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategories = async () => {
    service
      .getCategories()
      .then(res => {
        setCategoryList(res.data.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.mainView}>
      <FlatList
        data={categoryList}
        renderItem={({item}: {item: Category}) => {
          return <CategoryBox category={item} />;
        }}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 24,
    flex: 1,
  },
  contentContainerStyle: {
    gap: 16,
  },
  columnWrapperStyle: {
    gap: 11,
    justifyContent: 'space-between',
  },
});
export default CategoryListBox;

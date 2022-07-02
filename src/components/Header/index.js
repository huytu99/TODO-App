import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import SearchBar from '../Search';

const Header = ({ onSearchFilter, searchText }) => {
  return (
    <View style={styles.viewHeader}>
      <Text style={styles.textTitle}>Todo List</Text>
      <SearchBar onSearchFilter={onSearchFilter} searchText={searchText} />
    </View>
  );
};

export default Header;

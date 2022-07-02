import { TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const SearchBar = ({ onSearchFilter, searchText }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchFilter}>
        <Icon name="search" size={25} style={styles.marginIcon} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        style={styles.widthTextInput}
        value={searchText}
        onChangeText={onSearchFilter}
      />
    </View>
  );
};

export default SearchBar;

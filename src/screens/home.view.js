import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import ListItem from './components/ListItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './home.styles';
import Header from '../components/Header';
import CustomModal from '../components/Modal';

const HomeView = ({
  data,
  onAddPress,
  visible,
  setVisible,
  title,
  setTitle,
  description,
  setDescription,
  onDeletePress,
  onOpenItem,
  loginLoading,
  searchText,
  onSearchFilter,
}) => {
  return (
    <View style={styles.container}>
      <Header searchText={searchText} onSearchFilter={onSearchFilter} />

      {loginLoading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ListItem data={data} onDeletePress={onDeletePress} />
      )}

      <View style={styles.addButton}>
        <TouchableOpacity onPress={onOpenItem}>
          <Icon name="ios-add-circle" size={40} />
        </TouchableOpacity>
      </View>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        onAddPress={onAddPress}
        onDeletePress={onDeletePress}
      />
    </View>
  );
};

export default HomeView;

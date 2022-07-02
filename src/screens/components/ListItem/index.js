import { FlatList } from 'react-native';
import React from 'react';
import Item from '../Item/index';

const ListItem = ({ data, setVisible, onDeletePress }) => {
  const renderItem = item => {
    return (
      <Item item={item} setVisible={setVisible} onDeletePress={onDeletePress} />
    );
  };
  return <FlatList data={data} renderItem={renderItem} />;
};

export default ListItem;

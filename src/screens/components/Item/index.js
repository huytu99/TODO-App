import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconDelete from 'react-native-vector-icons/AntDesign';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import COLORS from '../../../constants/color';
import { deleteHandle } from '../../redux/actions/todo.action';
import { styles } from './styles';

const Item = ({ item, onDeletePress, onEditPress }) => {
  const [checked, setChecked] = useState(false);
  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.wrappedItem}>
          <View style={styles.row}>
            <TouchableOpacity onPress={onCheck} style={styles.marginTop}>
              <IconCheck
                name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={35}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.textTitle}>{item.item.title}</Text>
              <Text>{item.item.description}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => onDeletePress(item.item)}>
            <IconDelete name="delete" size={30} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Item);

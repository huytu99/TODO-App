import React from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';

const CustomModal = ({
  visible,
  setVisible,
  title,
  description,
  setTitle,
  setDescription,
  onAddPress,
  isEdit,
  setIsEdit,
  onEditPress,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <View style={styles.wrappedModal}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.closeButton}>
            <Image source={require('../../assets/Close.png')} />
          </TouchableOpacity>
          <View style={styles.titleField}>
            <Text style={styles.textTitle}>Title</Text>
            <TextInput
              placeholder="..."
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              value={title}
              onChangeText={text => {
                setTitle(text);
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.desField}>
            <Text style={styles.textTitle}>Description</Text>
            <TextInput
              placeholder="..."
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              value={description}
              onChangeText={text => setDescription(text)}
              style={styles.input}
            />
          </View>

          {isEdit ? (
            <TouchableOpacity onPress={onEditPress} style={styles.addButton}>
              <Text style={styles.addText}>EDIT</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
              <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(CustomModal);

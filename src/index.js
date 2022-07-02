import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import APIUtils from './api/apiUtils';
import COLORS from './constants/color';

const renderItem = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 5 }}>
          {item.first_name}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {item.last_name}
        </Text>
      </View>

      <Text>{item.email}</Text>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{ uri: item.avatar }}
      />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginRight: 5,
            color: COLORS.BLACK,
          }}>
          {item.first_name}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.BLACK }}>
          {item.last_name}
        </Text>
      </View>
      <Text>{item.email}</Text>
    </View>
  );
};

const NewItem = ({ item }) => {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginRight: 5,
            color: COLORS.BLACK,
          }}>
          {item.name}
        </Text>
      </View>
      <Text>{item.job}</Text>
    </View>
  );
};

const Root = () => {
  const [productList, setProductList] = useState([]);
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState([]);

  const body = {
    name: 'Huy Tu',
    job: 'Fresher',
  };

  // function get all user
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = 2;
        const response = await APIUtils.get('/users?page=2');
        console.log('Fetch users successfully: ', response.data);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch users list: ', error);
      }
    };
    fetchProductList();
  }, []);

  // function get 1 user
  const getUser = async () => {
    try {
      const response = await APIUtils.get('/users/1');
      console.log('Get user successfully: ', response.data);
      // setUser(response.data);
    } catch (error) {
      console.log('Failed to get user: ', error);
    }
  };

  // function đăng ký user
  const onRegister = async () => {
    try {
      const response = await APIUtils.post('/users', body);
      console.log('Register user successfully', response.data);

      setNewUser(response);
      console.log('Register user successfully');
    } catch (error) {
      console.log('Failed to register user: ', error);
    }
  };
  return (
    <View style={{ justifyContent: 'space-between' }}>
      {/* <FlatList
          data={productList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        /> */}
      <Item item={user} />
      <NewItem item={newUser} />
      <View style={{ marginTop: 300 }}>
        <Button title="ADD" onPress={getUser} />
      </View>
      <View>
        <Button title="REGISTER" onPress={onRegister} />
      </View>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({});

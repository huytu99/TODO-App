export const getItemApi = id => {
  console.log('getItemApi');
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id === 1) {
        res(console.log('hihi'));
      } else {
        res(console.log('huhu'));
      }
    }, 5000);
  });
};

// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeItem = async title => {
//   console.log('getItemApi');
//   try {
//     await AsyncStorage.setItem('Item', title);
//   } catch (error) {
//     console.log(error);
//   }
// };

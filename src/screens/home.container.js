import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInformationSelector } from '../redux/selector/todo.selector';
import {
  addHandle,
  deleteHandle,
  getTodoHandle,
  searchHandle,
} from '../redux/actions/todo.action';
import HomeView from './home.view';
import { getLoadingSelector } from '../redux/selector/loading.selector';
import { GET } from '../redux/constants/todo.constant';

const HomeContainer = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [searchText, setSearchText] = useState('');
  const todoList = useSelector(getInformationSelector);
  useEffect(() => {
    dispatch(getTodoHandle({}));
  }, [dispatch]);
  const onOpenItem = () => {
    setVisible(!visible);
  };
  const dispatch = useDispatch();
  const onAddPress = useCallback(() => {
    dispatch(
      addHandle({
        title: title,
        description: description,
      }),
    );
    setVisible(false);
    setDescription('');
    setTitle('');
  }, [description, dispatch, setVisible, title]);

  const onDeletePress = useCallback(
    item => {
      dispatch(deleteHandle(item?.title));
    },
    [dispatch],
  );

  const onSearchFilter = useCallback(
    title => {
      setSearchText(title);
      dispatch(searchHandle(title));
    },
    [dispatch],
  );

  const loginLoading = useSelector(type =>
    getLoadingSelector(type, [GET.HANDLE]),
  );
  return (
    <HomeView
      data={todoList}
      visible={visible}
      setVisible={setVisible}
      onAddPress={onAddPress}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      onOpenItem={onOpenItem}
      loginLoading={loginLoading}
      onDeletePress={onDeletePress}
      onSearchFilter={onSearchFilter}
      searchText={searchText}
    />
  );
};

export default HomeContainer;

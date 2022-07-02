import { ADD, DELETE, EDIT, GET, SEARCH } from '../constants/todo.constant';

const initialSate = {
  listTodo: [],
};

const todoReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD.SUCCESS:
      return { ...state, listTodo: action?.payload };

    case DELETE.SUCCESS:
      return { ...state, listTodo: action?.payload };

    case SEARCH.SUCCESS:
      return { ...state, listTodo: action?.payload };

    case GET.SUCCESS:
      return { ...state, listTodo: action?.payload };

    case EDIT.SUCCESS: {
      const { title } = action.payload;
      return {
        ...state,
        listTodo: state.listTodo.filter(todo =>
          todo.title === title ? action.payload : todo,
        ),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;

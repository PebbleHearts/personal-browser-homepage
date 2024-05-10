import TodoListIcon from '../assets/png/todo-list.png';
import BookMarkIcon from '../assets/png/bookmark.png';

export const enum Application {
  TODO_LIST = 'TODO_LIST',
  BOOKMARK = 'BOOKMARK',
};

export const enum ApplicationEvents {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
};

export const DesktopIconsList = [
  {
    key: Application.TODO_LIST,
    Icon: TodoListIcon,
    label: 'Todo List'
  },
  {
    key: Application.BOOKMARK,
    Icon: BookMarkIcon,
    label: 'Bookmark'
  }
];
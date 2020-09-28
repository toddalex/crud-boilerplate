import React from 'react';

import NewTodo from '../components/NewTodo/NewTodo';
import TodoList from '../components/TodoList/TodoList';

const Layout: React.FC = React.memo(props => {
  return(
    <div className="Layout">
      <NewTodo />
      <TodoList />
    </div>
  );
});

export default Layout;
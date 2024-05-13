import ApplicationWrapper from "../application-wrapper/ApplicationWrapper";
import TodoList from "./TodoList";

const TodoListContainer = () => {
  return (
    <ApplicationWrapper applicationName='Todo List'>
      <TodoList />
    </ApplicationWrapper>
  );
}

export default TodoListContainer;
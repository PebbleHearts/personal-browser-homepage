import ItemsContainer from "./components/items-container/ItemsContainer";
import Sidebar from "./components/sidebar/Sidebar";

const TodoList = () => {
  return (
      <div className="w-full flex flex-row overflow-y-auto p-5 gap-5">
        <Sidebar />
        <ItemsContainer />
      </div>
  );
}

export default TodoList;
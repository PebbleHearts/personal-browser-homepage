import { useGetProjectsQuery } from "./api/api";
import ItemsContainer from "./components/items-container/ItemsContainer";
import Sidebar from "./components/sidebar/Sidebar";

const TodoList = () => {
  const {data} = useGetProjectsQuery({});

  return (
      <div className="w-full flex flex-row overflow-y-auto p-5 gap-5">
        <Sidebar projects={data} />
        <ItemsContainer />
      </div>
  );
}

export default TodoList;
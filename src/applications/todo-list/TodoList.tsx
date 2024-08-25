import { useState } from "react";
import { useGetProjectsQuery, useGetProjectTodosQuery } from "./api/api";
import ItemsContainer from "./components/items-container/ItemsContainer";
import Sidebar from "./components/sidebar/Sidebar";

const TodoList = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const { data } = useGetProjectsQuery({});

  const { data: projectTodos } = useGetProjectTodosQuery({
    projectId: selectedProject || -1,
  });

  console.log(projectTodos);

  return (
    <div className="w-full flex flex-row overflow-y-auto p-5 gap-5">
      <Sidebar
        projects={data}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <ItemsContainer selectedProject={selectedProject} items={projectTodos} />
    </div>
  );
};

export default TodoList;

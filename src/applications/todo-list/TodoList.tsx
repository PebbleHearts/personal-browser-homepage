import { useState } from "react";
import {
  useCreateTodoMutation,
  useGetProjectsQuery,
  useGetProjectTodosQuery,
} from "./api/api";
import ItemsContainer from "./components/items-container/ItemsContainer";
import Sidebar from "./components/sidebar/Sidebar";
import CreateTodoItemPopup from "./components/create-todo-item-popup/CreateTodoItemPopup";
import { Button } from "@/shadcn-components/ui/button";

const TodoList = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [createTodo] = useCreateTodoMutation();

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleSubmit = (title: string, description: string) => {
    console.log("selectedProject", selectedProject);
    console.log("Title:", title);
    console.log("Description:", description);
    createTodo({ title, description, projectId: selectedProject || -1 });
  };

  const { data } = useGetProjectsQuery({});

  const { data: projectTodos } = useGetProjectTodosQuery({
    projectId: selectedProject || -1,
  });

  console.log(projectTodos);

  return (
    <>
      <div className="w-full flex flex-row overflow-y-auto p-5 gap-5">
        <Sidebar
          projects={data}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <div className="flex flex-1 flex-col gap-5">
          <Button className="self-end text-black" variant="outline" onClick={openPopup}>+ Create</Button>
          <ItemsContainer
            selectedProject={selectedProject}
            items={projectTodos}
          />
        </div>
      </div>
      <CreateTodoItemPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default TodoList;

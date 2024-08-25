import { useState } from "react";
import CreateTodoItemPopup from "../create-todo-item-popup/CreateTodoItemPopup";
import TodoItem from "../todo-item/TodoItem";
import { useCreateTodoMutation } from "../../api/api";
import { ProjectItem } from "../../types";

type ItemsContainerProps = {
  selectedProject: number | null;
  items: ProjectItem[] | undefined
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ items ,selectedProject }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [createTodo] = useCreateTodoMutation();

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleSubmit = (title: string, description: string) => {
    console.log('selectedProject', selectedProject);
    console.log('Title:', title);
    console.log('Description:', description);
    createTodo({ title, description, projectId: selectedProject || -1 });
  }

  return (
    <>
      <div className="flex-1 flex flex-col gap-2">
        <button onClick={openPopup}>Add new item</button>
        {items?.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            description={item.description}
            completed={false}
          />
        ))}
      </div>
      <CreateTodoItemPopup
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        onSubmit={handleSubmit} 
      />
    </>
  );
};

export default ItemsContainer;
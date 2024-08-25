import { useState } from "react";
import CreateTodoItemPopup from "../create-todo-item-popup/CreateTodoItemPopup";
import TodoItem from "../todo-item/TodoItem";
import { useCreateTodoMutation } from "../../api/api";

const TODO_ITEMS = [
  {
    id: 1,
    title: 'Buy milk',
    description: 'Buy 2L of milk',
    completed: false,
  },
  {
    id: 2,
    title: 'Buy bread',
    description: 'Buy whole grain bread',
    completed: true,
  },
  {
    id: 3,
    title: 'Buy butter',
    description: 'Buy 500g of butter',
    completed: false,
  },
];

type ItemsContainerProps = {
  selectedProject: number | null;
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ selectedProject }) => {
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
        {TODO_ITEMS.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            description={item.description}
            completed={item.completed}
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
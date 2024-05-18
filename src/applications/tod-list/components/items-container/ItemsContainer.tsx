import TodoItem from "../todo-item/TodoItem";

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

const ItemsContainer: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      {TODO_ITEMS.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          description={item.description}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
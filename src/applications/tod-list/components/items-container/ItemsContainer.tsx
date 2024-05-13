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
        <div className="p-3 bg-gray-950/75 rounded-lg">
          <div>
            {item.title}
          </div>
          <div>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
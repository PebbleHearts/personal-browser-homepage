type TodoItemProps = {
  title: string;
  description: string;
  completed: boolean;
};

const TodoItem = ({ title, description }: TodoItemProps) => {
  return (
    <div className="p-3 bg-gray-950/75 rounded-lg">
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}

export default TodoItem;
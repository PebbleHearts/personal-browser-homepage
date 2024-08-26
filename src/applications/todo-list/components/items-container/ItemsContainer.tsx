import TodoItem from "../todo-item/TodoItem";
import { ProjectItem } from "../../types";

type ItemsContainerProps = {
  selectedProject: number | null;
  items: ProjectItem[] | undefined;
};

const ItemsContainer: React.FC<ItemsContainerProps> = ({ items }) => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-2">
        {items?.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            description={item.description}
            completed={false}
          />
        ))}
      </div>
    </>
  );
};

export default ItemsContainer;

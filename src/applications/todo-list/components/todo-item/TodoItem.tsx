import { CustomSelect } from "@/components/custom-select/CustomSelect";
import { useState } from "react";

type TodoItemProps = {
  title: string;
  description: string;
  completed: boolean;
};

const TodoItem = ({ title, description }: TodoItemProps) => {
  const [status, setStatus] = useState("In Progress");
  return (
    <div className="flex flex-row justify-between items-center p-3 bg-gray-950/75 rounded-lg">
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <CustomSelect
        options={[
          { key: "todo", value: "todo" },
          { key: "In Progress", value: "In Progress" },
        ]}
        placeholder="Select Status"
        value={status}
        onSelect={(val) => setStatus(val)}
      />
    </div>
  );
};

export default TodoItem;

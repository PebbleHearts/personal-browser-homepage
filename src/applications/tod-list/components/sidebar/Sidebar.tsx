import { useState } from "react";

type ListItemProps = {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
};
const ListItem = ({ name, isSelected, onSelect }: ListItemProps) => {
  return (
    <li className={`bg-gray-50/5 p-2 px-4 rounded-lg cursor-pointer select-none ${isSelected && 'bg-gray-50/20'}`} onClick={onSelect}>{name}</li>
  );
};

const ProjectsList = [
  { id: 1, name: 'Personal' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' }
];

const Sidebar = () => {
  const [selectedProject, setSelectedProject] = useState(ProjectsList[0].id);
  const handleSelect = (id: number) => {
    setSelectedProject(id);
  };

  return (
    <div className="flex flex-row gap-5 min-w-52 bg-black/20 p-5 rounded-lg">
      <ul className="w-full flex flex-col items-stretch gap-2">
        {ProjectsList.map((project) => {
          return <ListItem key={project.id} isSelected={selectedProject === project.id} name={project.name} onSelect={() => handleSelect(project.id)} />;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
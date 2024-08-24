import { useEffect, useState } from "react";
import { ProjectItem } from "../../types";

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

type SidebarProps = {
  projects: ProjectItem[] | undefined;
};

const Sidebar = ({ projects }: SidebarProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setSelectedProject(projects[0].id);
    }
  }, [projects]);

  const handleSelect = (id: number) => {
    console.log(id);
    setSelectedProject(id);
  };

  return (
    <div className="flex flex-row gap-5 min-w-52 bg-black/20 p-5 rounded-lg">
      <ul className="w-full flex flex-col items-stretch gap-2">
        {projects?.map((project) => {
          return <ListItem key={project.id} isSelected={selectedProject === project.id} name={project.title} onSelect={() => handleSelect(project.id)} />;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
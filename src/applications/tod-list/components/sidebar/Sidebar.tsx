type ListItemProps = {
  name: string;
};
const ListItem = ({ name }: ListItemProps) => {
  return (
    <li className="bg-gray-50/5 p-2 px-4 rounded-lg cursor-pointer">{name}</li>
  );
};

const ProjectsList = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' }
];

const Sidebar = () => {
  return (
    <div className="flex flex-row gap-5 min-w-52 bg-black/20 p-5 rounded-lg">
      <ul className="w-full flex flex-col items-stretch gap-2">
        {ProjectsList.map((project) => {
          return <ListItem key={project.id} name={project.name} />;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
const Sidebar = () => { 
  return (
    <div className="flex flex-row gap-5">
      <ul>
        <li>Folder 1</li>
        <li>Folder 2</li>
        <li>Folder 3</li>
      </ul>
      <ul>
        <li>Todo</li>
        <li>In Progress</li>
        <li>Done</li>
      </ul>
    </div>
  );
}

export default Sidebar;
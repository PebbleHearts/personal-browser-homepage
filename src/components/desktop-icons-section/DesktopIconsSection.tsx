import TodoListIcon from '../../assets/png/todo-list.png';
import BookMarkIcon from '../../assets/png/bookmark.png';

const DesktopIconsList = [
  {
    Icon: TodoListIcon,
    label: 'Todo List'
  },
  {
    Icon: BookMarkIcon,
    label: 'Bookmark'
  }
];

const DesktopIconsSection = () => {
  return (
    <div className='absolute inset-0 flex flex-col items-start p-5 gap-2 z-50'>
      {DesktopIconsList.map((desktopIconItem) => (
        <div key={desktopIconItem.label} className='flex flex-col items-center'>
          <div className='p-5 bg-black/10 hover:bg-black/15 cursor-pointer rounded-xl'>
            <img src={desktopIconItem.Icon} className='w-16 h-16' />
          </div>
          <h6 className='text-base font-medium text-gray-300'>{desktopIconItem.label}</h6>
        </div>
      )
      )}
    </div>
  );
};

export default DesktopIconsSection;

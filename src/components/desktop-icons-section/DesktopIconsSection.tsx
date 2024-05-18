import { Application, ApplicationEvents, DesktopIconsList } from "../../constants/applications";
import { eventEmitter } from "../../constants/eventEmitter";

const handleIconClick = (key: Application) => () => {
  eventEmitter.emit(ApplicationEvents.OPEN, key);
};

const DesktopIconsSection = () => {
  return (
    <div className='p-5 flex flex-col items-start'>
      {DesktopIconsList.map((desktopIconItem) => (
        <div key={desktopIconItem.label} className='flex flex-col items-center'>
          <div className='p-5 bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl' onClick={handleIconClick(desktopIconItem.key)}>
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

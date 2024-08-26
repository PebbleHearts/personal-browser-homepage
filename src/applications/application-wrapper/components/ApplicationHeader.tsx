import { ApplicationEvents } from "../../../constants/applications";
import { eventEmitter } from "../../../constants/eventEmitter";
import LeftArrow from '../../../assets/svg/close_icon.svg';

type ApplicationHeaderProps = {
  name: string;
}

const handleAppClose = () => {
  eventEmitter.emit(ApplicationEvents.CLOSE);
}

const ApplicationHeader = ({ name }: ApplicationHeaderProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-gray-600">
      <div className="px-5">
        <h3 className="text-xl">
          {name}
        </h3>
      </div>
      <div className="px-5 py-3 hover:bg-white/25 cursor-pointer" onClick={handleAppClose}>
        <img src={LeftArrow} className="w-4 h-4" />
      </div>
    </div>
  );
}

export default ApplicationHeader;
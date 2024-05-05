import { useContext } from 'react';
import LeftArrow from '../../assets/svg/left_arrow.svg';
import RightArrow from '../../assets/svg/right_arrow.svg';
import { BackgroundContext } from '../../context/BackgroundContext';

const DesktopHeader = () => {
  const { hasNext, hasPrevious, goToNextBackground, goToPrevBackground } = useContext(BackgroundContext);
  return (
    <div className="w-full py-1 bg-gray-950/75 flex flex-row items-center justify-between px-5">
      <div className='text-white font'>Nirmal Michel</div>
      <div className='flex flex-row gap-3'>
        <img src={LeftArrow} className={`w-2 h-4 ${hasPrevious ? '' : 'opacity-50'}`} onClick={goToPrevBackground} />
        <img src={RightArrow} className={`w-2 h-4 ${hasNext ? '' : 'opacity-50'}`} onClick={goToNextBackground} />
      </div>
    </div>
  );
};

export default DesktopHeader;

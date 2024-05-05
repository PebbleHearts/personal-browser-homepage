import { ReactNode, createContext, useState } from 'react';
import { AnimatedBackgroundsList } from '../constants/animatedBackgrounds';

type BackgroundContextType = {
  currentBackground: number;
  hasNext: boolean;
  hasPrevious: boolean;
  goToNextBackground: () => void;
  goToPrevBackground: () => void;
};

export const BackgroundContext = createContext<BackgroundContextType>({
  currentBackground: 0,
  hasNext: false,
  hasPrevious: false,
  goToNextBackground: () => { },
  goToPrevBackground: () => { },
});

type BackgroundContextProviderProps = {
  children: ReactNode;
};

const BackgroundContextProvider = ({ children }: BackgroundContextProviderProps) => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const hasNext = currentBackground < AnimatedBackgroundsList.length - 1;
  const hasPrevious = currentBackground > 0;

  const goToNextBackground = () => {
    if (hasNext) setCurrentBackground((prev) => prev + 1);
  };

  const goToPrevBackground = () => {
    if (hasPrevious) setCurrentBackground((prev) => prev - 1);
  };

  return (
    <BackgroundContext.Provider value={{ currentBackground, hasNext, hasPrevious, goToNextBackground, goToPrevBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;

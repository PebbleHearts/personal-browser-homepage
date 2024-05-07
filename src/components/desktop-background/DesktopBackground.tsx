import { useContext } from "react";
import { AnimatedBackgroundsList } from "../../constants/animatedBackgrounds";
import { BackgroundContext } from "../../context/BackgroundContext";

const DesktopBackground = () => {
  const { currentBackground } = useContext(BackgroundContext);

  const CurrentBackground = AnimatedBackgroundsList[currentBackground];
  return (
    <CurrentBackground key={currentBackground} />
  )
}

export default DesktopBackground;
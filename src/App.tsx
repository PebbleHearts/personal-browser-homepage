import { useContext } from "react";
import { AnimatedBackgroundsList } from "./constants/animatedBackgrounds";
import { BackgroundContext } from "./context/BackgroundContext";
import Desktop from "./layout/Desktop";

function App() {
  const { currentBackground } = useContext(BackgroundContext);

  const CurrentBackground = AnimatedBackgroundsList[currentBackground];
  return (
    <Desktop>
      <CurrentBackground key={currentBackground} />
    </Desktop>
  );
}

export default App

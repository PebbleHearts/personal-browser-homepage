import Desktop from "./layout/Desktop";
import DesktopBackground from "./components/desktop-background/DesktopBackground";
import DesktopHome from "./components/desktop-home/DesktopHome";

function App() {
  return (
    <Desktop>
      <DesktopHome />
      <DesktopBackground />
    </Desktop>
  );
}

export default App

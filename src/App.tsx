import Desktop from "./layout/Desktop";
import DesktopBackground from "./components/desktop-background/DesktopBackground";
import ApplicationsContainer from "./components/applications-container/ApplicationsContainer";
import DesktopHome from "./components/desktop-home/DesktopHome";

function App() {
  return (
    <Desktop>
      <ApplicationsContainer />
      <DesktopHome />
      <DesktopBackground />
    </Desktop>
  );
}

export default App

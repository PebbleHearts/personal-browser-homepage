import Desktop from "./layout/Desktop";
import DesktopHeader from "./components/desktop-header/DesktopHeader";
import DesktopOverlay from "./components/desktop-overlay/DesktopOverlay";
import DesktopIconsSection from "./components/desktop-icons-section/DesktopIconsSection";
import DesktopBackground from "./components/desktop-background/DesktopBackground";
import ApplicationsContainer from "./components/applications-container/ApplicationsContainer";

function App() {
  return (
    <Desktop>
      <ApplicationsContainer />
      <DesktopOverlay>
        <DesktopHeader />
        <DesktopIconsSection />
      </DesktopOverlay>
      <DesktopBackground />
    </Desktop>
  );
}

export default App

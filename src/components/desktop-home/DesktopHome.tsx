import ApplicationsContainer from "../applications-container/ApplicationsContainer";
import DesktopHeader from "../desktop-header/DesktopHeader";
import DesktopIconsSection from "../desktop-icons-section/DesktopIconsSection";
import DesktopOverlay from "../desktop-overlay/DesktopOverlay";

const DesktopHome = () => {
  return (
    <DesktopOverlay>
      <DesktopHeader />
      <div className="relative w-full h-full">
        <DesktopIconsSection />
        <ApplicationsContainer />
      </div>
    </DesktopOverlay>
  );
};

export default DesktopHome;

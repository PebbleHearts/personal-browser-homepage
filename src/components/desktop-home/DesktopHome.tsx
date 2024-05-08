import DesktopHeader from "../desktop-header/DesktopHeader";
import DesktopIconsSection from "../desktop-icons-section/DesktopIconsSection";
import DesktopOverlay from "../desktop-overlay/DesktopOverlay";

const DesktopHome = () => {
  return (
    <DesktopOverlay>
    <DesktopHeader />
    <DesktopIconsSection />
  </DesktopOverlay>
  );
};

export default DesktopHome;

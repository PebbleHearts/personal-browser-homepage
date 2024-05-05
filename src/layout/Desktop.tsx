import DesktopHeader from "../components/desktop-header/DesktopHeader";
import DesktopIconsSection from "../components/desktop-icons-section/DesktopIconsSection";
import DesktopOverlay from "../components/desktop-overlay/DesktopOverlay";

export type DesktopProps = {
  children: JSX.Element;
};

const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className="w-full h-screen relative">
      <DesktopOverlay>
        <DesktopHeader />
        <DesktopIconsSection />
      </DesktopOverlay>
      {children}
    </div>
  );
};

export default Desktop;
import DesktopIconsSection from "../components/desktop-icons-section/DesktopIconsSection";

export type DesktopProps = {
  children: JSX.Element;
};

const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className="w-full h-screen relative">
      {/* TODO: wrap with another componene named DesktopOverlay if we need to display other things too in the desktop */}
      <DesktopIconsSection />
      {children}
    </div>
  );
};

export default Desktop;
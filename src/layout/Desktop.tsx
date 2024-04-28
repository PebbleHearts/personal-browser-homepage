import DesktopIconsSection from "../components/desktop-icons-section/DesktopIconsSection";

export type DesktopProps = {
  children: JSX.Element;
};

const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className="w-full h-screen relative bg-green-500">
      <DesktopIconsSection />
      {children}
    </div>
  );
};

export default Desktop;
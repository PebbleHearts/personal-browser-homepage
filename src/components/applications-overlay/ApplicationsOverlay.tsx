import { ReactNode } from "react";

export type DesktopOverlayProps = {
  children: ReactNode;
  hasOpenApp: boolean;
};

const ApplicationsOverlay = ({ children, hasOpenApp }: DesktopOverlayProps) => {
  return (
    <div
      className={`absolute inset-2 rounded-md overflow-hidden flex flex-col items-start z-50 bg-gray-900 pointer-events-none opacity-0 ${hasOpenApp && 'pointer-events-auto opacity-100'}`}
    >
      {children}
    </div>
  );
};

export default ApplicationsOverlay;
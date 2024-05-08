import { ReactNode } from "react";

export type DesktopOverlayProps = {
  children: ReactNode;
};

const ApplicationsOverlay = ({ children }: DesktopOverlayProps) => {
  return (
    <div className='absolute inset-2 rounded-md overflow-hidden flex flex-col items-start z-50 bg-gray-900'>
      {children}
    </div>
  );
};

export default ApplicationsOverlay;
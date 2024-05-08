import { ReactNode } from "react";

export type DesktopOverlayProps = {
  children: ReactNode;
};

const DesktopOverlay = ({ children }: DesktopOverlayProps) => {
  return (
    <div className='absolute inset-0 flex flex-col items-start z-10'>
      {children}
    </div>
  );
};

export default DesktopOverlay;
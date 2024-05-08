import { ReactNode } from "react";

export type DesktopProps = {
  children: ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className="w-full h-screen relative">
      {children}
    </div>
  );
};

export default Desktop;
import { ReactNode } from "react";
import ApplicationHeader from "./components/ApplicationHeader";

type ApplicationWrapperProps = {
  applicationName: string;
  children: ReactNode;
};

const ApplicationWrapper = ({ applicationName, children }: ApplicationWrapperProps) => {
  return (
    <div className='w-full h-full text-white'>
      <ApplicationHeader name={applicationName} />
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}

export default ApplicationWrapper;
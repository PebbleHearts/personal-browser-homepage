import { ReactNode } from "react";
import ApplicationHeader from "./components/ApplicationHeader";

type ApplicationWrapperProps = {
  applicationName: string;
  children: ReactNode;
};

const ApplicationWrapper = ({ applicationName, children }: ApplicationWrapperProps) => {
  return (
    <div className='w-full h-full text-white flex flex-col'>
      <ApplicationHeader name={applicationName} />
      <div className="flex-1 w-full flex overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default ApplicationWrapper;
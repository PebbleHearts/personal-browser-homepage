import Bookmark from "../../applications/bookmark/Bookmark";
import ApplicationsOverlay from "../applications-overlay/ApplicationsOverlay";

const ApplicationsContainer = () => {
  return (
    <ApplicationsOverlay>
      <Bookmark />
    </ApplicationsOverlay>
  );
};

export default ApplicationsContainer;

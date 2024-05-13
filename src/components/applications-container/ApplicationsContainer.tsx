import { useEffect, useState } from "react";
import ApplicationsOverlay from "../applications-overlay/ApplicationsOverlay";
import { eventEmitter } from "../../constants/eventEmitter";
import { Application, ApplicationEvents } from "../../constants/applications";
import Bookmark from "../../applications/bookmark/Bookmark";
import TodoList from "../../applications/tod-list/TodoListContainer";

const ApplicationsContainer = () => {
  const [currentApp, setCurrentApp] = useState<Application | null>(null);

  useEffect(() => {
    eventEmitter.on(ApplicationEvents.OPEN, (data) => {
      setCurrentApp(data as Application);
    });

    eventEmitter.on(ApplicationEvents.CLOSE, () => {
      setCurrentApp(null);
    });

    return () => {
      eventEmitter.removeListener(ApplicationEvents.OPEN);
      eventEmitter.removeListener(ApplicationEvents.CLOSE);
    };
  }, []);

  const getCurrentApp = () => {
    switch (currentApp) {
      case Application.BOOKMARK:
        return <Bookmark />;
      case Application.TODO_LIST:
        return <TodoList />
      default:
        return null;
    };
  };

  return (
    <ApplicationsOverlay hasOpenApp={!!currentApp}>
      {getCurrentApp()}
    </ApplicationsOverlay>
  );
};

export default ApplicationsContainer;

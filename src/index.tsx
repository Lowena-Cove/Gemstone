import {
  staticClasses
} from "@decky/ui";

import {
  definePlugin,
  addEventListener,
  removeEventListener,
  toaster,
} from "@decky/api";
import { FaShip } from "react-icons/fa";
import MoviesAndTV from './MoviesAndTV'; // Import the new MoviesAndTV component

function Content() {
  return <MoviesAndTV />; // Include the MoviesAndTV component here
};

export default definePlugin(() => {
  console.log("Template plugin initializing, this is called once on frontend startup");

  const listener = addEventListener<[test1: string, test2: boolean, test3: number]>("timer_event", (test1, test2, test3) => {
    console.log("Template got timer_event with:", test1, test2, test3);
    toaster.toast({
      title: "template got timer_event",
      body: `${test1}, ${test2}, ${test3}`
    });
  });

  return {
    name: "Test Plugin",
    titleView: <div className={staticClasses.Title}>Decky Example Plugin</div>,
    content: <Content />,
    icon: <FaShip />,
    onDismount() {
      console.log("Unloading");
      removeEventListener("timer_event", listener);
    },
  };
});

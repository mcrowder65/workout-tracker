import FitnessCenter from "@material-ui/icons/FitnessCenter";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";
import Person from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import Timeline from "@material-ui/icons/Timeline";

import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Workouts from "./pages/workouts/workouts";
import Exercises from "./pages/exercises/exercises";
import Progress from "./pages/progress/progress";

export const bottomNavigationRoutes = {
  home: { name: "home", component: Home, icon: HomeIcon },
  profile: { name: "profile", component: Profile, icon: Person },
  workouts: { name: "workouts", component: Workouts, icon: AccessibilityNew },
  exercises: { name: "exercises", component: Exercises, icon: FitnessCenter },
  progress: { name: "progress", component: Progress, icon: Timeline },
};

// TODO fix fonts an variables in home - 3-bar if time left
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Layout from "./Pages/Layout";
import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home";
import DietPage from "./Pages/Diet";
import D_mealTracker from "./Pages/D_mealTracker";
import D_waterIntake from "./Pages/D_waterIntake";
import D_mealPlanner from "./Pages/D_mealPlanner";
import D_macros from "./Pages/D_macros";
import D_addMeal from "./Pages/D_addMeal";
import D_addBreakfast from "./Pages/D_addBreakfast";
import D_addLaunch from "./Pages/D_addLaunch";
import D_addDinner from "./Pages/D_addDinner";
import D_addSnacks from "./Pages/D_addSnacks";
import WatchPage from "./Pages/Watch";
import W_myEvents from "./Pages/W_myEvents";
import ProfilePage from "./Pages/Profile";
import P_userInformation from "./Pages/P_userInformation";
import P_goals from "./Pages/P_goals";
import P_health from "./Pages/P_health";
import P_prefrences from "./Pages/P_prefrences";
import P_account from "./Pages/P_account";
import P_history from "./Pages/P_history";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Diet",
        element: <Outlet />, // Render only the children of DietPage
        children: [
          { index: true, element: <DietPage /> }, // Render DietPage at the index route
          {
            path: "meal-tracker",
            element: <Outlet />,
            children: [
              { index: true, element: <D_mealTracker /> },
              { path: "add-breakfast", element: <D_addBreakfast /> },
              { path: "add-launch", element: <D_addLaunch /> },
              { path: "add-dinner", element: <D_addDinner /> },
              { path: "add-snacks", element: <D_addSnacks /> },
              { path: "macros", element: <D_macros /> },
            ],
          },
          { path: "water-intake", element: <D_waterIntake /> },
          {
            path: "meal-planner",
            element: <Outlet />,
            children: [
              { index: true, element: <D_mealPlanner /> },
              {
                path: ":dayName",
                element: <Outlet />,
                children: [
                  { index: true, element: <D_addMeal /> },
                  { path: "add-breakfast", element: <D_addBreakfast /> },
                  { path: "add-launch", element: <D_addLaunch /> },
                  { path: "add-dinner", element: <D_addDinner /> },
                  { path: "add-snacks", element: <D_addSnacks /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "Watch",
        element: <Outlet />,
        children: [
          { index: true, element: <WatchPage /> },
          { path: "my-events", element: <W_myEvents /> },
        ],
      },
      {
        path: "Profile",
        element: <Outlet />,
        children: [
          { index: true, element: <ProfilePage /> },
          { path: "user-information", element: <P_userInformation /> },
          { path: "weekly-goals", element: <P_goals /> },
          { path: "health", element: <P_health /> },
          { path: "prefrences", element: <P_prefrences /> },
          { path: "account", element: <P_account /> },
          { path: "history", element: <P_history /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

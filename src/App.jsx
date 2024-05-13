// TODO fix fonts an variables in home - 3-bar if time left
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Layout from "./Pages/Layout";
import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home";
import DietPage from "./Pages/Diet";
import D_mealTracker from "./Pages/D_mealTracker";
import D_waterIntake from "./Pages/D_waterIntake";
import D_mealPlanner from "./Pages/D_mealPlanner";
import WatchPage from "./Pages/Watch";
import ProfilePage from "./Pages/Profile";
import D_macros from "./Pages/D_macros";

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
              { path: "macros", element: <D_macros /> },
            ],
          },
          { path: "water-intake", element: <D_waterIntake /> },
          { path: "meal-planner", element: <D_mealPlanner /> },
        ],
      },
      { path: "Watch", element: <WatchPage /> },
      { path: "Profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

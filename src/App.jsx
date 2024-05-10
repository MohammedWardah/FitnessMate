import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Pages/Layout";
import HomePage from "./Pages/Home";
import DietPage from "./Pages/Diet";
import WatchPage from "./Pages/Watch";
import ProfilePage from "./Pages/Profile";
import LoginPage from "./Pages/Login";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Diet", element: <DietPage /> },
      { path: "Watch", element: <WatchPage /> },
      { path: "Profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

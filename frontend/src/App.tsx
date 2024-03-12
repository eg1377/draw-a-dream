import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { RecoilRoot } from "recoil"
import type { RouteObject } from "react-router-dom";
import Main from "./pages/Main";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import ImageUpload from "./pages/ImageUpload";



function App() {
  const routes: RouteObject[] = [
    // Root Layout
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },

        {
          path: '/gallery',
          element: <Gallery/>
        },

        {
          path: '/imageUpload',
          element: <ImageUpload/>
        }

      ]
    }

  ];

  const router = createBrowserRouter(routes);

  return (

    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}
export default App;

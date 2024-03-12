import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { RecoilRoot } from "recoil"
import type { RouteObject } from "react-router-dom";
import Main from "./pages/Main";
import Root from "./pages/Root";



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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Albums from "./components/layouts/Albums";
import Comments from "./components/layouts/Comments";
import Photos from "./components/layouts/Photos";
import Todos from "./components/layouts/Todos";
import Users from "./components/layouts/Users";
import Home from "./components/layouts/Home";
import Posts from "./components/layouts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/albums",
    element: <Albums />,
  },

  {
    path: "/photos",
    element: <Photos />,
  },

  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

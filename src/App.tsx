import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { PostDetail } from "./components/PostDetail";
import { Posts } from "./components/Posts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "posts/:id",
          element: <PostDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

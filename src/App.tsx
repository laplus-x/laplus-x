import {
  createBrowserRouter,
  isRouteErrorResponse,
  Navigate,
  RouterProvider,
  useRouteError,
} from "react-router";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { PostDetail } from "./components/PostDetail";
import { Posts } from "./components/Posts";

const ErrorFallback = () => {
  const error = useRouteError() as Error;

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="max-w-lg mx-auto mt-20 p-8 bg-red-100 border border-red-400 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Error {error.status}
        </h1>
        <p className="text-red-600 text-lg mb-2">{error.statusText}</p>
        {error.data && (
          <pre className="bg-red-50 text-red-700 p-4 rounded overflow-x-auto">
            {JSON.stringify(error.data, null, 2)}
          </pre>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-20 p-8 bg-red-100 border border-red-400 rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        Something went wrong 😢
      </h1>
      <pre className="bg-red-50 text-red-700 p-4 rounded overflow-x-auto">
        {error?.message || String(error)}
      </pre>
    </div>
  );
};

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
          errorElement: <ErrorFallback />,
        },
        {
          path: "posts/:id",
          element: <PostDetail />,
          errorElement: <ErrorFallback />,
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

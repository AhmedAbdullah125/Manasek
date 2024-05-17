import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import { Suspense, lazy } from 'react';
import NotFound from './pages/NotFound';
import Users from './pages/Home/Users';
import Card from './pages/Home/Card';

const Home = lazy(() => import('./pages/Home/Home'))

function App() {
  const routes = createBrowserRouter([{
  path: '', element: <Layout></Layout>, children: [
    { index: true, element: <Suspense><Home></Home></Suspense> },
    { path: '/users/*', element: <Users></Users> },
    { path: '/card', element: <Card></Card> },
    { path: '*', element: <NotFound></NotFound> },
    // { path: '/courses', element: <CoursesPage></CoursesPage> },
    // { path: '/Services', element: <ServicesPage></ServicesPage> },
  ]
}
])

return (
  <div>
    <RouterProvider router={routes}></RouterProvider>
  </div>
);
}

export default App;

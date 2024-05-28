import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import { Suspense, lazy } from 'react';
import NotFound from './pages/NotFound';
import Users from './pages/Home/Users';
import Card from './pages/Home/Card';
import CardsBack from './pages/Home/CardsBack';
import Jadwal from './pages/Jadwal';
import shiftScheduler from './pages/shift-scheduler';

const Home = lazy(() => import('./pages/Home/Home'))

function App() {
  const routes = createBrowserRouter([{
  path: '', element: <Layout></Layout>, children: [
    { index: true, element: <Suspense><Home></Home></Suspense> },
    { path: '/users/*', element: <Users></Users> },
    { path: '/Jadwal', element: <Jadwal></Jadwal> },
    { path: '/Scheduler', element: <shiftScheduler></shiftScheduler> },
    { path: '/card/*', element: <Card></Card> },
    { path: '/cardback/*', element: <CardsBack></CardsBack> },
    { path: '*', element: <NotFound></NotFound> },
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

import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Client = lazy(() => import('./pages/Client'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const Nurses = lazy(() => import('./pages/Nurses'))
const Team = lazy(() => import('./pages/Team'))
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'))
const AppLayout = lazy(() => import('./pages/AppLayout'))




const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
          <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'client',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Client />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'nurses',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Nurses />
          </Suspense>
        ),
      },
      {
        path: 'team',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: 'workWithUs',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WorkWithUs />
          </Suspense>
        ),
      },
    ],
  },
])




return <RouterProvider router={router} />
}

export default App

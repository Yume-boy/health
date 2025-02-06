import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Client = lazy(() => import('./pages/Client'))
const Contact = lazy(() => import('./pages/Contact'))
const HCA = lazy(() => import('./pages/HCA'))
const Nurses = lazy(() => import('./pages/Nurses'))
const Training = lazy(() => import('./pages/Training'))
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
        path: 'HCA',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HCA />
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
        path: 'training',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Training />
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

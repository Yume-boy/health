import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Client = lazy(() => import('./pages/Client'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const Nurses = lazy(() => import('./pages/Nurses'))
const Team = lazy(() => import('./pages/Team'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'))
const AppLayout = lazy(() => import('./pages/AppLayout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'client', element: <Client /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> },
      { path: 'nurses', element: <Nurses /> },
      { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'workWithUs', element: <WorkWithUs /> },
    ],
  },
])

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App

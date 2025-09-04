import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ElderlyDisabilityCare from './pages/ElderlyDisabilityCare'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Client = lazy(() => import('./pages/Client'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const PersonalHealthCare = lazy(() => import('./pages/PersonalHealthCare'))
const MentalHealthSupport = lazy(() => import('./pages/MentalHealthSupport'))
const HomeCare = lazy(() => import('./pages/HomeCare'))
const Nurses = lazy(() => import('./pages/Training'))
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
      { path: 'services/personalHealthAssistance', element: <PersonalHealthCare /> },
      { path: 'services/mentalHealthSupport', element: <MentalHealthSupport /> },
      { path: 'services/elderlyDisabilityCare', element: <ElderlyDisabilityCare /> },
      { path: 'services/careSupportStaffing', element: <HomeCare /> },
      { path: 'training', element: <Nurses /> },
      // { path: 'team', element: <Team /> },
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

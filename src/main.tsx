import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Setup from './components/Page-2/Setup.tsx'
import Dashboard from './components/Dashboard.tsx'
import PracticeScreen from './components/GenerateQuestions.tsx'

const Approuter  = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    errorElement: <div>Server Error</div>,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/practiceSetup",
        element: <Setup />
      },
      {
        path: "/questions",
        element: <PracticeScreen />,
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Approuter} />
  </StrictMode>,
)

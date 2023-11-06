import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Viewer from "./components/reports/viewer/Viewer.jsx";
import getReportNo from "./controllers/getReportNo.js";
import NotFound from "./components/notfound/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/reports/view/:reportNo',
        element: <Viewer />,
        loader: async ({params}) => {
            return getReportNo(params.reportNo)
        },
        errorElement: <NotFound />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

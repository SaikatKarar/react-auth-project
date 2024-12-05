import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs';
import MainLayout from './layouts/MainLayout.jsx'
import Bookmarks from './pages/Bookmarks.jsx';
import Blog from './pages/Blog.jsx'
import Content from './components/Content.jsx'
import Author from './components/Author.jsx'
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        // path: '/'
        index: true,
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)

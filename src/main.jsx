import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs';
import MainLayout from './layouts/MainLayout.jsx'
import Bookmarks from './pages/Bookmarks.jsx';
import Blog from './pages/Blog.jsx'
import Content from './components/Content.jsx'
import Author from './components/Author.jsx'


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
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import QuestionPage from './components/QuestionPage.jsx';
import AnswerPage from './components/AnswerPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/question',
    element: <QuestionPage />,
  },
  {
    path: '/answers',
    element: <AnswerPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

import Header from './components/Header';
import StudentsPage from './pages/StudentsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeworkPage from './pages/HomeworkPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <div className='bg-background min-h-[100vh]'>
          <div><Header path="homework" title="Homework" /></div>
          <div><StudentsPage /></div>
        </div>,
    },
    {
      path: "/homework",
      element:
        <div className='bg-background min-h-[100vh]'>
          <div><Header path="/" title="Studnets" /></div>
          <div><HomeworkPage /></div>
        </div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App



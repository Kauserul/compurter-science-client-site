import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import PDFfile from './Pages/PDFfile/PDFfile';


function App() {
  return (
    <div className="container">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

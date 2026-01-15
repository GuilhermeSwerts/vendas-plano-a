import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import { LoaderProvider } from './context/LoaderContext';


function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-yellow-100 p-4">
          <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
            <svg
              className="w-16 h-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
          404 - Pagina não encontrada
        </h1>
        <div className="flex items-center justify-center">
          <button onClick={() => navigate(-1)} className='cursor-pointer w-full bg-red-300 mt-4 p-2 rounded-lg text-white hover:bg-red-500'>VOLTAR</button>
        </div>
        <p className="text-slate-600 mt-5 lg:text-lg">
          A página que você está procurando não existe.
        </p>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LoaderProvider>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </LoaderProvider>
  </BrowserRouter>
)

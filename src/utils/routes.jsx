import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import App from "../App"
import Hooks from '../components/Hooks'
import ParentComponentForCallback from "../components/useCallback/ParentComponetForCallback";
import UseMemoExample from '../components/useMemo/useMemoExample';
import '../index.css'
import UseMemoExampleTwo from '../components/useMemo/useMemoExampleTwo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Error Boundary</h1>,
        children: [
          {
            path: "/home",
            element: <Home/>
          },
        ],
    },
    {
      path: '/hooks',
      element: <Hooks />,
      children: [
        {
          path: "useState",
          element: <h1>useState</h1>
        },
        {
          path: "useEffect",
          element: <h1>useState</h1>
        },
        {
          path: "useRef",
          element: <h1>useState</h1>
        },
        {
          path: "useMemo",
          element:<UseMemoExampleTwo/>
        },
        {
          path: "useCallback",
          element: <ParentComponentForCallback/>
        },
        {
          path: "useContext",
          element:<h1>useState</h1>
        },
        {
          path: "useReducer",
          element: <h1>useState</h1>
        },
        {
          path: "useImperativeHandle",
          element:<h1>useState</h1>
        },
        {
          path: "useTransition",
          element:<h1>useState</h1>
        },
        {
          path: "useDeferredValue",
          element: <h1>useState</h1>
        },
        {
          path: "useLayoutEffect",
          element: <h1>useState</h1>
        },
      ],
  },
  {
    path: '*',
    element: <h1>PAGE NOT FOUND</h1>,
  },
])
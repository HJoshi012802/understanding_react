import { createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import App from "../App"
import Hooks from '../components/Hooks'
import ParentComponentForCallback from "../components/useCallback/ParentComponetForCallback";
import UseMemoExample from '../components/useMemo/useMemoExample';
import '../index.css'
import UseMemoExampleTwo from '../components/useMemo/useMemoExampleTwo';
import UseRefExample from '../components/useRef/useRefExample';
import UseContext from '../components/useContext';
import UseReducer from "../components/useReducer";
import ParentComponent from "../components/useImperativeHandle/ParentComponent"
import Redux from '../pages/Redux';

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
          element: <UseRefExample/>
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
          element:<UseContext/>
        },
        {
          path: "useReducer",
          element: <UseReducer/>
        },
        {
          path: "useImperativeHandle",
          element:<ParentComponent/>
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
    path: '/redux',
    element: <Redux />,
  },
  {
    path: '*',
    element: <h1>PAGE NOT FOUND</h1>,
  },
])
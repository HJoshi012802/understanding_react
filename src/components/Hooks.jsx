import { Outlet } from "react-router-dom"
import reactLogo from '../assets/react.svg'

function Hooks() {
  return (
    <div className="relative">
    <div className="absolute top-0 left-0 w-[100vw] h-[70px] bg-black">
    <div className="flex h-[100%]  items-center gap-3 border px-5">
    <img src={reactLogo}/>
    <p className="text-white text-2xl font-bold ">Hooks</p>
    </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Hooks

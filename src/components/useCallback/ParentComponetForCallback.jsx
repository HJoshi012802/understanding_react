import { Outlet } from "react-router-dom"

function  ParentComponentForCallback() {
  return (
    <div className="pt-[100px]">
        <h1 className="text-3xl font-bold text-center mb-6">
        Understanding useCallback in React
      </h1>
      <div className="flex gap-6">

      <div className="mockup-browser bg-base-300 border w-[50%]">
  <div className="mockup-browser-toolbar">
    <div className="input">https://useCallback.com</div>
  </div>
  <div className="bg-base-200 flex justify-center px-4 py-16">useCallback is a React hook that returns a memoized version of a callback function. The primary purpose is to optimize performance by preventing unnecessary re-renders and reducing the creation of new function references.</div>
</div>
      <div className="mockup-code w-[50%]">
       <pre data-prefix="$"><code>npm i daisyui</code></pre>
       <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
       <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
      </div>
      </div>
    </div>
  )
}

export default  ParentComponentForCallback

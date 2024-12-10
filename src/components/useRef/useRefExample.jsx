import {useRef,useState,useEffect} from "react";

function UseRefExample(){
   const [count,setCount] = useState(0);
   const countRef = useRef(0);
   const divRef = useRef(null);

useEffect(() => {
  const width = divRef.current.offsetWidth;
  const height = divRef.current.offsetHeight;
  console.log('Div dimensions:', { width, height });
}, []);

   const handleIncrement =()=>{
    setCount(count+1);
    countRef.current++;

    console.log("State ", count);
    console.log("Ref ", countRef.current);
   }


   return(<div className="pt-[100px]">
   <p>Count:{count}</p> 
    <button onClick={handleIncrement}>Increment</button>
    <div ref={divRef}>
        Hello !!!!!!
    </div>
   </div>)
}

export default UseRefExample;
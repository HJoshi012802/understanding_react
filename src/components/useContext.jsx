import { useContext } from "react";
import UserContext from "../utils/UserContext";

function UseContext(){

    const { user, setUser } = useContext(UserContext)

    const updateUserInfo = () => {
      setUser(prevUser => ({
        ...prevUser,
        name: "Updated " + prevUser.name
      }))
    }
  
    return (
      <div className="pt-[100px]">
        <p>{user.name}</p>
        <p>{user.id}</p>
        <button onClick={updateUserInfo}>
          Update User Info
        </button>
      </div>
    )
}
export default UseContext;
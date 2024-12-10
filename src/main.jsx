import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./utils/routes"
import UserContext from './utils/UserContext'
import { useState } from 'react'

// Create the root component
const Capp = () => {
  // Initialize user state
  const [user, setUser] = useState({
    name: "Harshit",
    id: "Joshi"
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

// Get the root element and render the app
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Capp />
)

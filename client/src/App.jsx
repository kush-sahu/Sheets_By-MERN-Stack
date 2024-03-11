// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './signup'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Login from './Login'
// // import Home from './home'
// import App1 from './App1'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//      <BrowserRouter>
//      <Routes>
//       <Route path='/register' element={<Signup/>}></Route>
//       <Route path='/login' element={<Login/>}></Route>
//       <Route path='/App1' element={<App1/>}></Route>
//      </Routes>
//      </BrowserRouter>
      

//   )
// }

// export default App

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import App1 from './App1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route to register page */}
        <Route path='/' element={<Signup />} />

        {/* Other routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/App1' element={<App1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

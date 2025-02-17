// // rcfe
// import React from 'react'
// import Form from './components/Form'
// // import UseEffectEx from './components/UseEffectEx'
// import UseRef from './components/UseRef'
// function App() {
//   return (
//     <div>
//       {/* <UseEffectEx/> */}
//       {/* <UseRef/> */}
//       <Form/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

// function App() {
//   return (
//     <div>
//    <BrowserRouter>
   
   
//    </BrowserRouter>
//     </div>
//   )
// }

// export default App
import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './crudoperations/Home'
import Create from './crudoperations/Create'
import Edit from './crudoperations/Edit'
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App

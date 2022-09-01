import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCusttomHook } from './01-useState/CounterWithCusttomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import './index.css'

// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp/>
    {/* </React.StrictMode> */}

  
  </BrowserRouter>
  
    

)

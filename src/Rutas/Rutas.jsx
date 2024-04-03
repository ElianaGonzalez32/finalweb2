import {Routes, Route} from "react-router-dom"

import { Formulario } from "../Formulario/Formulario"
import { Home } from "../Home/Home"


export function Rutas(){

    return(


        <>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        
        
        </>
    )
}
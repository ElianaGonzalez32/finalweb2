import { useState } from "react"
import { useNavigate } from "react-router-dom"

import baseDatosIps from "../utils/baseDatosIps.json"

import swal from "sweetalert2"


export function Formulario(){
    const[VerNit,guardarNit]=useState("")
    const[verCedula,guardarCedula]=useState("")
    const[verContraseña,guardarContraseña]=useState("")
    


    let enrutador=useNavigate()

    function procesarFormulario(evento){
       
        evento.preventDefault() 
        
       let busqueda=baseDatosIps.find(function(ips){
        return(ips.nit==VerNit)
       })

       if (busqueda==undefined) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    } else {
        
        enrutador("/home")
    }


    }

    return(
        <>
        
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6 mt-5 align-self-center">
                    <img src="../../src/assets/images.png" alt="logo" className="img-fluid" />
                    </div>
                    <div className="col-6 mt-5">

                        <form className="border rounder p-4" onSubmit={procesarFormulario}>
                            <h2>PORTAL PRESTADORES</h2>
                        <div class="mb-3 mt-5">
                            <label for="exampleInputPassword1" class="form-label">NIT</label>
                            <input type="text" class="form-control" id="NIT"
                            onChange={function(evento){guardarNit(evento.target.value)}}    
                            />
                    
                        </div>

                        <div class="mb-3 mt-5">
                            <label for="exampleInputPassword1" class="form-label">CEDULA</label>
                            <input type="text" class="form-control" id="Cedula"
                            onChange={function(evento){guardarCedula(evento.target.value)}}
                            />
    
                        </div>

                        <div class="mb-3 mt-5">
                            <label for="exampleInputPassword1" class="form-label">CONTRASEÑA</label>
                            <input type="password" class="form-control" id="Contraseña"
                            onChange={function(evento){guardarContraseña(evento.target.value)}}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>

                        </form>
                    </div>
                </div>
            </section>
        
        </>
    )

}
import "./Home.css"

//import basedatos from "../utils/basedatos.json"


export function Home(){   

   
    
    return( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="text-muted">HOLA <span className="fuente"></span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque delectus nesciunt tenetur error nostrum enim quam corrupti praesentium, facere quasi mollitia accusamus, modi rem reprehenderit ad incidunt excepturi tempore, quia neque officia doloribus. Facilis excepturi qui minus consectetur illum numquam, magni soluta, dolor ducimus culpa veritatis vel dignissimos, consequuntur aliquam?</p>
                    </div>
                        
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Gestor asignado a la IPS: {}</p> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Convenios y contratación: {}</p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Autorizaciones Hospitalarias: {}</p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Autorizaciones Ambulatorias: {}</p> 
                            </div>
                        </div>


                    </div>
            </section>

            <hr />
            
            
        </>
    )
}
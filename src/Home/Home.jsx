import "./Home.css";
import baseDatos from "../utils/baseDatos.json";

export function Home() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fondo">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <img src="../../src/assets/TIGRE-PNG.png" alt="logo" class="img-fluid" width="80" height="80"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">TRANSACCIONES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONSULTAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DESCARGAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONSULTAS Y TRANSACCIONES SOAT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="container ">
                <div className="row my-5 text-center">
                    <div className="col-6 col-md-6">
                        <h1 className="text-muted"> HOLA<span className="fuente"> {baseDatos[0].ips}</span> </h1>
                        <h2 className="text-muted"> <span className="fuente">{baseDatos[0].Funcionario}</span></h2>
                        <h2>Gestiona fácilmente tus solicitudes con EPS SURA</h2>
                        <p>  Para EPS sura es muy importante que sus prestadores de servicios estén informados, a continuación encontrará los datos de las personas encargadas de dar respuesta a sus solicitudes:</p>
                        <img src="../../src/assets/LOGO CLINICA MEDELLIN.png" alt="logo" className="img-fluid" />
                    </div>
                    <div className="col-6 col-md-6">
                       

                                <div>
                                    <h5>Gestor asignado a la IPS: {baseDatos[0].responsables[0].gestor}</h5>
                                    <p><i className="bi bi-envelope"></i> Correo: {baseDatos[0].responsables[0].correoGestor}</p>
                                    <p><i className="bi bi-phone"></i> Cel: {baseDatos[0].responsables[0].CelGestor}</p>
                            

                                    <h5>Convenios y contratación: {baseDatos[0].responsables[1].Convenios}</h5>
                                    <p><i className="bi bi-envelope"></i> Correo: {baseDatos[0].responsables[1].correoConvenios}</p>
                                    <p>Cel: {baseDatos[0].responsables[1].CelConvenios}</p>
                                  

                                    <h5>Autorizaciones Hospitalarias: {baseDatos[0].responsables[2].Hospitalarias}</h5>
                                    <p><i className="bi bi-envelope"></i> Correo: {baseDatos[0].responsables[2].correoHospitalarias}</p>
                                    <p><i className="bi bi-phone"></i> Cel: {baseDatos[0].responsables[2].CelHospitalarias}</p>
                                    

                                    <h5>Autorizaciones Ambulatorias: {baseDatos[0].responsables[3].ambulatorias}</h5>
                                    <p><i className="bi bi-envelope"></i> Correo: {baseDatos[0].responsables[3].correoAmbulatorias}</p>
                                    <p><i className="bi bi-phone"></i> Cel: {baseDatos[0].responsables[3].CelAmbulatorias}</p>
                                    
                                </div>
                
                    </div>
                </div>
            </section>
        </>
    );
}

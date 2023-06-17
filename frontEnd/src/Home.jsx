import axios from "axios"
import {useEffect, useState } from "react";
import {NavLink ,useNavigate} from "react-router-dom";


const Home=()=>{
    const [data , setData]=useState([])

    const red = useNavigate()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8081/")
            .then(res =>setData(res.data))
            .catch(err=>console.error("Comp Home : " + err.message))
    },[])

    const handleDelete=(ref)=>{
        axios.delete("http://localhost:8081/supprimerProduit/"+ref)
            .then(res=>{
                location.reload()
            }
            )
            .catch(err=>console.error("Err handleDelete : " + err.message))

    }
    return <>
        <div className="container">

            <div className="row row-cols-2 row-cols-md-2 justify-content-center">
                {data.length>=1 ?data.map((produit,i)=>(
                    <div className="col mt-2" key={i}>
                        <div className="card">
                            <div className="card-header text-center">refProduit ({produit.ref})</div>
                            <div className="card-body">
                               <div className="row">
                                   <div className="col-md-5">
                                       <img src={produit.url_photo} alt="img_introuvable"/>
                                   </div>
                                   <div className="col-md">

                                       <p>libelle : {produit.libelle}</p>
                                       <p>description : {produit.description}</p>
                                       <p> prix : {produit.prix} MAD </p>
                                   </div>
                               </div>
                            </div>
                            <div className="card-footer d-flex justify-content-evenly">
                                       <NavLink to={"/AfficherDetails/"+produit.ref} className={"btn btn-sm btn-primary bg-gradient"}>detail</NavLink>
                                       <NavLink to={"/modifierProduit/"+produit.ref} className={"btn btn-sm btn-success bg-gradient"}>modifier</NavLink>
                                       <button onClick={()=>handleDelete(produit.ref)} className={"btn btn-sm btn-danger bg-gradient"}>supprimer</button>
                            </div>
                        </div>
                    </div>)
                ) : (
                    <div className=" container mt-5 shadow h1 alert alert-danger text-center text-danger">Ooups .... Ajouter Un Produit</div>
                )}
            </div>
        </div>


    </>
}
export default Home 
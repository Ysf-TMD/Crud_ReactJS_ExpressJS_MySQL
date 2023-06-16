import axios from "axios"
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


const Home=()=>{
    const [data , setData]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8081/")
            .then(res =>setData(res.data))
            .catch(err=>console.error("Comp Home : " + err.message))
    },[])
    return <>
        <div className="container">
            <div className="row  rounded  mt-3 shadow p-2 bg-gradient bg-dark text-light ">
                <div className="d-flex p-2">
                    <div className="col-md-10  text-center">liste des Produits</div>
                    <div className="col-md text-end">
                        <NavLink to={"/ajouterProduit"} className={"btn-info btn btn-sm"}>AjouterProduit</NavLink>
                    </div>
                </div>
            </div>
            <div className="row row-cols-md-2 justify-content-center">
                {data.map((produit,i)=>(
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
                                       <NavLink to={""} className={"btn btn-sm btn-primary bg-gradient"}>detail</NavLink>
                                       <NavLink to={""} className={"btn btn-sm btn-success bg-gradient"}>modifier</NavLink>
                                       <NavLink to={""} className={"btn btn-sm btn-danger bg-gradient"}>supprimer</NavLink>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </div>


    </>
}
export default Home 
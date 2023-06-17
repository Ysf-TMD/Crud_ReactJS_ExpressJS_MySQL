

import {useState , useEffect} from 'react'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom";
const AfficherDetails = ()=>{
    const [produit , setProduit ] = useState([])
    const {ref} = useParams()
    const navigate= useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8081/afficherDetail/"+ref)
            .then(res=>setProduit(res.data))
            .catch(err =>console.error("Erreur axios detailsProduit : "+ err))
    },[])
    console.log("produit "+produit)
    return <>
    <div className="container">
                {produit.map((produit,i)=>
                    <>
                    <div className="card mt-4 col-md-4 mx-auto" key={i}>
                        <div className="card-header text-center">{produit.ref}</div>
                        <div className="card-body   ">
                           <div className="row">
                               <div className="col-md-6">
                                   <img src={produit.url_photo} alt="img" className="img-fluid"/>
                               </div>

                               <div className="col-md">
                                   <p>libelle : <strong>{produit.libelle}</strong></p>
                                   <p>description : <strong> {produit.description}</strong>   </p>
                                   <p>prix : <strong> {produit.prix}</strong>MAD</p>
                               </div>
                           </div>
                        </div>
                        <div className="card-footer text-center text-capitalize">
                            <button className="btn btn-success text-capitalize" onClick={()=>navigate("/")}>retour</button>
                        </div>
                    </div>
                    </>
                )}
    </div>


    </>
}
export default AfficherDetails
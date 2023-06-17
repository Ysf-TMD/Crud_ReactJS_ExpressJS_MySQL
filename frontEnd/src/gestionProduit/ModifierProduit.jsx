import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const ModifierProduit = ()=>{
    const [produit , setProduit ] = useState([])
    const navigate = useNavigate()
    const {ref} = useParams()
    const [values , setValues ] = useState({
        libelle :"",
        description :"",
        prix :"",
        url_photo :"",
        idCategorie :"",

    })
    useEffect(()=>{
        axios.get("http://localhost:8081/modifierProduit/"+ref)
            .then(res=>{setValues({...values ,
                libelle :res.data[0].libelle,
                description :res.data[0].description,
                prix :res.data[0].prix,
                url_photo :res.data[0].url_photo,
                idCategorie :res.data[0].idCategorie,

            })})
            .catch(err=>console.error("Axios Modifier Produit "+ err))


    },[])

    const handleSubmit =  (e)=>{
        e.preventDefault();
         axios.put("http://localhost:8081/modifierProduit/"+ref, values)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=>console.error("Update Put methde Err : " + err))
    }
   return <>
       <div className="container">
           <div className="card col-md-6 mx-auto mt-3 shadow">
               <form action="" onSubmit={handleSubmit}>
                   <div className="card-header d-flex">
                       <div className="col-md-11 text-center text-primary">
                           ModifierProduit
                       </div>
                       <div className="col-md text-end">
                           <NavLink  to={"/"} className="btn btn-success btn-sm">retour</NavLink>
                       </div>
                   </div>
                   <div className="card-body">
                       <div className="py-1">
                           <label htmlFor="">libelle</label>
                           <input type="text" className="form-control" value={values.libelle} onChange={({target})=>setValues({...values , libelle:target.value})} />
                       </div>
                       <div className="py-1">
                           <label htmlFor="">description</label>
                           <textarea rows={5}  className="form-control" value={values.description} onChange={({target})=>setValues({...values , description:target.value})}/>
                       </div>
                       <div className="py-1">
                           <label htmlFor="">prix</label>
                           <input type="number" className="form-control" value = {values.prix} onChange={({target})=>setValues({...values , prix:target.value})}/>
                       </div>
                       <div className="py-1">
                           <label htmlFor="">Categorie</label>
                           <select name="" id="" className="form-select" value={values.idCategorie} onChange={({target})=>setValues({...values , idCategorie:target.value})}>
                               <option value="selectionner">selectionner Categorie</option>
                               <option value="100">Categorie1</option>
                               <option value="200">Categorie2</option>
                           </select>
                       </div>
                       <div className="py-3">
                           <label htmlFor="">AjouterPhoto</label>
                           <input type="text" className="form-control"  value={values.url_photo} onChange={({target})=>setValues({...values , url_photo:target.value})}/>
                       </div>

                   </div>
                   <div className="card-footer text-center">
                       <input type="submit" value="Modifier" className="btn btn-primary"/>
                   </div>
               </form>
           </div>
       </div>
    </>
}
export default ModifierProduit
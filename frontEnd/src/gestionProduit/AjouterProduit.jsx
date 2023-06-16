import {NavLink} from "react-router-dom";
import {useState} from "react"
import axios from "axios"

const AjouterProduit=()=>{
    const [values , setValues]=useState(
        {
            libelle :"",
            description :"",
            prix :"",
            url_photo :"",
            idCategorie :"",
        }
    )
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://127.0.0.1:8081/ajouterProduit",values)
            .then(res=>console.log(res))
            .catch(err=>console.error("axios ajouterProduit post err : "+ err))
    }

    return <>
    <div className="container">
        <div className="card col-md-6 mx-auto mt-3 shadow">
            <form action="" onSubmit={handleSubmit}>
                <div className="card-header d-flex">
                   <div className="col-md-11 text-center text-primary">
                       ajouterProduit
                   </div>
                <div className="col-md text-end">
                    <NavLink  to={"/"} className="btn btn-success btn-sm">retour</NavLink>
                </div>
                </div>
                <div className="card-body">
                    <div className="py-1">
                        <label htmlFor="">libelle</label>
                        <input type="text" className="form-control" onChange={({target})=>setValues({...values , libelle:target.value})}/>
                    </div>
                    <div className="py-1">
                        <label htmlFor="">description</label>
                        <textarea rows={5}  className="form-control" onChange={({target})=>setValues({...values , description:target.value})}/>
                    </div>
                    <div className="py-1">
                        <label htmlFor="">prix</label>
                        <input type="number" className="form-control" onChange={({target})=>setValues({...values , prix:target.value})}/>
                    </div>
                    <div className="py-1">
                        <label htmlFor="">Categorie</label>
                        <select name="" id="" className="form-select" onChange={({target})=>setValues({...values , idCategorie:target.value})}>
                            <option value="selectionner">selectionner Categorie</option>
                            <option value="100">Categorie1</option>
                            <option value="200">Categorie2</option>
                        </select>
                    </div>
                    <div className="py-3">
                        <label htmlFor="">AjouterPhoto</label>
                        <input type="text" className="form-control" onChange={({target})=>setValues({...values , url_photo:target.value})}/>
                    </div>
                    
                </div>
                <div className="card-footer text-center">
                           <input type="submit" value="ajouterProduit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    </div>
    
    
    </>
}
export default AjouterProduit
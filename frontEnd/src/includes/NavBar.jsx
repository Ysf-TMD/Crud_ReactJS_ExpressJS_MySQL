import {NavLink} from "react-router-dom";

const  NavBar=()=>{
    return <>
        <div className="row  rounded  mt-3  p-2   text-light ">
            <div className=" p-2">
                <div className="container  text-end">
                    <NavLink to={"/"} className={"btn-primary bg-opacity-50 btn bg-gradient shadow  btn-sm"}>listerProduits</NavLink>
                    <NavLink to={"/ajouterProduit"} className={"btn-info btn bg-gradient shadow  mx-1 btn-sm"}>AjouterProduit</NavLink>
                </div>
            </div>
        </div>
    </>
}
export default NavBar
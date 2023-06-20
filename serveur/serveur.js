import express from "express";
import sql from "mysql";
import cors from "cors";
const app = express();
//using cors to avoid origins problem
app.use(cors())
app.use(express.json())
//creating connection with dataBase
const db = sql.createConnection({
    host :"localhost",
    user : "root",
    password : "",
    database : "mesproduits"
})


//start creating some routes here :
app.get("/",(req , res )=>{
    const statement = "select * from produits"
    db.query(statement,(err,data)=>{
        err&&res.json("your have an Erreur in your query " + err.message);
        return res.json(data)
    })
})
app.post("/ajouterProduit",(req,res)=>{
    const statement = "insert into produits values (null , ?)";

    const produit = [
        req.body.libelle,
        req.body.description,
        req.body.prix,
        req.body.url_photo,
        req.body.idCategorie
    ]
    db.query(statement,[produit],(err,data)=>{
        err&&console.error("Err durring insert data "+ err)
        return res.json(data)
    })
})

app.get("/afficherDetail/:ref",(req , res)=>{
    const params = req.params.ref
    const detailStatement = "select * from produits where ref = ?"
    db.query(detailStatement,[params],(err , data)=>{
        err&&console.error("detailsErr request  " + err)
        return res.json(data)
    })

})
app.get("/modifierProduit/:ref",(req , res )=>{

    const refProduit = req.params.ref
    const statement = "select * from produits where ref = ?"
    db.query(statement,[refProduit],(err , data )=>{
        err&&console.error("ModifierProduit Err " + err)
        return res.json(data)
    })
})


app.delete("/supprimerProduit/:ref",(req , res)=>{


    const deleteStatement = "delete from produits where ref = ?"
    const refParamas = req.params.ref
    console.log(refParamas)
    db.query(deleteStatement,[refParamas],(err,data)=>{
        err&&res.json(err)
        return res.json(data)
    })



})


app.put("/modifierProduit/:ref",(req,res)=>{
     const updateStatement = "update produits set libelle = ? , description = ? , prix = ? , url_photo= ?  , idCategorie = ? "
       const refProduit = req.params.ref
       const {libelle , description , prix , url_photo  , idCategorie } = req.body
       db.query(
           updateStatement ,
           [libelle , description , prix , url_photo , idCategorie],
           (err, data )=>{
               err&&res.json(err)
               return res.json(data)
           }
           )
})




//starting server at  8081
const port = 8081 ;
app.listen(port , ()=>console.log("app running at 8081"))
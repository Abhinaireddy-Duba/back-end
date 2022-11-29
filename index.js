const express=require("express")
const app=express()
const port=4000;
const cors=require("cors")
const mongoose=require("mongoose")

const bodyParser=require("body-parser")
const Register=require("./Registerschema.js")
console.log(Register)


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://Abhinaireddy-Duba:Abhinai@cluster0.pobpvvm.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})
	
	
app.get("/",(req,res)=>{
	res.send("hii iam server")

})
app.post("/register",(req,res)=>{
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username,
		password
	})
	newUser.save()
	res.send("saved")
})
	

app.listen(port,()=>console.log("server is started"))

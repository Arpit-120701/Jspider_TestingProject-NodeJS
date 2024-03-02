let express=require('express')
let app=express()
let dotenv=require('dotenv')
let fs=require('fs')

app.use((err,req, res, next )=>{
    if(err)
    {
        res.status(500).send({message:"something error", success:"false"})
    }
    else{
        next()
    }

})

//middleware for dotenv 
dotenv.config()

//static server middleware
app.use(express.static('views'))

let port=process.env.PORT || 8000

//middleware for views
app.set("view engine","ejs")
//error middleware

app.get('/',(req,res)=>{
    res.render('pages/home')
})

app.listen(port,()=>{
    console.log(`server started @ localhost:${port}` )
})


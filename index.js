var Express = require("express");
var App = Express()
var PORT = process.env.PORT || 4000;
var http = require("http")
var rateLimit = require("express-rate-limit")
const cookieParser = require("cookie-parser");


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 25 // limit each IP to 100 requests per windowMs
  });
App.use(limiter)
var cors = require("cors");
var path = require("path");

var DATABASE = require("./database");



http.createServer(App).listen(PORT)
App.use(cors({origin:"*"}))
App.use(Express.json())
App.use(cookieParser())


App.get("/",(req,res)=>{
    if(req.cookies.sstwpid !== "jsidjiasjdijiajsidjiasjdiujfjsdjfjidjf" ){
    res.sendFile(path.join(__dirname,"/views/Level1.html"))
    }else{
        res.send("<h1>close<h1>")
    }
})

App.get("/uwerjwerjijrjifdid9ifmsdjfjrjfjsdxcm_onion_hsaduhnausdudsasjndajsdijaijsdjasjdncysdbyyfbsdnhf",(req,res)=>{
    if(req.cookies.sstwpid === "levpass001fs" ){
    
    res.sendFile(path.join(__dirname,"/views/Level2.html"))
    }else{
        res.send("<h1>CLOSE</h1>").status(404)
    }
    
})

App.get("/uwerjwerjijrjifdid8ifmsdjfjrjfjsdxcm_onion_hsaduhnausdudsasjndajsdijaijsdjasjd5565262652fbsdnhf",(req,res)=>{
    if(req.cookies.sstwpid === "ltvpass031f3"){
    res.sendFile(path.join(__dirname,"/views/Level3.html"))
    }
    else{
        res.send("<h1>Close</h1>").status(404)
    }
})

App.get("/uwerjwerjijrjifdidm7fmsdjfjrjfjsdxcm_onion_hsaduhna48452548484528484sjdncysdbyyfbsdnhf",(req,res)=>{
    if(req.cookies.sstwpid === "ltvpa333pro3" && req.cookies.sstwpid !== "jsidjiasjdijiajsidjiasjdiujfjsdjfjidjf"){
    res.sendFile(path.join(__dirname,"/views/Createacount.html"))
    }else{
        res.send("404").status(404)
    }
})
App.get("*",(req,res)=>{
    res.send("<h1>404<h1>").status(404)
})


//  HANDLE ALL POST -->

App.post("/verify/uudihahawrong",(req,res)=>{

    var verifingid = req.params.id

    if(verifingid !== null || undefined || ""){
        res.send("01000100 01100101 01100011 01110010 01111001 01110000 01110100 00100000 01110100 01101000 01100101 00100000 01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100000 01101100 01101001 01101011 01100101 00100000 01111001 01101111 01110101 00100000 01100100 01101001 01100100 00100000 01100010 01100101 01100110 01101111 01110010 01100101 00001010 01010000 01000001 01010011 01010011 01010111 01001111 01010010 01000100 00111010 00100000 01001110 01001101 01000011 01110110 01111010 01101011 01110100 01001101 01101101 00110100 01111001 01011000 01011010 01010100 01010110 01110111 00110101 01101101 01110101 01100100 01011001 00111000 01001101 01001001 01010110 00101011 01001000 01110000 01000111 01000110 01100001 01100101 00101011 01101100 01101001 01110010 01100010 01001001 01010000 01001011 01001111 01001001 00110000 00111101").status(200)
    }else{ 
       res.send("No id has ben pased").status(400)
    }
})

App.post("/verify/eztoramosy",(req,res)=>{
    res.send("85#4-9N6-856")
})


App.post("/moredeepyouhavetoreach",(req,res)=>{
    var name = req.body.name;
    var password = req.body.password;
    if(name !== undefined  && password !== undefined ){
        var myclass1 = new DATABASE("CREATE",name,password).Run()
        res.send({"pass":myclass1})
    }
    else{
        res.send({"pass":"VALUE UNDIFINE"})
    }
})

App.post("/cheack/ifthisacount/iswork",(req,res)=>{
    var name = req.body.name;
    var password = req.body.password;
    if(name != undefined && password != undefined ){
        var myclass1 = new DATABASE("FETCH",name,password).Run()
       myclass1.then((data)=>{
           if(data !== undefined && password === data){
               res.send(data)
           }
           else{
               res.send("NO")
           }
       })

    }
    else{
        res.send("VALUE UNDIFINE")
    }

})

// This code for level1
App.post("/bugshadow/vefify/password",(req,res)=>{
    
    var password = req.body.password
    if(password === "85#4-9N6-856"){
        res.send({"pass":"Match","url":"/uwerjwerjijrjifdid9ifmsdjfjrjfjsdxcm_onion_hsaduhnausdudsasjndajsdijaijsdjasjdncysdbyyfbsdnhf","cookie":"levpass001fs"}).status(200)

    }else{
        res.send({"pass":"Unverify"}).status(400)
    }
})
// This code for level2
App.post("/bugshadow/beginner/password",(req,res)=>{
    var password = req.body.password
    if(password ==="$854-3E3-u56$"){
        res.send({"pass":"Match","url":"/uwerjwerjijrjifdid8ifmsdjfjrjfjsdxcm_onion_hsaduhnausdudsasjndajsdijaijsdjasjd5565262652fbsdnhf","cookie":"ltvpass031f3"}).status(200)

    }else{
        res.send({"pass":"Unverify"}).status(400)
    }
})
// This code for level3
App.post("/bugshadow/Master/password",(req,res)=>{
    var password = req.body.password
    
    if(password === "gangsta420"){
        res.send({"pass":"Match","url":"/uwerjwerjijrjifdidm7fmsdjfjrjfjsdxcm_onion_hsaduhna48452548484528484sjdncysdbyyfbsdnhf","cookie":"ltvpa333pro3"}).status(200)
         
    }else{
        res.send({"pass":"Unverify"}).status(400)
        
    }
})

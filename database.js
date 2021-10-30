var fs = require('fs')



class DATABASE{
    constructor(mode='DELET,CREATE,FETCH,ALL',...args){
        this.mode = mode;
        this.valus = args;
    }
    Run(){
        
        if(this.valus[0] !== undefined){
        if(this.mode.toUpperCase() === "CREATE" && this.valus[0] !== undefined && this.valus[1] !== undefined){
            return this.#CreateAcount(this.valus[0],this.valus[1])
        }
        else if(this.mode.toUpperCase() === "FETCH"){
            return this.#FetchAcount(this.valus[0])
        }
        else if(this.mode.toUpperCase() === "DELET"){
            return this.#DeletAcount(this.valus[0])
              
        }
        else if(this.mode.toUpperCase() === "ALL"){
            return this.#GET_alldata()
        }
        else{
           console.log("mode not sclected")
        }
    }
    else{
        console.log("*args not defign")
    }
    };

    #CreateAcount(name,password){
         this.#ADD_ACOUNTS(name,password)
         return "Created"
    };

    #DeletAcount(name){
        this.#DELET_data(name)
        return "Delet"
    };

    #FetchAcount(name){
        return this.#Show_data(name)
        
    };


    #ADD_ACOUNTS(ACOUNT_NAME,password){
        if(fs.existsSync("./DATABASE/data.json")){
         
            fs.readFile('./DATABASE/data.json','utf8', function readFileCallback(err, data) {
    
                var obj = JSON.parse(data)
                const person = `{"${ACOUNT_NAME}":"${password}"}`
                
                var puredata = JSON.parse(person)
    
    
                Object.assign(obj,puredata)
                var value = JSON.stringify(obj)
                fs.writeFile("./DATABASE/data.json",value,'utf8', callback=>{console.log("write complet")})
    
            })
        }
        else{
            console.log(`${ACOUNT_NAME} ${password} no`)
        }
    }

    // Function from deleting data from Data file
    #DELET_data(name=null){
    if(fs.existsSync("./DATABASE/data.json") && name !== null){
        fs.readFile('./DATABASE/data.json','utf8', function readFileCallback(err, data) {
            var obj = JSON.parse(data)
            delete obj[name]
            var value = JSON.stringify(obj)
            fs.writeFile("./DATABASE/data.json",value,'utf8', callback=>{})
        })
    }
}
    #Show_data(name){
    return new Promise(function(myResolve,myReject){



    if(fs.existsSync("./DATABASE/data.json")){
        return (
        fs.readFile('./DATABASE/data.json','utf8', function readFileCallback(err, data) {
            var obj =  JSON.parse(data)
            
            myResolve(obj[name])
        })
        )
    }
    else{
       myReject("no ok")
    }
});
}

  #GET_alldata(){
    return new Promise(function(myResolve,myReject){



        if(fs.existsSync("./DATABASE/data.json")){
            return (
            fs.readFile('./DATABASE/data.json','utf8', function readFileCallback(err, data) {
                var obj =  JSON.parse(data)
                myResolve(obj)
            })
            )
        }
        else{
           myReject("no ok")
        }
    });
  }

}
module.exports = DATABASE;
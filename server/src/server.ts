import express from 'express'
const cors = require('cors');


const app = express();
app.use(cors());
app.listen(3333);

app.use(express.json());
const users = [
    {id:1, name:'Gabriel',age: 20, career:'engenheiro'},
   
]
app.post('/jorge',(request,response)=>{
    const {name,age,career}:{name:string,age:number,career:string} = request.body
    if(name=='' || name.length>10)
    {
        return response.json({message:'Nome nos padrões incorretos'})
    }
    if(career=='' || career.length>20)
    {
        return response.json({message:'Profissão nos padrões incorretos'})
    }
    if(age<18)
    {
        return response.json({message:'Idade nos padrões incorretos'})
    }
    users.push(request.body);
    return response.json({message:'Cadastrado com sucesso'});
})
app.get('/jorge',(request,response)=>{
    return response.json(users);
})




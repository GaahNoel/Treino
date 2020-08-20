import React,{useState,useEffect,FormEvent} from 'react';
import api from './jorge';
import './styles.css'


function App() {
  const [jorges,setJorges] = useState([]);
  const [name, setName] = useState('');
  const [age,setAge] = useState(Number); 
  const [career,setCareer] = useState('');
  const [count,setCount] = useState(0)
  interface props{
    id:number,
    name:string,
    age:number
    career:string,
  }

  useEffect(()=>{
    api.get('jorge',{})
    .then(response =>{
      let aux = response.data;
      console.log(response.data);
      setJorges(response.data);
      setCount(aux.length);
    })
  },[count])

  async function FormSubmit(e:FormEvent){
    e.preventDefault();
    await api.post('/jorge',{
      id:count+1,
      name,
      age,
      career
    }).then(response=>{
          alert(response.data.message);
          setCount(count+1);
    })

  }

  return (
    <div className="App">
      <div className='itens'>
     <form onSubmit={FormSubmit}>
     <label>Nome:</label>
     <input 
        type="text"
        value={name}
        onChange={e=>(setName(e.target.value))}
        required
     /> 
     <label>Idade:</label>
     <input 
        type="number"
        value={age}
        onChange={e=>(setAge(parseInt(e.target.value)))}
      
     />
    <label>Profissão:</label>
     <input 
        type="text"
        value={career}
        onChange={e=>(setCareer(e.target.value))}
        
     />
     <button type="submit">
       Cadastrar
     </button>

     </form>
     <div className='infos'>
       <ul>
         {jorges.map((jorge:props) =>(
           <li key={jorge.id}>
            <strong>Nome: </strong>
            <span> {jorge.name} </span>
            <strong>Idade: </strong>
            <span> {jorge.age} </span>
            <strong>Profissão: </strong>
            <span> {jorge.career} </span>
          </li> 
          
         ))}
       </ul>
       </div>
     </div>
    </div>
  );
}

export default App;

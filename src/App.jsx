import  axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Result } from './Components/Result';

function App() {

  const [movies,setMovies]= useState([]);
  const [ search, setSearch]= useState('');

  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 // const APIURL = "http://www.omdbapi.com/?i=tt3896198&apikey=400ef590";
  //const SEARCHAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=400ef590";
  
  const changeTheSearch =(event)=>{


     setSearch(event.target.value )
   }

   const getAllMovies=()=>{
    axios.get(APIURL)
    .then((response)=>{
      setMovies(response.data.results)
    
    }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
    }


    const getSearchedMovies =()=>{
      console.log(SEARCHAPI + search)
      axios.get(
        SEARCHAPI + search
      )
        .then(
          (response) => {
            console.log(response.data.results)
            setMovies(response.data.results);
          }
        )
        .catch(
          (error) => { 
            console.log(error);
          }
        )
    }

    useEffect(
      ()=>{
        setMovies([])
        if (search === "") {
          getAllMovies();
        } else {
        getSearchedMovies()
        }
      },[search]
    )
  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3 ">
   
    <input type="search" value={search} onChange={changeTheSearch} className="w-full border border-black rounded text-slate-700 p-4"/>
{
movies.length === 0 ? <div className="text-3xl text-center mt-2" >LOading  </div>  : <Result movies={movies}/>
}

     
  </div>
  );
}

export default App;

import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import {useEffect, useState} from 'react'


function App() {
  const [comics,setComics] = useState([]) //so we know its an array of items

  useEffect(()=>{
  fetch('http://localhost:8004/comics')
  .then(res=>res.json())
  .then(comicsArray => {
    setComics(comicsArray)})
  }, [])


  function createComic(image_url, title, issue, description){
  fetch("http://localhost:8004/comics",{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
    },
    body:JSON.stringify({image_url, title, issue, description})
  })
  .then(res=>res.json())
  .then(newComic => 
  //add greg to 
  setComics([...comics, newComic])
)
  }

  function onRemove(comicid){
    const arrayafterremove =comics.filter ((comic) => comicid ===comic.id ? false : true)//why false in front of true?
    setComics(arrayafterremove) 

  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} onRemove={onRemove}/>
        </div>

        <div className="sidebar">
          <ComicForm  createComic={createComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;

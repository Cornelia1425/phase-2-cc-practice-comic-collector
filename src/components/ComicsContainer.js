import Comic from "./Comic"
import {useEffect, useState} from "react"
import ComicForm from './ComicForm'

function ComicsContainer({comics, onRemove}) {


  const mappedComics = comics.map (comic => (
    <Comic key={comic.id} comic={comic} onRemove={onRemove}/>))
    console.log (mappedComics)
  
  

  return (
    <>
      {mappedComics}
     
    </>
  )

  

  }






export default ComicsContainer

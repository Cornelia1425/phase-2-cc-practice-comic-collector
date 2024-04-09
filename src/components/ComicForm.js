import {useState} from 'react'

function ComicForm({createComic}) {

  const [image_url, setImage_url] = useState("")
  const [title, setTitle] = useState("")
  const [issue, setIssue] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    createComic(image_url, title, issue, description)
  }

    return (

      <form className="comic-form" onSubmit={handleSubmit}>

        <h2>Add A New Issue</h2>

        <label htmlFor="image_url">Image URL: </label>
        <input name="image_url" onChange={e=>setImage_url(e.target.value)} placeholder="image" />
    

        <label htmlFor="title">Title: </label>
        <input name="title"  onChange={e=>setTitle(e.target.value)} placeholder="title" value={title}/>

        <label htmlFor="issue">Issue Number: </label>
        <input name="issue" type="number"  onChange={e=>setIssue(e.target.value)} placeholder="issue"/>

        <label htmlFor="description">Description: </label>
        <input name="description" onChange={e=>setDescription(e.target.value)} placeholder="description"/>

        <input type="submit" value="Add Issue" />

        console.log(image_url)
      </form>

    )
}

export default ComicForm

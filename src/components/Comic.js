import {useState} from 'react'

function Comic({comic, onRemove}) {
  //console.log({comic})
  const [isImage, setIsImage] = useState([comic.image_url])
  const handleFlip = ()=>{
    setIsImage(!isImage)
  }

  function handleRemove(){
    onRemove(comic.id)
  
 
    fetch (`http://localhost:8004/comics/${comic.id}`,{
    method:"DELETE"
    /* header:{ 'Content-Type':'application/json'} */})
/*   fetch (`http://localhost:8004/comics/${comic.id}`,{
    method:"DELETE",
    header:{ 'Content-Type':'application/json'}})
  */
  }

  return (
    <div className="comic-item" > 
    
    {isImage?  (<img onClick={handleFlip} src={comic.image_url} alt={comic.title  + comic.issue} />) :  
    ( <>
    <h3 onClick={handleFlip}>{comic.title}</h3>
    <h4 onClick={handleFlip}>{comic.issue}</h4>
    </>
    )
    }

    <button onClick={handleRemove}>Remove</button>

    </div>
  )

}

export default Comic

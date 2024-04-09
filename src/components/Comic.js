import {useState} from 'react'

function Comic({comic, onRemove}) {
  //console.log({comic})
  const [isImage, setIsImage] = useState([comic.image_url])// or useState (true)
  const handleFlip = ()=>{
    setIsImage(!isImage)
  }

  function handleRemove(e){
    e.stopPropagation()
    onRemove(comic.id)
  
 
    fetch (`http://localhost:8004/comics/${comic.id}`,{ //interpolation
    method:"DELETE"
    })
  }

  return (
    <div className="comic-item" onClick={handleFlip}>  
 {/*    put onClick={handleFlip} in div */}
    
    {isImage?  (<img  src={comic.image_url} alt={comic.title  + comic.issue} />) :  
    ( <>
    <h3 >{comic.title}</h3>
    <h4 >{comic.issue}</h4>
    </>
    )
    }

    <button onClick={handleRemove}>Remove</button>

    </div>
  )

}

export default Comic

//event.stopPropagation

//
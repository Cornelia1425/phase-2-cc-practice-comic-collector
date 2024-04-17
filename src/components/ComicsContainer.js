import Comic from "./Comic"

function ComicsContainer({comics}) {
  const comicCards = comics.map(comic => {
    return <Comic comic={comic}/>
  }
    )

  return (
    <>
     {comicCards}
    </>
  )

}

export default ComicsContainer

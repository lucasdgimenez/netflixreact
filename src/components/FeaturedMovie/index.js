import React from "react"
import "./FeaturedMovie.css"

function FeaturedMovie({item}) {
  console.log(item)
  let firstDate = new Date(item.first_air_date)
  let genres = []
  for(let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` 
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured--name">
            {item.original_name}
          </h1>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average} points
            </div>
            <div className="featured--year">
              {firstDate.getFullYear()}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}
            </div>
          </div>
          <div className="featured--description">
            {item.overview}
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton"> <img src="https://simpleicon.com/wp-content/uploads/play1.png" className="play" alt="play"/> <span>Assistir</span> </a>
            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha lista</a>
          </div>
          <div className="featured--genres">
            <strong>Generos</strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie;
import React, {useEffect, useState} from "react"
import ListApi from "./tmdb"
import MovieRow from "./components/MovieRow"
import "./App.css"
import FeaturedMovie from "./components/FeaturedMovie"

function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async() => {
      //Pegando toda a lista
      let list = await ListApi.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque
      let originals = list.filter(item=>item.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await ListApi.getMovieInfo(chosen.id, 'tv')
      console.log(chosenInfo)
    }

    loadAll()
  }, [])
  return (
    <div className="Page">
      {featuredData &&
      <FeaturedMovie item={featuredData}/>}

      <section className="lista">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;

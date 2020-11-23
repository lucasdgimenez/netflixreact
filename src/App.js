import React, {useEffect, useState} from "react"
import ListApi from "./tmdb"
import MovieRow from "./components/MovieRow"
import "./App.css"

function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    const loadAll = async() => {
      //Pegando toda a lista
      let list = await ListApi.getHomeList();
      setMovieList(list)
    }

    loadAll()
  }, [])
  return (
    <div className="Page">
      <section className="lista">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;

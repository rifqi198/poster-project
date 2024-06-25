import { useEffect, useState } from "react";
import { fetchMovies } from "../../service/api";
import Card from "../../components/MovieCard/Card";
import './Home.css'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getMovies = async () => {
          try {
            const data = await fetchMovies(page);
            setMovies(data)
          } catch (err) {
            setError(err.message)
          } finally {
            setLoading(false)
          }
        }
        getMovies()
    }, [page])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return(
        <div>
            <section className="home-section">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </section>
            <div className="home-navigate">
              <button className="home-nav-button" id="prev-button" onClick={() => setPage(page-1)} disabled={page===1}>Previous</button>
              <button className="home-nav-button" id="next-button" onClick={() => setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}

export default Home
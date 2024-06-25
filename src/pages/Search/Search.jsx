import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { searchMovie } from "../../service/api"
import Card from "../../components/MovieCard/Card"
import './Search.css'

export default function Search(){
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const location = useLocation()
    
    const query = new URLSearchParams(location.search).get('query')

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true)
            setError(null)
            try{
                const data = await searchMovie(query, page)
                setResults(data.results)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }

        if(query){
            fetchSearchResults()
        }
    }, [query, page])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
        
    return(
        <div>
            <h1>Results for {query}</h1>
            <section className="search-section">
                {results.map(movie => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </section>
            <div className="search-navigate">
              <button className="search-nav-button" id="prev-button" onClick={() => setPage(page-1)} disabled={page===1}>Previous</button>
              <button className="search-nav-button" id="next-button" onClick={() => setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}


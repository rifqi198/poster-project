import { useNavigate } from 'react-router-dom'
import './Card.css'

const Card = ({ movie }) => {
    const history = useNavigate()

    const handleClick = () => {
        history(`/movies/${movie.id}`)
    }

    return(
        <div onClick={handleClick} className="card-container">
            <img className="card-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img>
            <a><h2 className="card-title">{movie.title}</h2></a>
            <h3 className="card-year">{movie.release_date.substring(0,4)}</h3>
        </div>
    )
}

export default Card;
// const [movieData, setMovieData] = useState([])
      
    /* useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_?api_key=f4d1128013cccb9a31326d89184ecfe4')
            .then(response => response.json())
            .then(response => setMovieData(response.results))
    }, []); */
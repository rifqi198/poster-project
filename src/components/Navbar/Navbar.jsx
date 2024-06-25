import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'

export default function Navbar(){
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if(query.trim()){
            navigate(`/search?query=${encodeURIComponent(query)}`)
        }
    }
    return(
        <nav className="nav-container">
            <Link to="/" className='nav-link-logo'><img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYsoclSY4g2wFeUh9dxe04YUZuUq88D9qwZPTkNWHyIwn0WyVV4MzBpIBuHKceVyL_qNT_470zutZo0Xuuii-RTFUXe5Kz_qoQ=s1600-rw-v1" alt="Poster Logo" className="nav-logo" /></Link>
            <form onSubmit={handleSearch}>
                <input type="text" value={query} placeholder="Search Movies..." className="nav-search" onChange={(e) => setQuery(e.target.value)}></input>
            </form>
            {/* <button className="nav-button">Sign In</button> */}
        </nav>
    )
}
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    // São propriedades de um componente onde eu posso repassar strings, numeros, arrays, objetos, etc.
    const logoName = 'DH Blog'
    const logoURL = 'https://www.digitalhouse.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fdh-frontend%2F447fbcb3-129e-4830-98b3-5d3378b3e875_DigitalHouse_Logo_White.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C8192%2C1631%26w%3D236%26h%3D47&w=3840&q=75'
    
    return (
        <header >
            <Link to="/">
                <img src={logoURL} alt={logoName} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/">Sair</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
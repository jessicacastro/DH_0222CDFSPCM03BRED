import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <li>
                        <a href='/produtos'>Produtos</a>
                    </li>
                    <li>
                        <a href='/sobre'>Sobre</a>
                    </li>
                    <li>
                        <a href='/trabalhe'>Trabalhe conosco</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
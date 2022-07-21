import './App.css';
import { Header } from './components/Header';

function App() {
  // const usuarioTeste = ''

  const usuarios = [
    {
      id: 1,
      name: 'Joana',
      surname: 'Dark',
      url: 'https://www.usuario.com',
      icon: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
      mergeName: function() { return `${this.name} ${this.surname}` } 
    },
    {
      id: 2,
      name: 'Joana',
      surname: 'Dark',
      url: 'https://www.usuario.com',
      icon: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
      mergeName: function() { return `${this.name} ${this.surname}` } 
    }
  ]

  return (
    <div className="App">
      <Header />
      <div className="card-wrapper">
        <ul className='flex-container'>
          { usuarios.length > 0 && usuarios.map(usuario => (
                <li key={usuario.id}>
                  <h5>{ usuario.mergeName() }</h5> 
                  <img src={usuario.icon} alt={usuario.name}/>
                </li>
              )
            ) 
          }
        </ul>
        

      </div>
    </div>
  );
}

export default App;

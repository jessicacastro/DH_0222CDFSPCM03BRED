import './App.css';
import { Header } from './components/Header';
import { ListWrapper } from './components/ListWrapper';
import { PostList } from './components/PostList';
import { UserList } from './components/UserList';

function App() {

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
    },
    {
      id: 3,
      name: 'Matheus',
      surname: 'Silva',
      url: 'https://www.usuario.com',
    }
  ]

  const produtos = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do produto 1',
      price: 'R$ 100,00',
      url: 'https://www.produto.com',
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do produto 2',
      price: 'R$ 200,00',
      url: 'https://www.produto.com',
    }
  ]

  return (
    <div className="App">
      <PostList />
      {/* <Header />
      <ListWrapper>
          { usuarios.length > 0 && usuarios.map(usuario => (
                <UserList 
                  key={usuario.id}
                  id={usuario.id} 
                  mergeName={usuario.mergeName} 
                  icon={usuario.icon} 
                  name={usuario.name}
                  surname={usuario.surname} />        
              )
            ) 
          }
      </ListWrapper>
      <ListWrapper>
        { produtos.length > 0 && produtos.map(produto => (
                <li key={produto.id}>
                  <h5>{produto.name}</h5>
                  <h6>{produto.price}</h6>
                </li>
              )
            ) 
          }
      </ListWrapper> */}
      {/* Sem children */}
      {/* <ListWrapper>
      </ListWrapper> */}
    </div>
  );
}

export default App;

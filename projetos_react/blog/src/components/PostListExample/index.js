import React from 'react'
import './PostList.css'

import api from '../../services/api'

// Componentes de estado usam Hooks para gerenciar o ciclo de vida, componentes de classe usam funções pré definidas do React.
export class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      contador: 0,
      piadaChuckNorris: ''
    }
  }

  componentDidMount() {
    this.setChuckNorris()
  }

  componentDidUpdate() {
    console.log('Atualizou')
  }

  componentWillUnmount() {
    this.setState({
      posts: [],
    })
  }

  setChuckNorris = () => {
    api.get('/random').then((response) => {
      this.setState({
        piadaChuckNorris: response.data.value
      })
    })
  }

  // Eventos escritos diretamente nas tags
  // Sempre ter a palavra on (onClick, onSubmit, onMouseOver, onMouseOut)
  // Para associar um método, temos que usar sempre this.nomeDoMetodo
  increment(event) {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrement(event) {
    if (this.state.contador === 0) {
      return
    }

    this.setState({
      contador: this.state.contador - 1
    })
  }

  setPosts() {
    this.setState({
      posts: [{
        id: 1,
        title: 'First post',
        content: 'This is the first content'
      }]
    })
  }


  render() {
    return(
      <>
        <div className='container'>
          <button onClick={e => this.increment(e)}>+</button>
          <h1>{this.state.contador}</h1>
          <button onClick={e => this.decrement(e)}>-</button>
        </div>

        <div className='container'>
          <h2>{this.state.piadaChuckNorris}</h2>
        </div>
      </>
    )
  }
}

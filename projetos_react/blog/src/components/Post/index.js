import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Post.css'
import coracaoImg from '../../assets/imgs/coracao.svg'
import { Button } from '../Button';
export const Post = (props) => {
  const data = new Date(props.data).toLocaleDateString();

  return (
    <article>
      <div className="caixa">
        <span>{data}</span>

        <img src={coracaoImg} alt="Curtir" />
      </div>

      <h3>{props.titulo}</h3>

      <p class="post-description">{props.descricao}</p>

      <Link to={`/posts/${props.id}`}>
        <Button conteudo="Leia mais" />
      </Link>
    </article>
  )
}

Post.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string
}
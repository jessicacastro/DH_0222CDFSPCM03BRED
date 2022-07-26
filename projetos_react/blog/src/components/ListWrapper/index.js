import PropTypes from 'prop-types'

export const ListWrapper = (props) => {

  // const usuarios = [
  //   {
  //     id: 1,
  //     name: 'Joana',
  //     surname: 'Dark',
  //     url: 'https://www.usuario.com',
  //     icon: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  //     mergeName: function() { return `${this.name} ${this.surname}` } 
  //   },
  //   {
  //     id: 2,
  //     name: 'Joana',
  //     surname: 'Dark',
  //     url: 'https://www.usuario.com',
  //     icon: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  //     mergeName: function() { return `${this.name} ${this.surname}` } 
  //   }
  // ]
  
  return (
    <div className="card-wrapper">
      <ul className='flex-container'>
        {props.children}
      </ul>
    </div>
  )
}

ListWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
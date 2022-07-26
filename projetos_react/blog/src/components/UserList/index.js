import PropTypes from 'prop-types'
import './UserList.css'
export const UserList = ({ name, surname, id, icon }) => {

  const handleMergeName = (name, surname) => {
    return `${name} ${surname}`
  }

  return(
    <li key={id}>
      <h5 className='algumaCoisa'>{ handleMergeName(name, surname) }</h5> 
      <img src={icon} alt={name}/>
    </li>
  )
}

UserList.propTypes = {
  id: PropTypes.number.isRequired,
  fullName: PropTypes.func,
  icon: PropTypes.string,
}

UserList.defaultProps = {
  icon: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=Red&facialHairType=BeardMedium&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Bear&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Light',
}

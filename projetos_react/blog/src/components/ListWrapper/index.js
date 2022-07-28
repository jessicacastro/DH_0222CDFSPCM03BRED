import PropTypes from 'prop-types'

export const ListWrapper = (props) => {
  
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
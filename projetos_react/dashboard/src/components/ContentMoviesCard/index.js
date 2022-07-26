import PropTypes from 'prop-types'

export const ContentMoviesCard = ({ titulo, borderColor, quantity }) => {
  const borderClass = `card ${borderColor} shadow h-100 py-2`
  
  return(
    <div className="col-md-4 mb-4">
    <div className={borderClass}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{ titulo }</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{ quantity }</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-film fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

ContentMoviesCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

ContentMoviesCard.defaultProps = {
  titulo: '',
  borderColor: '',
  quantity: 0
}
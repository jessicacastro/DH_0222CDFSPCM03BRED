import { ContentMoviesCard } from '../ContentMoviesCard'

export const ContentRowMovies = () => {
  const cards = [
    {
      titulo: 'Movies in Data Base',
      borderColor: 'border-left-primary',
      quantity: 21
    },
    {
      titulo: 'Total Awards',
      borderColor: 'border-left-success',
      quantity: 79
    },
    {
      titulo: 'Actors Quantity',
      borderColor: 'border-left-warning',
      quantity: 49
    }
  ]

  return(
    <div className="row">
      { cards.length > 0 && cards.map(card => {
            return(
                <ContentMoviesCard 
                key={card.titulo} 
                titulo={card.titulo} 
                borderColor={card.borderColor}
                quantity={card.quantity} />
            )
          }
        )
      }
    </div>
  )
}
import { ContentContainer } from '../ContentContainer'
import { Header } from '../Header'

const ContentWrapper = () => {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
		    <div id="content">
                <Header />
                <ContentContainer />

            </div>
        </div>
    )
}

export { ContentWrapper }
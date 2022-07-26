import { ContentRowMovies } from '../ContentRowMovies'
import { GenresInDb } from '../GenresInDb'
import { LastMovieInDb } from '../LastMovieInDb'

const ContentContainer = () => {
    return (
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<ContentRowMovies />

					<div className="row">
						{/* Wrapper do conteúdo */}
						<LastMovieInDb />
						{/* Fim do Wrapper do Conteúdo */}
						<GenresInDb />
					</div>

					<table>
						<thead>
							<tr>
								<th>Título</th>
								<th>Duração</th>
								<th>Nota</th>
								<th>Genero</th>
								<th>Prêmio</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Título</td>
								<td>Duração</td>
								<td>Nota</td>
								<td>Duração</td>
								<td>Nota</td>
							</tr>
						</tbody>
					</table>
				</div>
    )
}

export { ContentContainer }
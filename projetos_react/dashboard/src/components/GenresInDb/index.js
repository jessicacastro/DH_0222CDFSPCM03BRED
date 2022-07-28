import React, { Component } from 'react';
import api from '../../services/api'
import { GenreCard } from '../GenreCard';
export class GenresInDb extends Component {
	constructor(props) {
		super();
		this.state = {
			genres: []
		};
	}

	componentDidMount() {
		api.get('/api/genres').then(res => {
			this.setState({ genres: res.data.data });
		});
	}

	render() {
		const { genres } = this.state;

		return(
			<div className="col-lg-6 mb-4">						
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
									</div>
									<div className="card-body">
										<div className="row">
											{ genres.length > 0 && genres.map(genre => {
												return <GenreCard key={genre.id} name={genre.name}/>
											})}
										</div> {/* Fim da row */}
									</div>
								</div>
			</div>
		)
	}
}
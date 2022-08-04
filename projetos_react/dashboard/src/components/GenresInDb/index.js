import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { GenreCard } from "../GenreCard";

export function GenresInDb() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.get("/api/genres").then((res) => {
      setGenres(res.data.data);
    });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.length > 0 &&
              genres.map((genre) => {
                return <GenreCard key={genre.id} name={genre.name} />;
              })}
          </div>{" "}
          {/* Fim da row */}
        </div>
      </div>
    </div>
  );
}

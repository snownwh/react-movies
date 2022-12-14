import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState("");
  const { id } = useParams();
  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <MovieDetail
          title={movieDetail.title}
          coverImg={movieDetail.medium_cover_image}
          downloadURL={movieDetail.url}
          year={movieDetail.year}
          rating={movieDetail.rating}
        />
      )}
    </div>
  );
}

export default Detail;

import Proptypes from "prop-types";

function MovieDetail({ title, coverImg, downloadURL, year, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>제작년도 : {year}</li>
        <li>평점 : {rating} / 10</li>
      </ul>
      <img src={coverImg} alt={title}></img>
      <div>
        <a href={downloadURL} target="_blank" rel="noreferrer">
          다운로드
        </a>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  title: Proptypes.string.isRequired,
  coverImg: Proptypes.string.isRequired,
  downloadURL: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  rating: Proptypes.number.isRequired,
};

export default MovieDetail;

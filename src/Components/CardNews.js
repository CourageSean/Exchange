const CardNews = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="NewsPhoto" />
      <div className="card-container">
        <p>{props.title}</p>
        <a href={props.url} target="_blank" rel="noreferrer">Read More</a>
      </div>
    </div>
  );
}
export default CardNews;

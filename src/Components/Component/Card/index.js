import "./Card.css";

export const Card = ({name, url, index}) => {
  return (
    <div className="cont" key={index}>
      <h2 className="userH2">{name}</h2>
      <img src={url} alt={name} className="userImg" />
    </div>
  );
};

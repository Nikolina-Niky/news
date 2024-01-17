import { SyntheticEvent, useState } from "react";
import { FC } from "react";
import "./Card.css";

interface CardProps {
  id: string,
  imageSrc: string | null;
  title: string;
  date: string;
  text: string;
  titleOnPicture: boolean;
  onClick: () => void
}
const Card: FC<CardProps> = ({
  id,
  imageSrc,
  title,
  date,
  text,
  onClick,
  titleOnPicture = false,
}) => {
  const getfromStorage = () => {
    const item = localStorage.getItem(id);
    if (item) {
      return JSON.parse(item);
    }
    return false
  }

  const [isFavourite, setisFavourite] = useState(getfromStorage());
  const notFavouriteSrc = "/static/heart.png";
  const favouriteSrc = "/static/favourite.png";

  const handleAddToFavourites = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const state = !isFavourite;
    setisFavourite(state);
    localStorage.setItem(id, JSON.stringify(state));
  }

  return (
    <div className={titleOnPicture ? "card" : ""} onClick={onClick}>
      {imageSrc ? (
        <div className="image-container">
          <img className={titleOnPicture ? "small" : "big"} src={imageSrc} alt="post" />
          {titleOnPicture ? <h3 className="centered">{title}</h3> : <h3 className="top-left grey-text">{date}</h3>}
          <div className="add-favourite"><img src={isFavourite ? favouriteSrc : notFavouriteSrc} onClick={handleAddToFavourites} /></div>
        </div>
      ) : (
        <p> No image </p>
      )}
      {!titleOnPicture ? <h1>{title}</h1> : <h3 className="text-left grey-text">{date}</h3>}
      <div className="text-justify"><p className="content">{text}</p></div>
    </div>
  );
};

export default Card;

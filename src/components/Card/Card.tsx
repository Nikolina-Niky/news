import { SyntheticEvent, useState } from "react";
import { FC } from "react";
import "./Card.css";
import { getFromLocalStorage, setLocalStorage } from "../../utils/localStorageFunctions";

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

  const fromLS = getFromLocalStorage(id); 
  const [isFavourite, setisFavourite] = useState(fromLS || false);
  const notFavouriteSrc = "/static/heart.png";
  const favouriteSrc = "/static/favourite.png";

  const handleAddToFavourites = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const state = !isFavourite;
    setLocalStorage(id, state);
    setisFavourite(state);
  }

  return (
    <div className={titleOnPicture ? "card" : ""} onClick={onClick}>
      {imageSrc ? (
        <div className="image-container">
          <img className={titleOnPicture ? "small" : "big"} src={imageSrc} alt="post" />
          {titleOnPicture ? <h3 className="centered">{title}</h3> : <h3 className="top-left grey-text">{date}</h3>}
          <div className="add-favourite"><img src={isFavourite ? favouriteSrc : notFavouriteSrc} alt= "" onClick={handleAddToFavourites} /></div>
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

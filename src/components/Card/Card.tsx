import { FC } from "react";
import "./Card.css";

interface CardProps {
  imageSrc: string | null;
  title: string;
  date: string;
  text: string;
  titleOnPicture: boolean;
}
const Card: FC<CardProps> = ({
  imageSrc,
  title,
  date,
  text,
  titleOnPicture = false,
}) => {
  return (
    <div className="card">
      {imageSrc ? (
        <div><img className={titleOnPicture ? "small" : "big"} src={imageSrc} alt="post 1" /></div>
      ) : (
        <p> No image </p>
      )}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;

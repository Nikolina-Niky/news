import { FC } from "react";

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
    <div>
      {imageSrc ? (
        <img src={imageSrc} width="500" height="600" />
      ) : (
        <p> No image </p>
      )}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;

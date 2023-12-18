import { FC } from "react";

interface SuspeseProps {
  isPending: boolean;
  children: React.ReactNode;
}

const Suspense: FC<SuspeseProps> = ({ isPending, children }) => {
  return <>{isPending ? <p>Pending...</p> : <>{ children }</>}</>;
};

export default Suspense;

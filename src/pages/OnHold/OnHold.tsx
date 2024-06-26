import { useParams } from 'react-router-dom';
import './OnHold.module.scss';

export default function OnHold() {
  const id = useParams().id as string;

  return <p>{id}</p>;
}

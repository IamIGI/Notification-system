import { useParams } from 'react-router-dom';
import './Request.module.scss';

export default function Request() {
  const id = useParams().id as string;

  return <p>{id}</p>;
}

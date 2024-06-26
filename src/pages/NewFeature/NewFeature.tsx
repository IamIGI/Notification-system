import { useParams } from 'react-router-dom';
import './NewFeature.module.scss';

export default function NewFeature() {
  const id = useParams().id as string;

  return <p>{id}</p>;
}

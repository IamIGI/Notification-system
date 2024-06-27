import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h2>Page not found</h2>
      <p>Probably due to missing data in local storage</p>
      <p>Reload page twice</p>
      <Link to="/">Home </Link>
    </>
  );
}

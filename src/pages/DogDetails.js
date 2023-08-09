import { Link, Outlet, useParams } from "react-router-dom";

const DogDetails = () => {
  // const params = useParams();
  // console.log('params:', params);
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запит, якщо потрібно
  // }, [])

  return (
    <>
      {/* DogDetails: {dogId} */}
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">SubBreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;

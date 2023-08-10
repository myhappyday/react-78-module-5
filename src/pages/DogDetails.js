import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не змінюється і все ще веде на http://localhost:3000/dogs?dogId=2

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  // console.log('location: ', location);
  // console.log('backLinkLocationRef: ', backLinkLocationRef);

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
      <Link to={backLinkLocationRef.current}>Back to collection</Link>
      <ul>
        <li>
          <Link to="subbreeds">SubBreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;

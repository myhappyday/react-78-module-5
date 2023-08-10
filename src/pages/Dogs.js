import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  // useEffect(() => {
  // HTTP запит, якщо потрібно
  // }, [])

  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });

    // const nextParams = name !== '' ? { name } : {};
    // setSearchParams(nextParams);
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  // console.log('location: ', location);
  console.log('setDogs:', setDogs);

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      {/* <button
        onClick={() => {
          setSearchParams({ c: 'hello' });
        }}
      >
        Change searchParams
      </button> */}
      {/* Collection of dogs */}
      <ul>
        {
          // ['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5']
          visibleDogs.map(dog => {
            return (
              <li key={dog}>
                <Link to={`${dog}`} state={{ from: location }}>
                  {dog}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Dogs;

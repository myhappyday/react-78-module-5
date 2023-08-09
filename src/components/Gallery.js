const { useParams } = require("react-router-dom");

export const Gallery = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запит, якщо потрібно
  // }, [])

  return <div>Image Gallery: {dogId}</div>;
};

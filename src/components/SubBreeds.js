const { useParams } = require("react-router-dom");

export const SubBreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запит, якщо потрібно
  // }, [])

  return <div>SubBreeds: {dogId}</div>;
};

import { RestaurantCard } from '../RestaurantCard';

export const Restaurants = ({ id, backgroundImage, featured, type, title, stars, description }) => {
  return (
    <>
      <RestaurantCard id={id} backgroundImage={backgroundImage} featured={featured} type={type} title={title} stars={stars} description={description}></RestaurantCard>
    </>
  );
};

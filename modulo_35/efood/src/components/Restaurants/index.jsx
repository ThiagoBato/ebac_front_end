import { RestaurantCard } from '../RestaurantCard';
import hiokiSushi from '../../../public/images/hioki-sushi.jpg';
import laDolceVitaTrattoria from '../../../public/images/la-dolce-vita-trattoria.jpg';

export const Restaurants = () => {
  return (
    <>
      <RestaurantCard
        backgroundImage={hiokiSushi}
        featured="Destaque"
        type="Japonesa"
        title="Hioki Sushi"
        stars="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
      ></RestaurantCard>
      <RestaurantCard
        backgroundImage={laDolceVitaTrattoria}
        type="Italiana"
        title="La Dolce Vita Trattoria"
        stars="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      ></RestaurantCard>
      <RestaurantCard
        backgroundImage={laDolceVitaTrattoria}
        type="Italiana"
        title="La Dolce Vita Trattoria"
        stars="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      ></RestaurantCard>
      <RestaurantCard
        backgroundImage={laDolceVitaTrattoria}
        type="Italiana"
        title="La Dolce Vita Trattoria"
        stars="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      ></RestaurantCard>
      <RestaurantCard
        backgroundImage={laDolceVitaTrattoria}
        type="Italiana"
        title="La Dolce Vita Trattoria"
        stars="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      ></RestaurantCard>
      <RestaurantCard
        backgroundImage={laDolceVitaTrattoria}
        type="Italiana"
        title="La Dolce Vita Trattoria"
        stars="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      ></RestaurantCard>
    </>
  );
};

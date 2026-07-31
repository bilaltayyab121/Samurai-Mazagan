import SectionHeading from '../common/SectionHeading';
import FoodCard from '../common/FoodCard';
import { menuItems } from '../../data/menu';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { UtensilsCrossed } from 'lucide-react';

const PopularDishes = () => {
  const popularItems = menuItems.filter(item => item.popular).slice(0, 6);

  return (
    <SectionWrapper id="popular-dishes">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Our Menu"
          title="Popular Dishes"
          subtitle="Handpicked favorites loved by our guests. Discover what makes our cuisine unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {popularItems.map((item, index) => (
            <FoodCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            to="/menu"
            icon={<UtensilsCrossed className="w-5 h-5" />}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PopularDishes;

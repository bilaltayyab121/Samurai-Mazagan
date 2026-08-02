import SectionHeading from '../common/SectionHeading';
import FoodCard from '../common/FoodCard';
import { menuItems } from '../../data/menu';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { UtensilsCrossed, Sparkles, Clock3, Leaf } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md p-5 md:p-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
              <div className="rounded-2xl bg-background/40 border border-white/10 px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Chef Specials
                  </p>
                  <p className="text-gray text-xs">
                    Daily signature selections
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-background/40 border border-white/10 px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock3 className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Fast Service
                  </p>
                  <p className="text-gray text-xs">Freshly prepared on order</p>
                </div>
              </div>

              <div className="rounded-2xl bg-background/40 border border-white/10 px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Fresh Ingredients
                  </p>
                  <p className="text-gray text-xs">Premium quality every day</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                size="lg"
                to="/menu"
                icon={<UtensilsCrossed className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                View Full Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/reservation"
                className="w-full sm:w-auto"
              >
                Reserve A Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PopularDishes;

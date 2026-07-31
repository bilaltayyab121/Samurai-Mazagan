import SectionHeading from '../common/SectionHeading';
import FeatureCard from '../common/FeatureCard';
import { features } from '../../data/features';
import SectionWrapper from '../common/SectionWrapper';

const Features = () => {
  return (
    <SectionWrapper id="features" className="bg-gradient-premium">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Offer"
          title="Culinary Experiences"
          subtitle="Discover the diverse dining experiences that make Samurai Mazagan truly unique."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;

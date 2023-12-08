import PropTypes from "prop-types";
import {
  HomePageWrapper,
  HomePageTitle,
  HomePageContent,
  FeatureCardWrapper,
  FeatureTitle,
  FeatureDescription,
  FeatureListWrapper,
} from "./MyHomePage.styled";

const FeatureCard = ({ title, description }) => {
  return (
    <FeatureCardWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCardWrapper>
  );
};

const FeatureList = () => {
  const features = [
    {
      title: "Wide Range of Cars",
      description: "Choose from our extensive fleet of high-quality vehicles.",
    },
    {
      title: "Flexible Rental Plans",
      description: "Customize your rental period to suit your travel needs.",
    },
    {
      title: "24/7 Customer Support",
      description: "We are here to assist you at any time of the day.",
    },
  ];

  return (
    <FeatureListWrapper>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </FeatureListWrapper>
  );
};

export const MyHomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageTitle>Welcome to Our Car Rental Service</HomePageTitle>
      <HomePageContent>
        Explore the world with comfort and style. Rent a car with us and
        experience the joy of hassle-free travel.
      </HomePageContent>
      <FeatureList />
    </HomePageWrapper>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

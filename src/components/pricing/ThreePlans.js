import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

export default ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "Explore our flexible pricing options designed to support traders at every level. Whether you're just starting or looking to enhance your trading strategy, our plans provide essential tools and resources to help you succeed.",
  plans = null,
  primaryButtonText = "Buy Now"
}) => {
  const defaultPlans = [
    {
      name: "Personal",
      price: "$17.99",
      duration: "Monthly",
      mainFeature: "Suited for Personal Blogs",
      features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
    },
    {
      name: "Business",
      price: "$37.99",
      duration: "Monthly",
      mainFeature: "Suited for Production Websites",
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$57.99",
      duration: "Monthly",
      mainFeature: "Suited for Big Companies",
      features: ["90 Templates", "9 Landing Pages", "37 Internal Pages", "Personal Assistance"],
    },
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer id="pricing-real">
          {plans.map((plan, index) => (
            <Plan
              key={index}
              className={`${plan.featured ? "bg-primary-500 text-gray-100" : ""}`}
              style={plan.featured ? {
                background: 'linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%)'
              } : {}}
            >
              {!plan.featured && <div className="planHighlight" style={{
                background: `linear-gradient(115deg, ${index === 0 ? 'rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%' : index === 1 ? '#6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff' : 'rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%'})`
              }} />}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className={`duration ${plan.featured ? "text-gray-200" : ""}`}>{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className={`feature ${!plan.featured && "text-gray-300"}`}>
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <a href="https://discord.com/oauth2/authorize?client_id=1247684376947462164&response_type=code&redirect_uri=http%3A%2F%2Frollintrades.com%2Fbuy&scope=identify+email">
                  <BuyNowButton className={`${plan.featured ? "bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800" : ""}`}>{primaryButtonText}</BuyNowButton>
                </a>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob />
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container >
  );
};

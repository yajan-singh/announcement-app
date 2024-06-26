import "./style.css";
import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import discordScreenShot from "images/discordss.png";
import discordInvitePage from "images/discordinvite.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (


        <AnimationRevealPage>
            <Hero roundedHeaderButton={true} />
            <Features
                subheading={<Subheading>Features</Subheading>}
                heading={
                    <>
                        Highlights About Our <HighlightedText>Services.</HighlightedText>
                    </>
                }
            />
            <MainFeature
                subheading={<Subheading>Quality Work</Subheading>}
                imageSrc={discordScreenShot}
                imageBorder={true}
                imageDecoratorBlob={true}
            />
            <FeatureWithSteps
                subheading={<Subheading>How You Can Get Started.</Subheading>}
                heading={
                    <>
                        Easy to <HighlightedText>Join.</HighlightedText>
                    </>
                }
                textOnLeft={false}
                imageSrc={discordInvitePage}
                imageDecoratorBlob={true}
                decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
            />
            <MainFeature2
                subheading={<Subheading>VALUES</Subheading>}
                heading={
                    <>
                        Why Trade With <HighlightedText>Us?</HighlightedText>
                    </>
                }
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        Icon: MoneyIcon,
                        title: "Maximizing Profit Strategies",
                        description:
                            "Discover techniques to maximize your trading profits and leverage advanced tools for better returns.",
                        iconContainerCss: tw`bg-green-300 text-green-800`,
                    },
                    {
                        Icon: BriefcaseIcon,
                        title: "Professional Trading Insights",
                        description:
                            "Access expert trading analysis and insights to make informed decisions and trade like a pro.",
                        iconContainerCss: tw`bg-red-300 text-red-800`,
                    },
                ]}
            />
            <Pricing
                subheading={<Subheading>Pricing</Subheading>}
                heading={
                    <>
                        Reasonable & Flexible{" "}
                        <HighlightedText>Subscriptions.</HighlightedText>
                    </>
                }
                plans={[
                    {
                        name: "Free",
                        price: "$0.00",
                        duration: "Monthly",
                        mainFeature: "For All",
                        features: [
                            "Limited Access to Community",
                            "Daily Tips",
                            "Basic Support",
                        ],
                    },
                    {
                        name: "Pro",
                        price: "$9.99",
                        duration: "Monthly",
                        mainFeature: "For New Traders",
                        features: [
                            "All Free Plan Features",
                            "Unlimited Chat Access",
                            "Exclusive Insights And Realtime News",
                            "Weekly Webinars",
                            "Priority Assistance",
                        ],
                        // featured: true,
                    },
                    {
                        name: "Elite",
                        price: "$24.99",
                        duration: "Monthly",
                        mainFeature: "For Rolling Minds",
                        features: [
                            "All Pro Plan Features",
                            "Full-Access To Community",
                            "1-on-1 Coaching",
                            "Advanced Tools",
                            "24/7 Support",
                        ],
                    },
                ]}
            />
            <Testimonial
                subheading={<Subheading>Testimonials</Subheading>}
                heading={
                    <>
                        Our Clients <HighlightedText>Love Us.</HighlightedText>
                    </>
                }
                testimonials={[
                    {
                        stars: 5,
                        profileImageSrc:
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                        heading: "Love the admins, love the community!",
                        quote:
                            "I've been part of many trading communities, but this one stands out. The insights and support I've received here have significantly improved my trading skills. The webinars are incredibly informative and worth every penny.",
                        customerName: "Charlotte Hale",
                        customerTitle: "Director, Delos Inc.",
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                        heading: "From beginner to master trader.",
                        quote:
                            "As a beginner, I was overwhelmed by the complexity of trading. This community has been a game-changer for me. The daily tips and expert advice have helped me gain confidence and make better trades.",
                        customerName: "Adam Cuppy",
                        customerTitle: "Founder, EventsNYC",
                    },
                ]}
            />
            <FAQ
                subheading={<Subheading>FAQS</Subheading>}
                heading={
                    <>
                        You have <HighlightedText>Questions ?</HighlightedText>
                    </>
                }
                faqs={[
                    {
                        question: "How do I join?",
                        answer: "Find the Join Now buttons to join the Discord community",
                    },
                    {
                        question: "What trading platforms do you support?",
                        answer:
                            "We primarily support trading platforms such as Discord and Telegram. These platforms are central to our community's communication and support structure..",
                    },
                    {
                        question: "How can I get started with trading?",
                        answer:
                            "Getting started is easy! Join our community on Discord or Telegram to access beginner-friendly resources, guides, and mentorship. We'll help you understand the basics and get you trading confidently in no time.",
                    },
                    {
                        question: "What support do you offer for beginners?",
                        answer:
                            "We offer a variety of support for beginners, including educational resources, live trading sessions, mentorship from experienced traders, and a supportive community forum where you can ask questions and learn from others.",
                    },
                    {
                        question: "How do I stay updated on market trends and news?",
                        answer:
                            "Stay informed with our community's curated market updates, real-time alerts, and expert analysis shared on Discord and Telegram. We keep you updated on the latest trends and news that impact your trading decisions.",
                    },
                    {
                        question: "Is there a cost to join your trading community?",
                        answer:
                            "Joining our community is completely free! We believe in democratizing access to trading education and support. Some advanced features or personalized mentorship may involve a fee, but basic community access is always free.",
                    },
                ]}
            />
        </AnimationRevealPage>

        // <AnimationRevealPage>
        //     <Hero roundedHeaderButton={true} />
        //     <Features
        //         subheading={<Subheading>Features</Subheading>}
        //         heading={
        //             <>
        //                 Highlights About Our <HighlightedText>Services.</HighlightedText>
        //             </>
        //         }
        //     />
        //     <MainFeature
        //         subheading={<Subheading>Quality Work</Subheading>}
        //         imageSrc={discordScreenShot}
        //         imageBorder={true}
        //         imageDecoratorBlob={true}
        //     />
        //     <FeatureWithSteps
        //         subheading={<Subheading>How You Can Get Started.</Subheading>}
        //         heading={
        //             <>
        //                 Easy to <HighlightedText>Join.</HighlightedText>
        //             </>
        //         }
        //         textOnLeft={false}
        //         imageSrc={discordInvitePage}
        //         imageDecoratorBlob={true}
        //         decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        //     />
        //     <MainFeature2
        //         subheading={<Subheading>VALUES</Subheading>}
        //         heading={
        //             <>
        //                 Why Trade With <HighlightedText>Us?</HighlightedText>
        //             </>
        //         }
        //         imageSrc={prototypeIllustrationImageSrc}
        //         showDecoratorBlob={false}
        //         features={[
        //             {
        //                 Icon: MoneyIcon,
        //                 title: "Maximizing Profit Strategies",
        //                 description:
        //                     "Discover techniques to maximize your trading profits and leverage advanced tools for better returns.",
        //                 iconContainerCss: tw`bg-green-300 text-green-800`,
        //             },
        //             {
        //                 Icon: BriefcaseIcon,
        //                 title: "Professional Trading Insights",
        //                 description:
        //                     "Access expert trading analysis and insights to make informed decisions and trade like a pro.",
        //                 iconContainerCss: tw`bg-red-300 text-red-800`,
        //             },
        //         ]}
        //     />
        //     {/* <Pricing
        //         id="pricing"
        //         subheading={<Subheading>Pricing</Subheading>}
        //         heading={
        //             <>
        //                 Reasonable & Flexible{" "}
        //                 <HighlightedText>Subscriptions.</HighlightedText>
        //             </>
        //         }
        //         plans={[
        //             {
        //                 name: "Free",
        //                 price: "$0.00",
        //                 duration: "Monthly",
        //                 mainFeature: "For All",
        //                 features: [
        //                     "Limited Access to Community",
        //                     "Daily Tips",
        //                     "Basic Support",
        //                 ],
        //             },
        //             {
        //                 name: "Pro",
        //                 price: "$9.99",
        //                 duration: "Monthly",
        //                 mainFeature: "For New Traders",
        //                 features: [
        //                     "All Free Plan Features",
        //                     "Unlimited Chat Access",
        //                     "Exclusive Insights And Realtime News",
        //                     "Weekly Webinars",
        //                     "Priority Assistance",
        //                 ],
        //                 featured: true,
        //             },
        //             {
        //                 name: "Elite",
        //                 price: "$24.99",
        //                 duration: "Monthly",
        //                 mainFeature: "For Rolling Minds",
        //                 features: [
        //                     "All Pro Plan Features",
        //                     "Full-Access To Community",
        //                     "1-on-1 Coaching",
        //                     "Advanced Tools",
        //                     "24/7 Support",
        //                 ],
        //             },
        //         ]}
        //     /> */}
        //     <Testimonial
        //         id="testimonials"
        //         subheading={<Subheading>Testimonials</Subheading>}
        //         heading={
        //             <>
        //                 Our Clients <HighlightedText>Love Us.</HighlightedText>
        //             </>
        //         }
        //         testimonials={[
        //             {
        //                 stars: 5,
        //                 profileImageSrc:
        //                     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
        //                 heading: "Love the admins, love the community!",
        //                 quote:
        //                     "I've been part of many trading communities, but this one stands out. The insights and support I've received here have significantly improved my trading skills. The webinars are incredibly informative and worth every penny.",
        //                 customerName: "Charlotte Hale",
        //                 customerTitle: "Director, Delos Inc.",
        //             },
        //             {
        //                 stars: 5,
        //                 profileImageSrc:
        //                     "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
        //                 heading: "From beginner to master trader.",
        //                 quote:
        //                     "As a beginner, I was overwhelmed by the complexity of trading. This community has been a game-changer for me. The daily tips and expert advice have helped me gain confidence and make better trades.",
        //                 customerName: "Adam Cuppy",
        //                 customerTitle: "Founder, EventsNYC",
        //             },
        //         ]}
        //     />
        //     <FAQ
        //         id="faq"
        //         subheading={<Subheading>FAQS</Subheading>}
        //         heading={
        //             <>
        //                 You have <HighlightedText>Questions ?</HighlightedText>
        //             </>
        //         }
        //         faqs={[
        //             {
        //                 question: "How do I join?",
        //                 answer: "Find the Join Now buttons to join the Discord community",
        //             },
        //             {
        //                 question: "What trading platforms do you support?",
        //                 answer:
        //                     "We primarily support trading platforms such as Discord and Telegram. These platforms are central to our community's communication and support structure..",
        //             },
        //             {
        //                 question: "How can I get started with trading?",
        //                 answer:
        //                     "Getting started is easy! Join our community on Discord or Telegram to access beginner-friendly resources, guides, and mentorship. We'll help you understand the basics and get you trading confidently in no time.",
        //             },
        //             {
        //                 question: "What support do you offer for beginners?",
        //                 answer:
        //                     "We offer a variety of support for beginners, including educational resources, live trading sessions, mentorship from experienced traders, and a supportive community forum where you can ask questions and learn from others.",
        //             },
        //             {
        //                 question: "How do I stay updated on market trends and news?",
        //                 answer:
        //                     "Stay informed with our community's curated market updates, real-time alerts, and expert analysis shared on Discord and Telegram. We keep you updated on the latest trends and news that impact your trading decisions.",
        //             },
        //             {
        //                 question: "Is there a cost to join your trading community?",
        //                 answer:
        //                     "Joining our community is completely free! We believe in democratizing access to trading education and support. Some advanced features or personalized mentorship may involve a fee, but basic community access is always free.",
        //             },
        //         ]}
        //     />
        //     <GetStarted />
        //     <Footer />
        // </AnimationRevealPage>
    );
};

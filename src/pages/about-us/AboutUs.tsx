import styled from "styled-components";
import { Container, Content } from "../components/Container";

import topImg from "../../assets/about-us/Picture.png";
import middleImg from "../../assets/about-us/picture2.png";
import bottomImg from "../../assets/about-us/chef.png";

const AboutUsContent = styled(Content)`
    max-width: 144rem;
    margin: 0 auto;
`;
const Top = styled.div`
    display: flex;
    gap: var(--space-64);
`;
const TopText = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: var(--space-80);
`;

const Heading = styled.h1`
    color: var(--dark-brown);
    padding-top: var(--space-80);
    margin-bottom: var(--space-60);
`;

const TopDescription = styled.p`
    color: var(--dark-brown);
`;

const Middle = styled.div`
    display: flex;
    padding-left: var(--space-80);
`;

const MiddleDescription = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6rem;
`;
const MiddleImg = styled.img`
    margin-top: -8rem;
`;

const Bottom = styled.div`
    padding-left: var(--space-80);
    padding-top: var(--space-80);
    display: flex;
    gap: var(--space-100);
`;

const ChefInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h2`
    margin-bottom: var(--space-40);
`;

const ChefDescription = styled.p`
    width: 70%;
    font-style: italic;
`;

const AboutUs = () => {
    return (
        <AboutUsContent>
            <Top>
                <img src={topImg} alt="Working Chef" />
                <TopText>
                    <Heading className="heading-2">
                        <span>Our</span> <br />
                        Restaurant
                    </Heading>
                    <TopDescription className="paragraph-lg">
                        Restaurant EleGanzo Founded in 2010 by the visionary
                        chef Ismail Marzuki, Our Restaurant has become a beloved
                        dining destination in the heart of Milan. Specializing
                        in popular Italian meals, we take pride in serving
                        authentic dishes that capture the essence of Italy's
                        rich culinary heritage. Over the years, we have
                        delighted thousands of happy clients with our commitment
                        to quality, tradition, and exceptional service
                    </TopDescription>
                </TopText>
            </Top>
            <Middle>
                <MiddleDescription className="paragraph-lg">
                    Guests can easily reserve a table online to enjoy not only
                    our exquisite meals but also our delicious desserts and
                    refreshing cold drinks. Come and experience the flavors of
                    Italy at EleGanzo, where every meal is a celebration of
                    taste and passion.
                </MiddleDescription>
                <MiddleImg src={middleImg} alt="Meal" />
            </Middle>
            <Bottom>
                <img src={bottomImg} alt="Founder" />
                <ChefInfo>
                    <Heading className="heading-1">
                        <span>Owner</span> & <br /> Executive Chef
                    </Heading>
                    <Name className="subtitle-xl">Ismail Marzuki</Name>
                    <ChefDescription className="paragraph-lg">
                        With over 20 years of experience in the culinary arts,
                        Ismail Marzuki is a licensed chef whose passion for
                        cooking shines through in every dish. As the founder and
                        driving force behind EleGanzo, Ismail combines his
                        extensive expertise with a deep love for Italian cuisine
                        to create memorable dining experiences.
                    </ChefDescription>
                </ChefInfo>
            </Bottom>
        </AboutUsContent>
    );
};

export { AboutUs };

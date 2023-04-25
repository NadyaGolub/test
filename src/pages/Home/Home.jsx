import styled from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <AnimatedText />
      </Container>
     
    </>
  );
};
export const Container = styled.main`
  height: 80vh;
`;
export default Home;
import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://img.freepik.com/photos-gratuite/fleurs-blanches-fraiches-dans-vase-table-marbre_114579-66007.jpg?semt=ais_hybrid&w=740&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #b48b31;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.4rem;
  color: #444;
  font-weight: 400;
`;

export default function HomePage() {
  return (
    <Container>
      <Title>Wedding Planner</Title>
      <Subtitle>Organisez le plus beau jour de votre vie</Subtitle>
    </Container>
  )
}

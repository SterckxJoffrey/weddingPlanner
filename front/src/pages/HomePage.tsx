import styled from "styled-components";

const Container = styled.div`
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

import { Container, Title, Counter } from "../components";

function HomePage() {
  return (
    <Container>
      <Title accessibilityRole="header">
        {" "}
        Next.js & React Native for Web & Styled Components
      </Title>
      <Counter />
    </Container>
  );
}
export default HomePage;

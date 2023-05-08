import { Container, Title } from 'components/App/App.styled';
import { GiRotaryPhone } from 'react-icons/gi';

const Home = () => {
  return (
    <Container>
      <Title>
        <span role="img" aria-label="Greeting icon">
          <GiRotaryPhone
            style={{ width: '120px', height: '120px', fill: 'teal' }}
          />
        </span>
        Your phonebook welcome page!
      </Title>
    </Container>
  );
};

export default Home;

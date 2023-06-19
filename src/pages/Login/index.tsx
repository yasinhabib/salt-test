import Brief from './Brief';
import LoginForm from './LoginForm';
import { Container, LoginContainer} from './styled.component';

const Login = () => {
  return <Container>
    <LoginContainer>
      <Brief />
      <LoginForm />
    </LoginContainer>
  </Container>;
};

export default Login;

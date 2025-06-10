import Loader from '../../components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function LoginPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectAuthError);
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      {isLoading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm />
    </div>
  );
}

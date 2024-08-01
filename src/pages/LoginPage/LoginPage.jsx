import LoginForm from '../../components/LoginForm/LoginForm';
export default function LoginPage() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

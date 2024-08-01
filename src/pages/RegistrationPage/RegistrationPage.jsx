import RegistrationForm from '../../components/RegistretionForm/RegistrationForm';
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
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
}

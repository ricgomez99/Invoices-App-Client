import LoginForm from '../../components/Forms/LoginForm'

export default function Login() {
  return (
    <>
      <section className="flex flex-row mx-auto justify-between align-middle">
        <h1>Login Here</h1>
        <LoginForm />
      </section>
    </>
  )
}

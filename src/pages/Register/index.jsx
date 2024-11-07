import RegisterForm from '../../components/Forms/RegisterForm'
import Layout from '../../components/Layout'

export default function Register() {
  return (
    <Layout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <RegisterForm />
      </section>
    </Layout>
  )
}

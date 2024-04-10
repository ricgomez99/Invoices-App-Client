import LoginForm from '../../components/Forms/LoginForm'
import Layout from './../../components/Layout/index'

export default function Login() {
  return (
    <>
      <Layout>
        <section className="flex flex-col w-[100%] lg:max-w-[800px] mx-auto justify-center">
          <div className="flex gap-8 flex-col justify-between items-center lg:flex-row lg:gap-5 md:flex-col md:items-center">
            <article className="text-center lg:text-left lg:w-[50%] md:w-[50%] sm:w-56">
              <h2 className="font-bold text-gray-900 text-[45px] leading-loose">
                Log In
              </h2>
              <p className="font-semibold text-blue-gray-300 text-[16px] leading-normal">
                We are an international IT consulting firm, focused on software
                development. We use cutting-edge technologies and an innovative
                methodology throughout all lifecycle phases of design and
                implementation for large-scale systems.
              </p>
              <br />
              <p className="font-semibold text-blue-gray-300 text-[16px] leading-normal">
                Our commitment, technical expertise, and excellent location
                allows us to present an innovative and bright solution worldwide
                customers.
              </p>
            </article>

            <LoginForm />
          </div>
        </section>
      </Layout>
    </>
  )
}

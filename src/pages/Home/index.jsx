import WelcomeCard from '../../components/WelcomeCard'

export default function Home() {
  return (
    <>
      <section className="mt-6 relative flex flex-col mx-auto w-[100%] max-w-[800px] h-[100vh] justify-center">
        <article className="w-[50%] h-[300px] flex flex-col justify-center gap-7">
          <div className="flex flex-col w-[600px] h-[100%] text-left">
            <h1 className="font-bold text-[55px] mb-5 text-gray-900 leading-tight">
              Welcome to Aim Edge Invoice App!
            </h1>
            <p className="text-blue-gray-400 font-normal text-[16px] leading-loose">
              Simplify your invoicing process with our user-friendly platform
              designed to streamline your workflow and save you time. Get
              started today and experience the ease of generating professional
              invoices effortlessly.
            </p>
          </div>
        </article>
        <article className="flex flex-col self-end">
          <div className="w-auto">
            <WelcomeCard />
          </div>
        </article>
      </section>
    </>
  )
}

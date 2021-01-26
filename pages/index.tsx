import Layout from '../components/layout';

const Home = (): React.ReactNode => {
  return (
    <Layout>
      <div className="max-w-screen-md px-6 pb-12 mx-auto md:pb-24">
        <h1 className="lg:text-6xl text-3xl text-center font-bold">
          Elevate your Genshin Development Experience
        </h1>
        <p className="mt-10 text-center relative">
          Teyvat.dev helps developers build faster, work smarter and make fewer
          errors with a comprehensive API utilising GraphQL or RESFUL
          architectures.
        </p>
        <div className="flex-col items-center lg:flex-row flex mt-10 text-center">
          <a
            href="#"
            className="lg:ml-auto text-lg border bg-primary border-primary rounded-full px-12 py-4 m-2."
          >
            Get Started
          </a>
          <a
            href="#"
            className="lg:mr-auto text-lg border border-gray-300 rounded-full px-12 py-4 m-2"
          >
            Read docs
          </a>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container mx-auto py-36 text-center">
        <a
          href="#"
          className="text-lg border bg-secondary border-secondary rounded-full px-12 py-4 m-2."
        >
          Sign up
        </a>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto lg:px-36 px-6 lg:pb-36 pb-6">
          <h1 className="lg:text-6xl text-3xl font-bold lg:py-32 py-16">
            Experience the <span className="text-primary">Teyvat.dev API</span>
          </h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="grid col-span-2 gap-y-7">
              <div className="border border-secondary rounded-2xl p-4">
                Read the full documentation {' '}
                <a className="text-primary" href="/">
                  here
                </a>
              </div>
              <span>Getting started</span>
              <div className="text-center bg-secondary border border-secondary rounded-2xl p-4">
                Section title
              </div>
              <div className="text-center bg-secondary border border-secondary rounded-2xl p-4">
                Section title
              </div>
              <div className="text-center bg-secondary border border-secondary rounded-2xl p-4">
                Section title
              </div>
              <span>General Examples</span>
              <div className="text-center bg-secondary border border-secondary rounded-2xl p-4">
                Section title
              </div>
              <div className="text-center bg-secondary border border-secondary rounded-2xl p-4">
                Section title
              </div>
            </div>
            <div className="grid col-span-10 gap-y-7 pl-12">
              <div>
                <h5 className="text-md font-bold">Title of section here</h5>
              </div>
              <div className="bg-secondary border border-secondary rounded-2xl p-4"></div>
              <div className="bg-secondary border border-secondary rounded-2xl p-4"></div>
              <div className="bg-secondary border border-secondary rounded-2xl p-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container mx-auto py-36 text-center">
        <a
          href="#"
          className="text-lg border bg-secondary border-secondary rounded-full px-12 py-4 m-2."
        >
          Donate
        </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

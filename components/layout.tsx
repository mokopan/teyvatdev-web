import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = props =>{
  return (
    <div className="bg-background text-white">
      <Head>
        <title>Teyvat Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

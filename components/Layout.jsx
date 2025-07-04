import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Matthew Barcroft - Senior Software Engineer",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in modern web technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

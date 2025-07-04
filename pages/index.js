import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <Projects type="work" />
      <Projects type="learning" />
      <ContactSection />
    </Layout>
  );
}

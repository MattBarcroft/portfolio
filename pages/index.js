import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import PhotoGrid from "../components/PhotoGrid";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <Projects type="work" />
      <Projects type="learning" />
      <PhotoGrid />
      <ContactSection />
    </Layout>
  );
}

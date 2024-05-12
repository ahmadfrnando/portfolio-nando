'use client';
import Layout from '@/components/layout';
import NavbarWrapper from '@/components/navbar';
import HeroSection from '@/components/Hero/hero';
import SkillSection from '@/components/Skills/skills';
import AboutSection from '@/components/About/about';
import ProjectSection from '@/components/Projects/projects';
import GallerySection from '@/components/Gallery/gallery';
import FooterWrapper from '@/components/footer';
import ContactContent from '@/components/Contact/contact';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SkillSection />
      <AboutSection />
      <ProjectSection />
      <ContactContent />
      <FooterWrapper />
    </Layout>
  );
}

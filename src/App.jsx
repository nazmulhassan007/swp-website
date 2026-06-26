import './App.css';
import Navbar from './components/Navbar';
import BlogHero from './components/BlogHero';
import BlogContent from './components/BlogContent';
import RelatedBlogs from './components/RelatedBlogs';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogContent />
        <RelatedBlogs />
      </main>
      <Footer />
    </>
  );
}

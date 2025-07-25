
import heroImage from '../assets/banners/b7.png';   //Update with your actual path

export default function HeroSection() {
  return (
    <section className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}>
      <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">We're here to support your health journey</h1>
        <p className="text-lg mb-6">Your trusted local pharmacy offering care and convenience</p>
        <a href="#contact" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-medium">
          Get Started
        </a>
      </div>
    </section>
  );
}
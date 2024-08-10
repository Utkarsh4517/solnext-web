import Image from "next/image";
import { ArrowRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">SolNext App</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-purple-200">Features</a></li>
            <li><a href="#download" className="hover:text-purple-200">Download</a></li>
            <li><a href="#contact" className="hover:text-purple-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience Solext</h2>
            <p className="text-xl mb-8">Lorel ipsum</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-purple-100 transition duration-300">
              Get Started <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2">
            <Image src="" alt="App Screenshot" width={300} height={600} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </main>

      <section id="features" className="bg-white text-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Intuitive Interface', 'Blazing Fast', 'Secure & Private'].map((feature, index) => (
              <div key={index} className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Download SolNext Now</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-purple-100 transition duration-300">
              <Download className="mr-2" /> App Store
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-purple-100 transition duration-300">
              <Download className="mr-2" /> Google Play
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-purple-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SolNext App. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-purple-300 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-purple-300 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-purple-300 hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

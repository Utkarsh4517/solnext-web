import Image from "next/image";
import { ArrowRight, Download } from 'lucide-react';
import solnext from '../public/solnext-mockup.png';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative">
        <AnimatedBackground />
        <header className="container mx-auto px-4 py-8 relative z-10">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Solnext</h1>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-purple-200 transition duration-300">Features</a></li>
              <li><a href="#download" className="hover:text-purple-200 transition duration-300">Download</a></li>
              <li><a href="#contact" className="hover:text-purple-200 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience Solnext Currently live on devnet</h2>
              <p className="text-xl mb-8">Securely power your solana experience with solnext mobile wallet.</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-purple-100 transition duration-300">
                Get Started <ArrowRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2">
              <Image src={solnext} alt="App Screenshot" />
            </div>
          </div>
        </main>
      </div>

      <section id="features" className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Solnext Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard feature='Intuitive Interface' description='Receive and Send SOL/USDC in an interactive manner to any wallet.'></FeatureCard>
            <FeatureCard feature='Proudly Open Source 💚' description='Solnext is a cross platform mobile app built with Flutter framework and is proudly open source.'></FeatureCard>
            <FeatureCard feature='Swap Tokens' description='Securely swap SOL/USDC using Jupiter APIs or Solnext SWAP*'></FeatureCard>
          </div>
        </div>
      </section>

      <section id="upcoming" className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard feature='Solnext DEX' description='In future users will have the option to swap SOL/USDC using Solnext Decentralized Exchange.'></FeatureCard>
          <FeatureCard feature='DCA' description='Dollar cost averaging will allow users to automatically trade any SPL token at regular interval over a period of time.'></FeatureCard>
          <FeatureCard feature='Limit Orders' description='With limit orders, you will have the flexibility to trade any SPL token in your specified price limit.'></FeatureCard>
            
          </div>
        </div>
      </section>

      <section id="download" className="py-16 bg-[#111111]">
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

      <footer id="contact" className="py-8 bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SolNext App. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-purple-300 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-purple-300 hover:text-white mx-2 transition duration-300">Terms of Service</a>
            <a href="#" className="text-purple-300 hover:text-white mx-2 transition duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
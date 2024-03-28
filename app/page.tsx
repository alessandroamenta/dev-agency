import React from 'react';
import Button from '@/components/ui/button';
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { CiCreditCard1 } from "react-icons/ci";
import { FaBolt } from "react-icons/fa6";
import Link from 'next/link';
import Script from 'next/script';


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export const metadata = {
  title: "4amDev",
  icon: HiMiniCodeBracketSquare,
}

const Page: React.FC = () => {
  return (
    
    <div className="max-w-xl w-full mx-auto px-4 py-8">

      <header className="flex justify-between items-center pb-10 mt-10">
        <div className="flex items-center">
          <HiMiniCodeBracketSquare className="w-8 h-8 mr-2" />
          <h1 className="text-xl font-bold text-black">4amDev</h1>
        </div>
      </header>
      <main>
        <section className="mb-14">
          <h2 className="text-3xl font-semibold leading-tight mb-6">
            Kick-start your next product. <br></br> Fast, affordable, and stress-free AI prototyping
          </h2>
          <p className="text-lg mb-6 font-medium">
          Turn your idea into a working prototype — <span className='text-black font-bold'>in your hands in days, not months.</span> Validate your concept and start gathering user feedback quickly.
        </p>
          <div className="flex space-x-4">
          <Link href="#pricing" passHref>
          <Button className="bg-black text-white hover:scale-110 rounded-xl"><CiCreditCard1 className="w-6 h-6 mr-2"/> See pricing</Button>
          </Link>
          <a href="https://calendly.com/alessandroamenta1/15min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gray-200 hover:scale-110 rounded-xl" variant="outline">
            <CalendarIcon className="w-6 h-6 mr-2" /> Book a call
          </Button>
        </a>
          </div>
        </section>
        <section className="mb-14">
          <h3 className="text-2xl font-600 mb-4">Get that idea out of your head. Fast.</h3>
          <ul className="list-none pl-0 space-y-3">
            <li className='text-justify'>
            <span className="text-black font-semibold">Streamlined process.</span> We&apos;ll quickly build a functional Streamlit prototype of your AI idea, so you can start testing it with users.
            </li>
            <li className='text-justify'>
            <span className="text-black font-semibold">One core feature.</span> We&apos;ll work together to refine your idea, strip it down to one core feature. We then focus on implementing the essential functionality, keeping the prototype simple and easy to use.
            </li>
            <li className='text-justify'>
              <span className="text-black font-semibold">It actually works.</span> We code using latest AI technologies and use Streamlit for prototyping.
            </li>
            <li className='text-justify'>
            <span className="text-black font-semibold">Affordable and flexible.</span> Our prototyping service is priced at just $599, with no hidden costs or long-term commitments. That&apos;s it.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h3 className="text-2xl font-600 mb-4">From idea to the real prototype. How we do it</h3>
          <div className="space-y-3">
          <p className='font-600 text-justify'><span className="font-bold text-black">Specifications.</span> We discuss your idea and craft a short but detailed document outlining the key features of your AI prototype. It serves as an agreement and guides us during the process.</p>
          <p className='text-justify'><span className="font-bold  text-black">Development.</span> Using Streamlit, we quickly create a tangible version of your AI idea that you can interact with and share.</p>
            <p className='text-justify'><span className="font-bold text-black">Deployment.</span> Once the prototype is ready, we&apos;ll deploy it and provide you with the necessary guidance to use it and share it.</p>
          </div>
        </section>
        <section id="pricing" className="mb-14">
          <h3 className="text-2xl font-600 mb-4">Fixed price with no hidden costs</h3>
          <p className="font-semibold text-xl mb-4 text-black">$599/prototype</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Streamlit-powered interactive prototype</li>
            <li>Integrations with leading AI models (OpenAI, Anthropic, etc.)</li>
            <li>Text-to-speech and vision capabilities (ElevenLabs/GPT-Vision)</li>
            <li>No design skills required - we&apos;ll create a simple one-page UI</li>
            <li>Rapid 3-day development and deployment</li>
            <li>Share prototype with users, collegues or investors easily</li>
            <li>Affordable fixed price, no hidden costs</li>
          </ul>
          <div className="flex space-x-4">
          <a href="https://tally.so/r/3EXZvr" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:scale-110 rounded-xl"> <FaBolt className="w-6 h-6 mr-2" />Get started</Button>
            </a>
            <a href="https://calendly.com/alessandroamenta1/15min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gray-200 hover:scale-110 rounded-xl" variant="outline">
            <CalendarIcon className="w-6 h-6 mr-2" /> Book a call
          </Button>
        </a>
          </div>
        </section>
        <section className="about-founder mb-14">
          <h3 className="text-2xl font-600 mb-4">About the founder. Why I started 4amDev</h3>
          <div className="space-y-3">
            <p className="mb-4 text-justify">
            Hey there, I&apos;m Ale. I&apos;m a full-stack developer shipping products like a madman. I&apos;ve taught myself to code, tried my hand at doing a startup, and worked for VC-backed companies in Silicon Valley. Through these experiences, I&apos;ve seen firsthand how easy it is for people to get stuck overcomplicating their ideas. Trust me - I&apos;ve been there myself.
            </p>
            <p className="mb-6 text-justify">
            I learned that the key is to start small and keep it simple, focusing on core features and removing as much friction as possible to get started. Great things are almost always made in successive versions. Start with the simplest thing that could possibly work, then evolve from there.
            </p>
            <p className="mb-6 text-justify">
            That&apos;s why I started 4amDev. I believe in the power of getting something simple but functional into people&apos;s hands, fast. This way, you remove the friction that often prevents great ideas from becoming reality. Once you have that initial version, it’s easier to just keep going.
            </p>
            <p className="mb-6 text-justify">
            Too often, I see people with amazing ideas get bogged down in endless planning and complexities. They overengineer their products, and by launch time, the initial spark is gone. Or worse, they complicate it so much that nothing ever becomes a reality. I want to help you avoid that trap and get moving quickly.
            </p>
            <p className='text-justify'>
            With 4amDev, you get a user-friendly, quickly-built prototype of your AI idea. No fuss - just a simple, functional version to start testing with real users. From there, you can gradually level up your product. Once you get started, there&apos;s no stopping you. Sound good? Let&apos;s get started!
            </p>
          </div>
        </section>
      </main>
      <footer className="text-center pt-10">
        <p>4amDev © 2024.</p>
      </footer>
      <Script
        id="crisp-chat-int"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.$crisp=[];window.CRISP_WEBSITE_ID="a82247ea-dd0d-4585-b023-8b1871515cea";
        (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
        s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
        />
    </div>
  )
}

export default Page;





"use client"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome to <span className="font-semibold">ShwetankBlog</span> - Your Source for <span className="font-semibold underline decoration-primary"><span ref={el} /></span> Insights
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore articles on programming, web development, data science, and more. Join me on a journey of continuous learning and discovery!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Featured Posts</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out some of our most popular and insightful articles.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Featured Post 1 - React Hooks */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <img src="/typescript.webp" alt="Mastering React Hooks" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Mastering React Hooks</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Dive deep into React Hooks and learn how to write cleaner, more efficient functional components with practical examples and best practices.</p>
          <Link href="/blogpost/mastering-react-hooks">
            <Button variant="outline" className="w-full">Read More</Button>
          </Link>
        </div>
      </div>
      {/* Featured Post 2 - AI in Web Development */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="AI in Web Development" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">The Future of AI in Web Development</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Explore how artificial intelligence is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user interfaces.</p>
          <Link href="/blogpost/ai-in-web-development">
            <Button variant="outline" className="w-full">Read More</Button>
          </Link>
        </div>
      </div>
      {/* Featured Post 3 - Next.js Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Next.js Performance Optimization" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Optimizing Next.js Performance</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Learn advanced techniques to boost the performance of your Next.js applications for a seamless user experience, including code splitting and caching strategies.</p>
          <Link href="/blogpost/nextjs-performance-optimization">
            <Button variant="outline" className="w-full">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Readers Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Feedback from our amazing community of developers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Review 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&ldquo;The React Hooks tutorial was incredibly detailed and helped me finally understand useEffect. The examples were practical and easy to follow!&rdquo;</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Sarah Chen</h3>
          <p className="text-gray-500 dark:text-gray-300">Frontend Developer</p>
        </div>
      </div>
      {/* Review 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&ldquo;This blog has become my go-to resource for staying updated with the latest in web development. The AI article opened my eyes to new possibilities!&rdquo;</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Alex Rodriguez</h3>
          <p className="text-gray-500 dark:text-gray-300">Full Stack Developer</p>
        </div>
      </div>
      {/* Review 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">&ldquo;The Next.js performance optimization guide saved me hours of research. Applied the techniques and saw immediate improvements in my app!&rdquo;</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">David Kim</h3>
          <p className="text-gray-500 dark:text-gray-300">Software Engineer</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </main>
  );
};









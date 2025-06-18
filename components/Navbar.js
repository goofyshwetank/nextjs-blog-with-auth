"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './auth/AuthModal';



const Navbar = () => {
    const [progress, setProgress] = useState(0)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState('login')
    const pathname = usePathname()
    const { user, logout, isAuthenticated } = useAuth()

    useEffect(() => {
      setProgress(20)

      setTimeout(() => {
        setProgress(40)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 400);
     
    }, [pathname])



    useEffect(() => {
      setTimeout(() => {
       setProgress(0)
      }, 50);
    }, [])
    
    
    return (
        <>
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}><div className="text-lg font-bold">
                    ShwetankBlog
                </div></Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300"> Home
                    </Link>

                         <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blog
                    </Link>

                    <div className='flex items-center'>
                        {isAuthenticated ? (
                            <div className='flex items-center space-x-2'>
                                <span className='text-sm text-gray-600 dark:text-gray-300'>
                                    Welcome, {user?.name}
                                </span>
                                <Button 
                                    className="mx-1" 
                                    variant="outline"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Button 
                                    className="mx-1" 
                                    variant="outline"
                                    onClick={() => {
                                        setAuthMode('login')
                                        setAuthModalOpen(true)
                                    }}
                                >
                                    Login
                                </Button>
                                <Button 
                                    className="mx-1" 
                                    variant="outline"
                                    onClick={() => {
                                        setAuthMode('signup')
                                        setAuthModalOpen(true)
                                    }}
                                >
                                    Signup
                                </Button>
                            </>
                        )}
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                        <span className="mx-2"> 
                            <ModeToggle />
                        </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">ShwetankBlog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/"> Home
                                        </Link>

                                       <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Contact</Link>
                                        <Link href="/blog">
                                            Blog
                                        </Link>

                                        <div>
                                            {isAuthenticated ? (
                                                <div className='space-y-2'>
                                                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                                                        Welcome, {user?.name}
                                                    </div>
                                                    <Button 
                                                        className="w-full text-xs" 
                                                        variant="outline"
                                                        onClick={logout}
                                                    >
                                                        Logout
                                                    </Button>
                                                </div>
                                            ) : (
                                                <>
                                                    <Button 
                                                        className="mx-1 text-xs" 
                                                        variant="outline"
                                                        onClick={() => {
                                                            setAuthMode('login')
                                                            setAuthModalOpen(true)
                                                        }}
                                                    >
                                                        Login
                                                    </Button>
                                                    <Button 
                                                        className="mx-1 text-xs" 
                                                        variant="outline"
                                                        onClick={() => {
                                                            setAuthMode('signup')
                                                            setAuthModalOpen(true)
                                                        }}
                                                    >
                                                        Signup
                                                    </Button>
                                                </>
                                            )}
                                        </div>

                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>


            </div>

        </nav>
        
        <AuthModal 
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            initialMode={authMode}
        />
        </>
    );
};

export default Navbar
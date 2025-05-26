'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  function toggleAuthForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className='flex min-h-screen mt-7'>
      <div className='w-full max-w-3xl mx-auto flex flex-col lg:flex-row p-3'>
        <div>
          <div
            className='mb-8 lg:mb-12 cursor-pointer'
            onClick={() => router.push('/')}
          >
            <ChevronLeft className='size-6 text-gray-500 sm:size-8 border-2 rounded-full p-1' />
            <div className='mt-8 sm:mb-6'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-800 via-indigo-500 to-indigo-600 bg-clip-text text-transparent'>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </h2>
              <p className='text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8'>
                {isSignUp
                  ? 'Join Dazzle today and discover exclusive deals and offers!'
                  : 'Welcome back to Dazzle! Log in to continue your shopping experience.'}
              </p>
            </div>
          </div>
          <div className='mt-4 sm:mt-5 flex items-center justify-center'>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600'>
              {isSignUp ? 'Already have an account?' : 'New to Dazzle?'}
            </p>
            <Button
              variant='link'
              className='text-lg sm:text-xl lg:text-2xl text-gray-500 cursor-pointer'
              onClick={toggleAuthForm}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

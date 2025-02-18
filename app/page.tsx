"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const App = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/news');
  }, [router]);

  return (
    <main className='min-h-screen'></main>
  )
}

export default App;
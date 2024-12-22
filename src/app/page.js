"use client"
import dynamic from 'next/dynamic';


const ClientOnlyComponent = dynamic(() => import('./components/dashboard/dashboard'), {
  ssr: false,
});

export default function Home() {
    return (
      <ClientOnlyComponent/>
    );
}

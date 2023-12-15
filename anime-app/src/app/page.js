import Image from 'next/image'
import AnimeGrid from '@/components/moviesGrid'


export default function Home() {
  return (
    <div className='w-full h-fit bg-white'>
     <AnimeGrid />
    </div>
      )
}

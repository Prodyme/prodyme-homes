import Image from 'next/image'
import HomePage from './home/page'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
        {/* <header className="pb-24">
            <h4>Prodyme</h4>
        </header>
        <figure>
            <Image
                src="/images/logo.png"
                alt="prodyme homes"
                width={180}
                height={37}
                priority
            />

        </figure> */}
      <HomePage/>
    </main>
  )
}

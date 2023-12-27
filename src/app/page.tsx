import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <header className="pb-24">
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
        </figure>
    </main>
  )
}

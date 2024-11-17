import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Farm Manager</h1>
      <Link 
        href="/inventory" 
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
      >
        Go to Inventory
      </Link>
    </div>
  )
}

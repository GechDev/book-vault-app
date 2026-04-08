import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

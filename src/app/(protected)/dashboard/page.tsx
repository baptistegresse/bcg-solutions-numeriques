import { SignOutButton } from "@/components/ui/signout-button"
import { getSession } from "@/lib/auth-server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/sign-in")
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-500">Welcome to the dashboard {session?.user?.name}</p>
      <SignOutButton />
    </main>
  )
}
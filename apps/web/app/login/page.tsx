import { Card } from "@x402/ui"
import Link from "next/link"
import { signIn } from "@/lib/auth"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
            <Card className="w-full max-w-md p-8 bg-zinc-900 border-zinc-800">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">x402 Dashboard</h1>
                    <p className="text-zinc-400">Sign in to manage your payments</p>
                </div>

                <form
                    action={async () => {
                        "use server"
                        await signIn("github", { redirectTo: "/dashboard" })
                    }}
                    className="w-full"
                >
                    <button className="w-full bg-white text-black hover:bg-gray-200 font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors">
                        {/* Github Icon SVG embedded loosely or lucide check */}
                        <span className="font-bold">Sign in with GitHub</span>
                    </button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-zinc-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-zinc-900 px-2 text-zinc-500">Or continue with</span>
                    </div>
                </div>

                <form
                    className="space-y-4"
                    action={async (formData) => {
                        "use server"
                        await signIn("resend", formData)
                    }}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors">
                        Sign in with Email
                    </button>
                </form>
            </Card>

            <p className="mt-8 text-center text-sm text-zinc-500">
                <Link href="/" className="hover:text-zinc-300">
                    &larr; Back to Home
                </Link>
            </p>
        </div>
    )
}

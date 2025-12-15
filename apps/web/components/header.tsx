import { User } from "next-auth"

export function Header({ user }: { user: User }) {
    return (
        <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-background">
            <div className="font-semibold text-lg">Merchant Dashboard</div>
            <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-muted-foreground">
                    {user.email}
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
            </div>
        </header>
    )
}

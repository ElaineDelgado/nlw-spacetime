import { User } from "lucide-react"

export const Signin = () => {
    return (
        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <User />
            </div>
            <p className="text-sm leading-snug max-w-[140px]">
                <span className="underline">Crie sua conta e salve suas memórias!</span> 
            </p>
        </a>
    )
}
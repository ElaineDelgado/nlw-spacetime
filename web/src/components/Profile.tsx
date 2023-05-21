import { getUser } from "@/lib/auth"
import Image from "next/image"

export const Profile = () => {
    const { name, avatarUrl } = getUser()

    return (
        <div className="flex items-center gap-3 text-left">
            <Image src={avatarUrl} alt={name} width={40} height={40} className="w-10 h-10 rounded-full" />

            <p className="text-sm leading-snug max-w-[140px]">
                {name}
                <a 
                href="/api/auth/logout" 
                className="block mt-1 text-purple-500 hover:text-purple-200 transition-colors" 
                >
                    Logout
                </a>
            </p>
        </div>
    )
}
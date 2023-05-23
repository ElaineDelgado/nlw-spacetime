import { MediaPicker } from '@/components/MediaPicker'
import { NewMemoryForm } from '@/components/NewMemoryForm'
import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export const NewMemory = () => {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft size="16" />
                Voltar à timeline
            </Link>

            <NewMemoryForm />
        </div>
    )
}

export default NewMemory 
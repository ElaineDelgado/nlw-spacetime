
'use client'
import React from "react"

export const MediaPicker = () => {
    const [preview, setPreview] = React.useState<string | null>(null)

    const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target 

        if(!files) {
            return 
        }

        const previewURL = URL.createObjectURL(files[0])
        setPreview(previewURL)
    }

    return (
        <>
            <input 
                onChange={onFileSelected} 
                name="coverUrl"
                type="file" 
                id="media" 
                accept="image/*"
                className="invisible w-0 h-0" 
            />
    
            {preview && 
                <img 
                    src={preview} 
                    alt="Preview uploaded image"
                    className="w-full aspect-video rounded-lg object-cover" 
                />
            }
        </>
    )
}
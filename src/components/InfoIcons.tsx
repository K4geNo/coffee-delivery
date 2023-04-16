import { ReactNode } from 'react'

interface InfoIconsProps {
    icon: ReactNode
    text: string
    iconBg: string
}

export function InfoIcons({ icon, text, iconBg }: InfoIconsProps) {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`p-2 rounded-full flex items-center justify-center text-background ${iconBg}`}
            >
                {icon}
            </div>

            <p className="text-base-text">{text}</p>
        </div>
    )
}

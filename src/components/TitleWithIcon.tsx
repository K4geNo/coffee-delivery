interface TitleWithIconProps {
    title: string
    subtitle?: string
    icon: React.ReactNode
}

export function TitleWithIcon({ icon, subtitle, title }: TitleWithIconProps) {
    return (
        <div className="flex gap-2">
            {icon}

            <div>
                <p className="text-base-subtitle">{title}</p>

                <p className=" text-base-text text-sm">{subtitle}</p>
            </div>
        </div>
    )
}

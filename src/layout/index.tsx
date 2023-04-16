import { Header } from '@/components/Header'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <section className="w-screen min-h-screen bg-background">
            <Header />
            {children}
        </section>
    )
}

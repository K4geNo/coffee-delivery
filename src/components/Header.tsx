'use client'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.svg'
import { useContextSelector } from 'use-context-selector'

export function Header() {
    const { cartLength } = useContextSelector(CartContext, (context) => ({
        cartLength: context.cartLength,
    }))

    return (
        <header className="flex w-full items-center justify-center h-[6.5rem] sticky top-0 left-0 z-10 bg-background">
            <div className="w-full max-w-[70rem] flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} alt="" />
                </Link>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-md bg-purple-light p-2">
                        <MapPin
                            size={22}
                            weight="fill"
                            className="text-purple"
                        />
                        <p className="text-sm text-purple-dark">
                            Passo Fundo, RS
                        </p>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-purple-light relative">
                        <Link
                            href="/checkout"
                            className="rounded-md bg-yellow-light p-2"
                            replace
                            prefetch={false}
                        >
                            <ShoppingCart
                                size={22}
                                weight="fill"
                                className="text-yellow-dark"
                            />
                        </Link>

                        {cartLength > 0 && (
                            <span className="text-white absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-center text-xs text-base-white">
                                {String(cartLength)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

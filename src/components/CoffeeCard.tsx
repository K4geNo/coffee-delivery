import { useCallback, useState } from 'react'

import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import { QuantityInput } from './QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { baloo } from '@/fonts'
import { formatNumberToPrice } from '@/utils/format-number-to-price'
import { useContextSelector } from 'use-context-selector'

export interface Coffee {
    id: number
    tags: string[]
    name: string
    description: string
    photo: string
    price: number
}

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    const { addToCart } = useContextSelector(CartContext, (context) => ({
        addToCart: context.addToCart,
    }))

    const [quantity, setQuantity] = useState(1)

    const handleIncreaseQuantity = useCallback(() => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }, [])

    const handleDecreaseQuantity = useCallback(() => {
        setQuantity((prevQuantity) => prevQuantity - 1)
    }, [])

    const priceFormatted = formatNumberToPrice(coffee.price)

    function handleAddToCart() {
        addToCart({ ...coffee, quantity })
    }

    return (
        <section className="flex flex-col items-center rounded-bl-[36px] rounded-tr-[36px] bg-base-card px-5 pb-5">
            <Image
                src={coffee.photo}
                alt={coffee.name}
                width={120}
                height={120}
                quality={80}
                className="-mt-5"
            />

            <div className="flex w-full flex-wrap items-center justify-center gap-1 pt-3">
                {coffee.tags.map((tag) => (
                    <span
                        key={`${coffee.id}${tag}`}
                        className="rounded-md bg-yellow-light px-2 py-1 text-[0.625rem] font-bold uppercase text-yellow-dark"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="pt-4 text-center">
                <strong
                    className={`${baloo.className} text-xl font-bold text-base-subtitle`}
                >
                    {coffee.name}
                </strong>

                <p className="pt-2 text-sm text-base-label">
                    {coffee.description}
                </p>
            </div>

            <div className="flex w-full items-center justify-between pt-8">
                <div>
                    <span className="text-sm text-base-text">R$</span>

                    <span
                        className={`${baloo.className} ml-0.5 text-2xl font-extrabold text-base-text`}
                    >
                        {priceFormatted}
                    </span>
                </div>

                <div className="flex w-[8rem] justify-end">
                    <QuantityInput
                        quantity={quantity}
                        onIncrease={handleIncreaseQuantity}
                        onDecrease={handleDecreaseQuantity}
                        className="w-[72px]"
                    />

                    <button
                        className="ml-[0.3rem] flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-md border-none bg-purple-dark p-2"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart
                            size={22}
                            weight="fill"
                            className="text-base-card"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

import { CartContext, CartItem } from '@/context/CartContext'

import Image from 'next/image'
import { QuantityInput } from './QuantityInput'
import { Trash } from 'phosphor-react'
import clsx from 'clsx'
import { formatNumberToPrice } from '@/utils/format-number-to-price'
import { useCallback } from 'react'
import { useContextSelector } from 'use-context-selector'

interface CardCoffeeDetailsProps {
    coffee: CartItem
}

export function CardCoffeeDetails({ coffee }: CardCoffeeDetailsProps) {
    const { changeProductQuantity, removeProductFromCart } = useContextSelector(
        CartContext,
        (context) => ({
            changeProductQuantity: context.changeProductQuantity,
            removeProductFromCart: context.removeProductFromCart,
        })
    )

    const totalPrice = coffee.price * coffee.quantity

    const formattedTotalPrice = formatNumberToPrice(totalPrice)

    const handleIncrease = useCallback(() => {
        changeProductQuantity(coffee.id, 'increase')
    }, [changeProductQuantity])

    const handleDecrease = useCallback(() => {
        changeProductQuantity(coffee.id, 'decrease')
    }, [changeProductQuantity])

    const handleRemove = () => {
        removeProductFromCart(coffee.id)
    }

    return (
        <div className="w-full flex items-center justify-between border-b border-base-button pb-6 mb-6">
            <div className="flex items-center gap-5">
                <Image src={coffee.photo} alt="" width={64} height={64} />

                <div>
                    <p className="text-base-subtitle">{coffee.name}</p>

                    <div className="mt-2 h-8 flex items-center gap-2 max-w-[11rem] w-full">
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={coffee.quantity}
                            className="h-8"
                        />

                        <button
                            className={clsx(
                                'flex items-center bg-base-button h-8 py-[0.4063rem] px-2 text-xs gap-1 uppercase text-base-text rounded-md',
                                'hover:bg-base-hover transition'
                            )}
                            onClick={handleRemove}
                        >
                            <Trash size={16} className="text-purple" />
                            Remover
                        </button>
                    </div>
                </div>
            </div>

            <p className="font-bold self-start">R$ {formattedTotalPrice}</p>
        </div>
    )
}

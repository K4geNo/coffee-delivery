import { CardCoffeeDetails } from './CardCoffeeDetails'
import { CartContext } from '@/context/CartContext'
import { ConfirmCoffeeDetails } from './ConfirmCoffeeDetails'
import { Handbag } from 'phosphor-react'
import { baloo } from '@/fonts'
import clsx from 'clsx'
import { useContextSelector } from 'use-context-selector'

export function CompleteCoffeeDetails() {
    const { cartItems } = useContextSelector(CartContext, (context) => ({
        cartItems: context.cartItems,
    }))

    return (
        <section className="flex flex-col gap-3 w-[28rem]">
            <h3
                className={`${baloo.className} text-base-subtitle text-lg font-bold`}
            >
                Cafés selecionados
            </h3>

            {cartItems.length > 0 ? (
                <div
                    className={clsx(
                        'w-full bg-base-card p-10 flex flex-col',
                        'rounded-tl-md rounded-bl-[2.75rem] rounded-tr-[2.75rem] rounded-br-md'
                    )}
                >
                    {cartItems.map((coffee) => (
                        <CardCoffeeDetails key={coffee.id} coffee={coffee} />
                    ))}

                    <ConfirmCoffeeDetails />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-4">
                    <Handbag size={64} />
                    <p className="text-base-text text-center mt-3">
                        Seu carrinho está vazio
                    </p>

                    <p className="text-base-text text-center mt-3">
                        Adicione cafés para continuar
                    </p>
                </div>
            )}
        </section>
    )
}

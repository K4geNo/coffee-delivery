import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import { baloo } from '@/fonts'
import { changePaymentMethodToLongTerm } from '@/utils/format-payment-to-long-term'
import clsx from 'clsx'
import successImage from '@/assets/success-img.png'
import { useContextSelector } from 'use-context-selector'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Success() {
    const { userAddress, cartItems } = useContextSelector(
        CartContext,
        (context) => ({
            userAddress: context.userAddress,
            cartItems: context.cartItems,
        })
    )

    const paymentMethod = changePaymentMethodToLongTerm(
        userAddress.paymentMethod
    )

    const router = useRouter()

    useEffect(() => {
        if (cartItems.length === 0) {
            router.push('/')
        }

        localStorage.setItem('@Cart', JSON.stringify([]))
    }, [])

    const completeAddress = `${
        userAddress.complement && userAddress.complement
    }`

    return (
        <main className="mt-20 flex justify-between gap-8 w-full max-w-[70rem] mx-auto">
            {cartItems.length > 0 && (
                <>
                    <section>
                        <h2
                            className={`${baloo.className} text-[2rem] font-extrabold text-yellow-dark`}
                        >
                            Uhu! Pedido confirmado
                        </h2>

                        <p className="text-xl text-base-subtitle">
                            Agora é só aguardar que logo o café chegará até você
                        </p>

                        <div
                            className={clsx(
                                'p-10 flex flex-col gap-y-8 mt-10 min-w-[32.875rem]',
                                'border border-[#DBAC2C]',
                                'rounded-tl-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] rounded-br-md'
                            )}
                        >
                            <div className="flex gap-2">
                                <div className="w-8 h-8 p-2 bg-purple rounded-full">
                                    <MapPin
                                        size={16}
                                        weight="fill"
                                        className="text-base-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-base-subtitle">
                                        Entrega em{' '}
                                        <strong>
                                            {userAddress.street},{' '}
                                            {userAddress.number}
                                        </strong>
                                    </p>

                                    <p className="text-base-text">
                                        {userAddress.neighborhood}{' '}
                                        {completeAddress} - {userAddress.city},{' '}
                                        {userAddress.state}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="w-8 h-8 p-2 bg-yellow rounded-full">
                                    <Timer
                                        size={16}
                                        weight="fill"
                                        className="text-base-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-base-subtitle">
                                        Previsão de entrega
                                    </p>

                                    <strong className="text-base-text">
                                        20 min - 30 min
                                    </strong>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="w-8 h-8 p-2 bg-yellow-dark rounded-full">
                                    <CurrencyDollar
                                        size={16}
                                        weight="fill"
                                        className="text-base-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-base-subtitle">
                                        Pagamento na entrega
                                    </p>

                                    <strong className="text-base-text">
                                        {paymentMethod}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="self-end">
                        <Image src={successImage} alt="Success" />
                    </section>
                </>
            )}

            {cartItems.length === 0 && (
                <h2
                    className={`${baloo.className} text-[2rem] font-extrabold text-yellow-dark`}
                >
                    Ops! Seu carrinho está vazio
                </h2>
            )}
        </main>
    )
}

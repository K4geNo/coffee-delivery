import { CartContext } from '@/context/CartContext'
import { formatNumberToPrice } from '@/utils/format-number-to-price'
import { useContextSelector } from 'use-context-selector'

export function ConfirmCoffeeDetails() {
    const { cartItemsTotal } = useContextSelector(CartContext, (context) => ({
        cartItemsTotal: context.cartItemsTotal,
    }))

    const deliveryFee = 3.5

    const total = cartItemsTotal + deliveryFee

    const formattedTotal = formatNumberToPrice(total)

    const formattedItemsTotal = formatNumberToPrice(cartItemsTotal)

    return (
        <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <p className="text-sm text-base-text">Total de itens</p>
                <p className="text-base-text">R$ {formattedItemsTotal}</p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-base-text">Entrega</p>
                <p className="text-base-text">R$ 3,50</p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-xl text-base-subtitle font-bold">Total</p>
                <p className="text-xl text-base-subtitle font-bold">
                    R$ {formattedTotal}
                </p>
            </div>

            <button
                className="uppercase w-full bg-yellow py-4 rounded-md text-base-white font-bold text-sm mt-3 transition hover:bg-yellow-dark"
                type="submit"
            >
                Confirmar pedido
            </button>
        </section>
    )
}

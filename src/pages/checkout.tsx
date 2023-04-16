import { ConfirmOrderData, confirmOrderSchema } from '@/schemas/confirm-order'
import { FormProvider, useForm } from 'react-hook-form'

import { CartContext } from '@/context/CartContext'
import { CompleteCoffeeDetails } from '@/components/CompleteCoffeeDetails'
import { CompleteOrderForm } from '@/components/CompleteOrderForm'
import { useContextSelector } from 'use-context-selector'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Checkout() {
    const { setUserAddress } = useContextSelector(CartContext, (context) => ({
        setUserAddress: context.setUserAddress,
    }))

    const confirmOrderForm = useForm<ConfirmOrderData>({
        resolver: zodResolver(confirmOrderSchema),
    })

    const { handleSubmit } = confirmOrderForm

    const router = useRouter()

    function handleConfirmOrder(data: ConfirmOrderData) {
        setUserAddress(data)

        router.push('/success', undefined, { shallow: true })
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <form
                className="mt-10 flex justify-between gap-8 w-full max-w-[70rem] mx-auto"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />

                <CompleteCoffeeDetails />
            </form>
        </FormProvider>
    )
}

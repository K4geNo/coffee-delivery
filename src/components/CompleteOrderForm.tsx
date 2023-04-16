import { CurrencyDollar, MapPin } from 'phosphor-react'

import { AddressForm } from './AddressForm'
import { PaymentMethod } from './PaymentMethod'
import { TitleWithIcon } from './TitleWithIcon'
import { baloo } from '@/fonts'

export function CompleteOrderForm() {
    return (
        <section className="flex flex-col gap-3 w-[40rem]">
            <h3
                className={`${baloo.className} text-base-subtitle text-lg font-bold`}
            >
                Complete seu pedido
            </h3>

            <div className="w-full bg-base-card rounded-md p-10 flex flex-col gap-8">
                <TitleWithIcon
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPin size={22} className="text-yellow-dark" />}
                />

                <AddressForm />
            </div>

            <div className="w-full bg-base-card rounded-md p-10 flex flex-col gap-8">
                <TitleWithIcon
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar size={22} className="text-purple" />}
                />

                <PaymentMethod />
            </div>
        </section>
    )
}

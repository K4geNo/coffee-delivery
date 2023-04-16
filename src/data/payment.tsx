import { Bank, CreditCard, Money } from 'phosphor-react'

export const paymentMethods = [
    {
        id: 1,
        name: 'Cartão de crédito',
        icon: <CreditCard size={16} className="text-purple" />,
        value: 'credit',
    },
    {
        id: 2,
        name: 'Cartão de débito',
        icon: <Bank size={16} className="text-purple" />,
        value: 'debit',
    },
    {
        id: 3,
        name: 'Dinheiro',
        icon: <Money size={16} className="text-purple" />,
        value: 'cash',
    },
]

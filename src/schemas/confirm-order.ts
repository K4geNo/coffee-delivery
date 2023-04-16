import { z } from 'zod'

export const confirmOrderSchema = z.object({
    cep: z
        .string()
        .min(8, 'O CEP deve ter 8 dígitos')
        .nonempty('Informe o CEP'),
    street: z.string().nonempty('Informe o nome da rua'),
    number: z.string().nonempty('Informe o número da casa'),
    complement: z.string().optional(),
    neighborhood: z.string().nonempty('Informe o bairro'),
    city: z.string().nonempty('Informe a cidade'),
    state: z.string().nonempty('Informe o estado'),
    paymentMethod: z.enum(['credit', 'debit', 'cash']),
})

export type ConfirmOrderData = z.infer<typeof confirmOrderSchema>

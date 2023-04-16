/* eslint-disable indent */
type paymentMethod = 'credit' | 'debit' | 'cash'

export function changePaymentMethodToLongTerm(paymentMethod: paymentMethod) {
    switch (paymentMethod) {
        case 'credit':
            return 'Cartão de crédito'
        case 'debit':
            return 'Cartão de débito'
        case 'cash':
            return 'Dinheiro'
    }
}

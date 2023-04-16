export function formatNumberToPrice(number: number): string {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
    }).format(number)
}

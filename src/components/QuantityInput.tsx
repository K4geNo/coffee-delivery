import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
    className?: string
}

export function QuantityInput({
    quantity,
    onIncrease,
    onDecrease,
    className,
}: QuantityInputProps) {
    return (
        <div
            className={`${className} flex items-center justify-between gap-1 rounded-md bg-base-button`}
        >
            <button
                type="button"
                onClick={onDecrease}
                className="h-4 w-4 border-none bg-none pl-1 ml-1 text-purple transition disabled:opacity-40"
                disabled={quantity <= 1}
            >
                <Minus size={14} weight="fill" />
            </button>

            <span className="bg-base-button text-base-title focus:outline-none px-1 w-[25px] text-center">
                {quantity}
            </span>

            <button
                onClick={onIncrease}
                disabled={quantity >= 10}
                className="h-4 w-4 border-none bg-none pr-1 mr-1 text-purple transition disabled:opacity-40 flex items-center justify-center"
                type="button"
            >
                <Plus size={14} weight="fill" />
            </button>
        </div>
    )
}

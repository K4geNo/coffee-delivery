import { ForwardRefRenderFunction, forwardRef } from 'react'

import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email' | 'number'
    className?: string
    error?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { type = 'text', className, error, ...props },
    ref
) => {
    return (
        <div className={clsx('flex flex-col gap-y-2', className)}>
            <input
                type={type}
                className={clsx(
                    'w-full rounded-md border border-base-button bg-base-input p-3 text-sm text-base-text outline-none transition-colors',
                    'focus:border-yellow-dark'
                )}
                ref={ref}
                {...props}
            />

            {error && <span className="text-xs text-red">{error}</span>}
        </div>
    )
}

export const Input = forwardRef(InputBase)

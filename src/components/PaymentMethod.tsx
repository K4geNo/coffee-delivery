import * as RadioGroup from '@radix-ui/react-radio-group'

import { Controller, useFormContext } from 'react-hook-form'

import clsx from 'clsx'
import { paymentMethods } from '@/data/payment'

export function PaymentMethod() {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
                <RadioGroup.Root
                    className="grid grid-cols-3 gap-4"
                    defaultValue="credit"
                    onValueChange={field.onChange}
                    value={field.value}
                >
                    {paymentMethods.map((method) => (
                        <RadioGroup.Item
                            key={method.id}
                            value={method.value}
                            className={clsx(
                                'flex w-full items-center justify-center gap-3 rounded-md border border-base-button bg-base-button p-4',
                                'radix-state-checked:text-white radix-state-checked:border-purple radix-state-checked:bg-purple-light',
                                'radix-state-unchecked:hover:bg-gray-600 transition-colors hover:bg-base-hover'
                            )}
                        >
                            {method.icon}

                            <span className="text-sm text-base-subtitle">
                                {method.name}
                            </span>
                        </RadioGroup.Item>
                    ))}
                </RadioGroup.Root>
            )}
        />
    )
}

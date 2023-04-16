import { Input } from './form/Input'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

export function AddressForm() {
    const { register, formState } = useFormContext()

    const { errors } = formState as ErrorsType

    return (
        <div className="w-full grid grid-cols-[12.5rem 17.25rem 3.75rem] gap-y-4 gap-x-3">
            <Input
                placeholder="CEP"
                className="col-span-1"
                {...register('cep')}
                error={errors.cep?.message}
            />

            <Input
                placeholder="Rua"
                className="col-span-3"
                {...register('street')}
                error={errors.street?.message}
            />

            <Input
                placeholder="Número"
                type="number"
                className="col-span-1"
                {...register('number')}
                error={errors.number?.message}
            />

            <Input
                placeholder="Complemento"
                className="col-span-2"
                {...register('complement')}
            />

            <Input
                placeholder="Bairro"
                className="col-span-1"
                {...register('neighborhood')}
                error={errors.neighborhood?.message}
            />

            <Input
                placeholder="Cidade"
                className="col-span-1 w-[290px]"
                {...register('city')}
                error={errors.city?.message}
            />

            <Input
                placeholder="UF"
                className="col-span-1 w-[3.75rem]"
                {...register('state')}
                error={errors.state?.message}
            />
        </div>
    )
}

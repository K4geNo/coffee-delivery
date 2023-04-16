import { useCallback, useEffect, useState } from 'react'

import { Coffee } from '@/components/CoffeeCard'
import { ConfirmOrderData } from '@/schemas/confirm-order'
import { createContext } from 'use-context-selector'
import produce from 'immer'

export interface CartItem extends Coffee {
    quantity: number
}

interface CartContextData {
    cartItems: CartItem[]
    setCartItems: (cart: CartItem[]) => void
    addToCart: (coffee: CartItem) => void
    changeProductQuantity: (id: number, type: 'increase' | 'decrease') => void
    removeProductFromCart: (id: number) => void
    userAddress: ConfirmOrderData
    setUserAddress: (address: ConfirmOrderData) => void
    cartLength: number
    cartItemsTotal: number
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

interface CartProviderProps {
    children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const cart = localStorage.getItem('@Cart')

            if (cart) {
                return JSON.parse(cart)
            }
        }

        return []
    })

    const [userAddress, setUserAddress] = useState<ConfirmOrderData>(
        {} as ConfirmOrderData
    )

    const cartLength = cartItems.length

    const cartItemsTotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const addToCart = useCallback(
        (coffee: CartItem) => {
            const coffeeAlreadyInCart = cartItems.findIndex(
                (item) => item.id === coffee.id
            )

            const updatedCart = produce(cartItems, (draft) => {
                if (coffeeAlreadyInCart < 0) {
                    draft.push(coffee)
                } else {
                    draft[coffeeAlreadyInCart].quantity += coffee.quantity
                }
            })

            setCartItems(updatedCart)
        },
        [cartItems]
    )

    const changeProductQuantity = useCallback(
        (id: number, type: 'increase' | 'decrease') => {
            const updatedCart = produce(cartItems, (draft) => {
                const coffeeExistsInCart = cartItems.findIndex(
                    (item) => item.id === id
                )

                if (coffeeExistsInCart >= 0) {
                    const item = draft[coffeeExistsInCart]

                    const newQuantity =
                        type === 'increase'
                            ? item.quantity + 1
                            : item.quantity - 1

                    // Verifica se o item correto no carrinho será atualizado
                    const updatedItem = {
                        ...item,
                        quantity: newQuantity,
                    }

                    draft[coffeeExistsInCart] = updatedItem
                }
            })

            setCartItems(updatedCart)
        },
        [cartItems]
    )

    const removeProductFromCart = useCallback(
        (id: number) => {
            const updatedCart = produce(cartItems, (draft) => {
                const coffeeExistsInCart = cartItems.findIndex(
                    (item) => item.id === id
                )

                if (coffeeExistsInCart >= 0) {
                    draft.splice(coffeeExistsInCart, 1)
                }
            })

            setCartItems(updatedCart)
        },
        [cartItems]
    )

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('@Cart', JSON.stringify(cartItems))
        }
    }, [cartItems])

    const cartContextValue: CartContextData = {
        cartItems,
        setCartItems,
        addToCart,
        changeProductQuantity,
        removeProductFromCart,
        userAddress,
        setUserAddress,
        cartLength,
        cartItemsTotal,
    }

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    )
}

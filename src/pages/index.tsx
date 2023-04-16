import { AnimatePresence, motion } from 'framer-motion'

import { CoffeeCard } from '@/components/CoffeeCard'
import Image from 'next/image'
import { InfoIcons } from '@/components/InfoIcons'
import { baloo } from '@/fonts'
import coffeeBg from '@/assets/imagem.png'
import { coffees } from '@/data/coffees'
import { icons } from '@/data/icons'

export default function Home() {
    return (
        <>
            <section className="w-full bg-coffee-bg bg-cover bg-center bg-no-repeat py-24">
                <div className="mx-auto flex w-full max-w-[70rem] flex-col">
                    <div className="flex items-center justify-between gap-14">
                        <div className="flex flex-col">
                            <strong
                                className={`${baloo.className} text-5xl text-base-title`}
                            >
                                Encontre o café perfeito para qualquer hora do
                                dia
                            </strong>

                            <p className="pt-4 text-xl text-base-subtitle">
                                Com o Coffee Delivery você recebe seu café onde
                                estiver, a qualquer hora
                            </p>

                            <div className="grid grid-cols-2 gap-y-5 pt-16">
                                {icons.map((item) => (
                                    <InfoIcons
                                        key={item.id}
                                        icon={item.icon}
                                        text={item.text}
                                        iconBg={item.iconBg}
                                    />
                                ))}
                            </div>
                        </div>

                        <Image src={coffeeBg} alt="" quality={70} />
                    </div>
                </div>
            </section>

            <section className="mx-auto flex w-full max-w-[70rem] flex-col pb-36">
                <span
                    className={`${baloo.className} py-8 text-3xl font-extrabold text-base-subtitle`}
                >
                    Nossos cafés
                </span>

                <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                    <AnimatePresence>
                        {coffees.map((coffee) => (
                            <motion.div
                                key={coffee.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: coffee.id * 0.2,
                                    duration: 0.5,
                                }}
                                className="col-span-1"
                            >
                                <CoffeeCard key={coffee.id} coffee={coffee} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </>
    )
}

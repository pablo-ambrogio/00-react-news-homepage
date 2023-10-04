import retro from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

import { Product } from './Product'

export const SectionProduct = () => {
    return (
        <section className='flex flex-col gap-8 mt-16 pb-16'>
            <Product title="Reviving Retro PCs" text="What happens when old PCs are given modern upgrades?" number="01" img={retro}/>
            <Product title="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets." number="02" img={laptop}/>
            <Product title="The Growth of Gaming" text="
How the pandemic has sparked fresh opportunities." number="03" img={gaming}/>
        </section>
    )
}











import { AsideCardText } from './AsideCardText'

export const Aside = () => {
    return (
        <aside className="bg-[#3E52A3] p-4 md:w-[40%]">
            <h2 className="text-yellow-300 font-semibold text-[2rem] mb-6">New</h2>
            <section className='[&>*:nth-child(2)]:border-y-2 [&>*:nth-child(2)]:py-8 grid gap-8'>
                <AsideCardText title="Hydrogen VS Electric Cars" text="Will hydrogen-fueled cars ever catch up to EVs?" />
                <AsideCardText title="The Downsides of AI Artistry" text="What are the possible adverse effects of on-demand AI image generation?" />
                <AsideCardText title="Is VC Funding Drying Up?" text="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
            </section>
        </aside>
    )
}
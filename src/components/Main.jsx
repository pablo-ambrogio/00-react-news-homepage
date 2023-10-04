import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'
import { Aside } from '../components/Aside'

export const Main = () => {
    return (
        <section className='mt-8 md:flex md:justify-between md:gap-6 lg:max-w-[90rem] lg:mx-auto'>
            <main className='mb-8 md:mb-0md:w-[60%]'>
                <picture>
                    {/* <source media='(max-width: 640px)' srcSet={imgMobile} /> */}
                    <source media='(min-width: 641px)' srcSet={imgDesktop} />
                    <img src={imgMobile} alt="Articulo principal" />
                </picture>
                <section className='md:flex md:justify-between md:gap-4 md:pt-8'>
                    <div className='md:w-[50%]'>
                        <h1
                            className='py-6 text-[2.5rem] lg:text-[3rem] leading-none font-bold opacity-90
                    md:w-[15rem] lg:w-[80%]  sm:py-0'>
                            The Bright Future of Web 3.0?
                        </h1>
                    </div>
                    <div className='md:w-[50%]'>
                        <p className='opacity-70'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button className='bg-red-400 text-white uppercase mt-6 font-bold tracking-[.2em] px-8 py-3'>read more</button>
                    </div>
                </section>
            </main>
            <Aside />
        </section>

    )
}
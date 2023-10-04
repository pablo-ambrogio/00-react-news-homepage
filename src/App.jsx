import { Header } from './components/Header'
import { Main } from './components/Main'
import { SectionProduct } from './components/SectionProduct'
import { StateCompo } from './components/context/StateCompo'

function App() {

  return (
    <StateCompo>
      <section className='p-4 m-auto w-full lg:max-w-[90rem]'>
        <Header />
        <Main />
        <SectionProduct />
      </section>
    </StateCompo>
  )
}

export default App

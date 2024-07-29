import Image from 'next/image';

export default function Mmclean () {
    return (
        <>
          <div className="py-28">
            <div className='max-w-[800px] mx-auto'>
              <h1 className="text-4xl text-center mb-6">MMClean - Produtos automotivos</h1>
              <p className="text-xl">A MMClean é uma loja que vende produtos automotivos de alta qualidade. O e-commerce foi desenvolvido com WordPress + WooCommerce + tema e plugins personalizados.</p>
            </div>
            <div className='grid place-content-center mt-12'>
              <Image src="/images/mmclean-mock.jpeg" className='py-5' alt="MMClean Mock" width={1200} height={900} />
              <Image src="/images/mmclean-mobile-mock.jpeg" className='py-5' alt="MMClean Mock Mobile" width={1200} height={900} />
              <Image src="/images/mmclean-mock-home-desktop.jpg" className='py-5' alt="MMClean mock Home Desktop" width={1200} height={3658} />
              <Image src="/images/perfomance-mmclean.png" className='py-5' alt="Performance MMClean" width={1137} height={684} />
            </div>
          </div>  
        </>
    )
}
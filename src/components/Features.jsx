import React from 'react'

const Features = () => {
  return (
    <div className='container mx-auto mt-24 flex flex-col items-center'>
        <div className='text-center'>
            <h3 className='text-blue-500 text-lg font-bold'>Features</h3>
            <h1 className='text-5xl font-semibold'>Main Featurea of Play</h1>
            <p className='mt-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima animi a adipisci ratione accusamus veritatis.</p>
        </div>
        <div className='flex gap-20 mt-10'>
            <div>
                <img src="" alt="" />
                <h1 className='text-xl font-bold'>Premium Property Listings</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className='hover:text-blue-500 cursor-pointer'>learn more...</button>
            </div>
            <div>
                <img src="" alt="" />
                <h1 className='text-xl font-bold'>Personalized Property Matching</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button>learn more...</button>
            </div>
            <div>
                <img src="" alt="" />
                <h1 className='text-xl font-bold'>Expert Guidance and Suppot</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button>learn more...</button>
            </div>
            <div>
                <img src="" alt="" />
                <h1 className='text-xl font-bold'>Virtual Tours</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button>learn more...</button>
            </div>
            
        </div>
    </div>
  )
}

export default Features
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Lucia = () => {

    useGSAP(()=>{
        gsap.set('.lucia-life',{marginTop: '-100vh'});

        gsap.timeline({
            scrollTrigger:{
                trigger: '.lucia-life',
                start: 'top 90%',
                end: '60% center',
                scrub: 2,
                markers: true,
            }
        }).to('.second-vd', {opacity: 0, duration: 1, ease: 'power1.inOut'})
    })

  return (
      <section className='lucia-life'>
        
        <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
            <div className="lucia-1">
                 <img src='/images/lucia-1.webp'/>
            </div>
            <div className="jason-3">
                 <img src='/images/lucia-3.webp'/>
            </div>
        </div>

        <div className="lg:1/2 lucia-life-content">
        <div className="max-w-lg lg:ps-32 ps-10"></div>
            <h1>Lucia Caminos</h1>
            <h2>Lucia’s father taught her to fight as soon as she could walk.</h2>
            <p className='max-w-xl lg:ps-32 ps-10'>Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia’s learned her lesson — only smart moves from here.
            </p>

            <div className="lucia-2">
                <img src='/images/lucia-2.webp'/>
            </div>
        </div>

    </section>
  )
}

export default Lucia
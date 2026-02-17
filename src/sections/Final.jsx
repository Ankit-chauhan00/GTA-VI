import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Final = () => {
    const vedioRef = useRef(null)

    useGSAP(()=>{
        gsap.set('.final-content',{opacity: 0 });

        gsap.timeline({
            scrollTrigger:{
                trigger: '.final',
                start: 'top top',
                end: "90% top",
                scrub: true,
                markers: false,
            }
        })

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.final',
                start: '10% 80%',
                end: '70% center',
                scrub: true,
                markers: true,
            }
        })
        tl.to('.final-content',{opacity: 1, duration: 1, scale: 1, eaee: 'power1.inOut'});

        vedioRef.current.onloadedmetadata = ()=>{
            tl.to(vedioRef.current,{
                currentTime: vedioRef.current.duration,
                duration: 3,
                ease: 'power2.inOut'
            },'<')
        }
    });

  return (
     <section className="final">
        <div className="final-content size-full">
            <video
            ref={vedioRef}
            muted
            playsInline
            preload="auto"
            src="/videos/output3.mp4"
            className="size-full object-cover"
            />
        </div>
    </section>
  )
}

export default Final
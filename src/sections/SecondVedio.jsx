import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

const SecondVedio = () => {

    const vedioRef = useRef(null);

    useGSAP(()=>{
        gsap.set('.lucia',{
            marginTop: '-60vh',
            opacity: 0,
        })

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.lucia',
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
                pin: true,

            }
        })

        tl.to('.lucia',{
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
        })

        vedioRef.current.onloadedmetadata = ()=>{
            tl.to(vedioRef.current,{
                currentTime: vedioRef.current.duration,
                duration: 3,
                ease: 'power3.inOut'
            },'<')
        }
    })

  return (
     <section className="lucia">
        <div className="h-dvh">
            <video
            ref={vedioRef}
            muted
            playsInline
            preload="auto"
            src="/videos/output2.mp4"
            className="size-full object-cover second-vd"
            style={{objectPosition: '15% 0%' }}
            />
        </div>
    </section>
  )
}

export default SecondVedio
import emily from '../../images/image-emily.jpg'
import jennie from '../../images/image-jennie.jpg'
import thomas from '../../images/image-thomas.jpg'

import desktop_egg from '../../images/desktop/image-transform.jpg'
import desktop_stand_out from '../../images/desktop/image-stand-out.jpg'
import desktop_graphic_design from '../../images/desktop/image-graphic-design.jpg'
import desktop_photography from '../../images/desktop/image-photography.jpg'
import desktop_milkbottles from '../../images/desktop/image-gallery-milkbottles.jpg'
import desktop_orange from '../../images/desktop/image-gallery-orange.jpg'
import desktop_cone from '../../images/desktop/image-gallery-cone.jpg'
import desktop_sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg'

import mobile_egg from '../../images/mobile/image-transform.jpg'
import mobile_stand_out from '../../images/mobile/image-stand-out.jpg'
import mobile_graphic_design from '../../images/mobile/image-graphic-design.jpg'
import mobile_photography from '../../images/mobile/image-photography.jpg'
import mobile_milkbottles from '../../images/mobile/image-gallery-milkbottles.jpg'
import mobile_orange from '../../images/mobile/image-gallery-orange.jpg'
import mobile_cone from '../../images/mobile/image-gallery-cone.jpg'
import mobile_sugarcubes from '../../images/mobile/image-gallery-sugar-cubes.jpg'


function Card() {
  return (
    <>
    <section className="card-group">
        
        <article className='card-info order-2 lg:order-1'>
            <h2>Transform your brand</h2>
            <blockquote>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</blockquote>
            <a href="#" className='underline'>Learn more</a>
        </article>

        <picture className='card-image order-1 lg:order-2'>
            <source srcSet={mobile_egg} media="(max-width: 375px)" type="image/jpg" />
            <img src={desktop_egg} alt="egg" />
        </picture>
        
        <picture className='card-image order-3'>
            <source srcSet={mobile_stand_out} media="(max-width: 375px)" type="image/jpg" />
            <img src={desktop_stand_out} alt="egg" />
        </picture>

        <article className='card-info order-4'>
            <h2>Stand out to the right audience</h2>
            <blockquote>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </blockquote>
            <a href="#" className='underline underline-soft-red'>Learn more</a>
        </article>

        <picture className='card-image relative order-5'>
            <source srcSet={mobile_graphic_design} media="(max-width: 375px)" type="image/jpg" />
            <img src={desktop_graphic_design} alt="egg" />

            <section className='w-full absolute bottom-24 lg:bottom-10 p-5 text-center space-y-4'>
                <h3>Graphic design</h3>
                <blockquote>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</blockquote>
            </section>
            
        </picture>

        <picture className='card-image relative order-5'>
            <source srcSet={mobile_photography} media="(max-width: 375px)" type="image/jpg" />
            <img src={desktop_photography} alt="egg" /> 
            <section className='w-full absolute bottom-24 lg:bottom-14 p-5 text-center space-y-4'>
                <h3>Photography</h3>
                <blockquote>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</blockquote>
            </section>               
        </picture>

        <article className="order-6 col-span-4 grid grid-cols-1 lg:grid-cols-3">
            <h2 className="lg:col-span-3 text-center p-16 font-fraunces text-2xl text-dark-grayish-blue lg:mt-10">Client testimonials</h2>
            <section className="testimonials">
                <img src={emily} alt="Emily R." />
                <blockquote className="text-center text-dark-grayish-blue font-semibold">
                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </blockquote>
                <article className='text-center'>
                    <h3>Emily R.</h3>
                    <h4 className='text-sm text-grayish-blue'>Marketing Director</h4>
                </article>
            </section>
            <section className="testimonials">
                <img src={thomas} alt="Thomas S." />
                <blockquote className="text-center text-dark-grayish-blue font-semibold">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                </blockquote>
                <article className='text-center'>
                    <h3>Thomas S.</h3>
                    <h4 className='text-sm text-grayish-blue'>Chief Operating Officer</h4>
                </article>
            </section>
            <section className="testimonials">
                <img src={jennie} alt="Jennie F." />
                <blockquote className="text-center text-dark-grayish-blue font-semibold">
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </blockquote>
                <article className='text-center'>
                    <h3>Jennie F.</h3>
                    <h4 className='text-sm text-grayish-blue'>Business Owner</h4>
                </article>
            </section>
        </article>

        <article className='order-7 col-span-4 grid grid-cols-2 lg:grid-cols-4 lg:mt-24'>
            <picture>
                <source srcSet={mobile_milkbottles} media="(max-width: 375px)" type="image/jpg" />
                <img src={desktop_milkbottles} alt="egg" />
            </picture>
            
            <picture>
                <source srcSet={mobile_orange} media="(max-width: 375px)" type="image/jpg" />
                <img src={desktop_orange} alt="egg" />
            </picture>

            <picture>
                <source srcSet={mobile_cone} media="(max-width: 375px)" type="image/jpg" />
                <img src={desktop_cone} alt="egg" />
            </picture>

            <picture>
                <source srcSet={mobile_sugarcubes} media="(max-width: 375px)" type="image/jpg" />
                <img src={desktop_sugarcubes} alt="egg" />
            </picture>
        </article>
    </section>
    </>
  )
}

export default Card
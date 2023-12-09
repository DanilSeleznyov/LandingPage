import Testimonial from './Testimonial';
import userPhoto1 from "../img/Image (15).png";
import userPhoto2 from "../img/Image (16).png";
import userPhoto3 from "../img/Image (17).png";

function Testimonials() {

    const testimonialInfo = [
        {
            stars: 5,
            text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
            userImg: userPhoto1,
            userName: 'Serhiy Hipskyy',
            userState: 'CEO Universal',
        },
        {
            stars: 5,
            text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
            userImg: userPhoto2,
            userName: 'Justus Menke',
            userState: 'CEO Eronaman',
        },
        {
            stars: 5,
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
            userImg: userPhoto3,
            userName: 'Britain Eriksen',
            userState: 'CEO Universal',
        },
    ]

    return (
        <div className='testimonials'>
            <div className='container testimonials_container'>
                <h2>Testimonials</h2>
                <div className='testimonials_main'>
                    {testimonialInfo.map((el, id) =>(
                        <Testimonial key={id} el={el}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
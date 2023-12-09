import stars from '../img/Shape.svg'


function Testimonial({id, el}) {
    return (
        <div className="testimonial">
            <div className="stars">
                <img src={stars} alt="" />
            </div>
            <div className="desc">
                {el.text}
            </div>
            <div className="author">
                <img src={el.userImg} alt="" />
                <div className='author_info'>
                    <h4>{el.userName}</h4>
                    <p>{el.userState}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
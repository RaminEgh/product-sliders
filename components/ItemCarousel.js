import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "./Icons/Arrow/Arrow";

function NextArrow(props) {
    return (<div className='carousel-arrow right'>
                <style jsx global>
                    {`
                  .carousel-arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 50%;
                    border-radius: .8rem;
                    transform: translate(0, -50%);
                    z-index: 99;
                    opacity: 0.7;
                    transition: all .2s;
                    background-color: white;
                    height: 80px;
                    width: 40px;
                  }
                  .carousel-arrow.right {
                    right: 1.6rem;
                  }
                  .carousel-arrow.left {
                    left: 1.6rem;
                  }
                  .carousel-arrow:hover {
                    opacity: 1;
                    transition: all .2s;
                  }
                `}
                </style>
                <Arrow onClick={props.onClick} dir='right' size={9}/>
            </div>);
}

function PrevArrow(props) {
    return (<div className='carousel-arrow left'>
                <Arrow onClick={props.onClick} dir='left' size={9}/>
            </div>);
}

const ItemCarousel = ({items}) => {
    const settings = {
        rtl: true,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return <Slider {...settings}>{ items }</Slider>;
};

export default ItemCarousel;



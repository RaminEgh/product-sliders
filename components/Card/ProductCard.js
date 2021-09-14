import Image from "../Image/Image";
import Chip from "../Chip/Chip";
import StarRate from "../Product/StarRate";
import Price from "../Product/Price";

const ProductCard = ({item}) => {
    return (
            <div className='card'>
                <Image alt={item.title} src={item.imageUrl} height={320} width={420}/>
                <div className="content">
                    <h2>{item.title}</h2>
                    <div className='chip-star-container'>
                        <Chip text={`%${item.discountPercent}`}/>
                        <StarRate rate={item.NumberOfStarts}/>
                    </div>
                    <div className='price'>
                        <Price price={item.price} discount={item.discountPercent}/>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;
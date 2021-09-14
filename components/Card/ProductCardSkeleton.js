import Image from "../Image/Image";

const ProductCardSkeleton = () => {
    return (
        <div className='card'>
            <Image alt="site.com" src='/' height={320} width={420}/>
            <h2 className='skeleton-loader' style={{height: '28px', marginBottom: 16, width: '70%'}}/>
            <div className='skeleton-loader'  style={{height: '18px', marginBottom: 8}}/>
            <div className='skeleton-loader' style={{height: '24px', width: '60%', marginRight: 'auto'}}/>
        </div>
    );
};

export default ProductCardSkeleton;
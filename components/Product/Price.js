import {addSeparatorToPrice, calculateFinalPrice} from "../../helpers";

const Price = ({price, discount}) => {
    return (
        <>
            <h3>
                <small>تومان&nbsp;</small>
                <span>{`${addSeparatorToPrice(calculateFinalPrice(price, discount))}`}</span>
            </h3>
            {discount ?  <h4><del>{addSeparatorToPrice(price)}</del> </h4> : ''}
        </>
    );
};

export default Price;
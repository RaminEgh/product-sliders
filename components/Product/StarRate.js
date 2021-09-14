import Star from "../Icons/Star/Star";
import {colors} from "../../themes/theme";

const StarRate = ({rate}) => {

    return (
        <span className='center star'>
            <style jsx>
            {`
              .star .rate {
                padding: 2px;
                color: ${colors.lighterTextColor};
                font-size: 1.3rem;
              }
            `}
        </style>
           <span className='rate'>{rate}</span> <Star/>
        </span>
    );
};

export default StarRate;
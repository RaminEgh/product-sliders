import {colors} from "../../themes/theme";


const Chip = ({text, children}) => {
    return (
        <span className='chip'>
            <style jsx global>
                {`
                  .chip {
                    background-color: ${colors.primaryColor};
                    border-radius: 6px;
                    min-width: 34px;
                    max-width: 40px;
                    padding: 4px 8px;
                    color: ${colors.onPrimaryColor};
                    font-weight: 300;
                    font-size: 1.2rem;
                  }
                `}
            </style>
            {text ?? children}
        </span>
    );
};

export default Chip;
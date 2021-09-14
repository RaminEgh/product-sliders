import {colors} from "../../../themes/theme";

const Star = ({size = 8, color}) => {
    return (
        <>
            <style jsx>
                {`
                  .star-icon {
                    position: relative;
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 0.9em;
                    margin-right: 0.9em;
                    margin-bottom: 1.2em;
                    border-right: 0.3em solid transparent;
                    border-bottom: 0.7em solid ${colors.primaryColor ?? color};
                    border-left: 0.3em solid transparent;
                    font-size: ${size}px;
                  }

                  .star-icon:before, .star-icon:after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 0.6em;
                    left: -1em;
                    border-right: 1em solid transparent;
                    border-bottom: 0.7em solid ${colors.primaryColor ?? color};
                    border-left: 1em solid transparent;
                    transform: rotate(-35deg);
                  }

                  .star-icon:after {
                    transform: rotate(35deg);
                  }
                `}
            </style>
            <i className='star-icon'/>
        </>
    );
};

export default Star;
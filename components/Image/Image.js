import {useState} from "react";
import NextImage from 'next/image';

const Image = props => {
    const [loading, setLoading] = useState(true);

    return (
        <NextImage {...props} className={loading ? 'skeleton-loader' : ''}
               onLoadingComplete={() => setLoading(false)}/>
    );
};

export default Image;
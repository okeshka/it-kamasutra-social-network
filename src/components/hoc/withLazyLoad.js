import React, {Suspense} from 'react';
import Preloader from '../common/Preloader/Preloader';

const withLazyLoad = Component => {
    return (props) => (
    <Suspense fallback = {<Preloader />} >
        <Component {...props}/>
    </Suspense>
    )}

export default withLazyLoad;
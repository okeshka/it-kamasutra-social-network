import React, {Suspense} from 'react';

const withLazyLoad = Component => {
    return (props) => (
    <Suspense fallback = {<div>Loading.....</div>} {...props}>
        <Component />
    </Suspense>
    )}

export default withLazyLoad;
import React from 'react';

const Loading = () =>(
    <div className="d-flex align-items-center justify-content-center p-3">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
    </div>
);

export default Loading;
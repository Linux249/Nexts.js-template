import React from 'react';
import Index from './index';
import '../css/index.scss';

function Error({ statusCode }) {
    function getResponse(statusCode) {
        switch (statusCode) {
            case 404:
                console.log('Rendering home');
                return <Index />;

            case 500:
                return <p>An error occurred on the server</p>;

            default:
                return <p>An error occurred on client</p>;
        }
    }

    return <div>{getResponse(statusCode)}</div>;
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;

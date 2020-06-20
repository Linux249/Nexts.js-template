import React, { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../utils/analytics';
import Head from 'next/head';

export function MyApp(props) {
    useEffect(() => {
        initGA();
        logPageView();

        if (Router.router) {
            Router.router.events.on('routeChangeComplete', logPageView);
        }
    }, []);

    const { Component, pageProps } = props;
    return (
        <>
            <Head>
                <title>Title for every page</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="description" content="content" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

import React from 'react';
import Layout from './src/components/Layout';

// pass Layout comp to every page
export function wrapPageElement({ element, props }) {
return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
    return <OrderProvider>{element}</OrderProvider>
}
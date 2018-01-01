import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h3>Opps.. the world is ending now</h3>
};

export default {
    component: NotFoundPage
}
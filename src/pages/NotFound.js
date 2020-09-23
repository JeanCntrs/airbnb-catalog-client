import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Error from '../components/Error';

const NotFount = () => {
    return (
        <MainLayout pageTitle="Not Found">
            <Error code='404' />
        </MainLayout>
    );
}

export default NotFount;
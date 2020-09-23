import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import ItemList from '../components/items/ItemList';

const Catalogue = () => {
    return (
        <MainLayout pageTitle="Lodgings">
            <ItemList />
        </MainLayout>
    );
}

export default Catalogue;
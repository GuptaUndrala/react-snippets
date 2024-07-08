import React, { useState } from 'react';
import CardItem from '../card-item/CardItem';
import './Cards.css';

const items = [
    {
        imgUrl: 'https://placehold.co/300x200',
        title: 'Product 01',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 999,
        cta: 'Add to card'
    },
    {
        imgUrl: 'https://placehold.co/300x200',
        title: 'Product 02',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 1999,
        cta: 'Add to card'
    },
    {
        imgUrl: 'https://placehold.co/300x200',
        title: 'Product 03',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 1399,
        cta: 'Add to card'
    },
    {
        imgUrl: 'https://placehold.co/300x200',
        title: 'Product 04',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 1299,
        cta: 'Add to card'
    },
];

function Cards() {
    const [cardItems, setCardItems] = useState(items);
    const filterPrices = [
        {
            minPrice : 0,
            maxPrice : 999
        },
        {
            minPrice : 1000,
            maxPrice : 1499
        },
        {
            minPrice : 1500,
            maxPrice : 2000
        }
    ]

    function handleFilters(minPrice, maxPrice){
        const filterdItems = items.filter((obj) => {
            if(obj.price >= minPrice && obj.price <= maxPrice){
                return obj;                
            }                       
        })
        setCardItems(filterdItems);
    }

    function handleViewAll(){
        setCardItems(items);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-3 text-center'>
                    <h3>List of objects in the array</h3>
                </div>

                <ul className='filter-list'>
                    <li>Price Filter:</li>
                    {filterPrices.map((price, index) => (
                        <li key={index} onClick={() => handleFilters(price.minPrice, price.maxPrice)}><strong>{price.minPrice} - {price.maxPrice}</strong></li>
                    ))}
                    <li onClick={handleViewAll}><strong>View all</strong></li>
                </ul>

                {cardItems.map((item, index) => (
                    <div className='col-3' key={index}>
                        <CardItem imgUrl={item.imgUrl} title={item.title} description={item.description} price={item.price} cta={item.cta} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
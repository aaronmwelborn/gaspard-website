import React, {Component} from 'react';
import table from '../resources/table.jpg'
import painting from '../resources/painting.jpg'

export class ProductSection extends Component {
    render () {
        return (
            <div className="products">
                <div className="product-row">
                    <img src={table} className="product-table" alt="Table" />
                    <img src={painting} className="product-painting" alt="Painting" />
                </div>
            </div>
        );
    }
}
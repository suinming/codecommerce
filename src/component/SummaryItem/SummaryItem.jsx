import React from 'react'
import './SummaryItem.css'

class SummaryItem extends React.Component{
    render(){
        const {product, index} = this.props
        const img = `/codecommerce/img/${product.item.categories}/${product.item.name}.jpg`
        return(
            <div className='summaryItem' key={'item-' + index}>
                <div className='imgWrapper'>
                    <img src={img} alt="product" />
                </div>
                <div className="itemInfo">
                    <h6>{product.name}</h6>
                    <div> <span className='boldTitle'>QUANTITY <br /> </span>{product.quantity}</div>
                    <div> <span className='boldTitle'>PRICE <br /> </span>{product.price}</div>
                </div>
            </div>
        )
    }
}

export default SummaryItem
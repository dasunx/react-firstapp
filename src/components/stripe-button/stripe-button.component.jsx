import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { clearCartAfterPayment } from '../../redux/cart/cart.actions'


const StripeCheckoutButton = ({ price, clearCartFn }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_sMjTzojPCWnXbl37YpvqoyIP00DvF0CNbv';

    const onToken = token => {
        console.log(token);
              
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='KAYA Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={clearCartFn}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartFn: () => dispatch(clearCartAfterPayment())
})


export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
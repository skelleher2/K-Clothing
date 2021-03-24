import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51IXtjKDjOYsj8idyu5KuYtJxM4OejpZDSl1O4PQeyve0XUGpyvKDhwVLJFlGwWGiVlsA92taCXoSfLT9uup6js7m00bXCkel46'

const onToken = token => {
   console.log(token);
   alert('Payment Succesful');
};

   return (
      <StripeCheckout
            label='Pay Now'
            name='K Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/VLH.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;
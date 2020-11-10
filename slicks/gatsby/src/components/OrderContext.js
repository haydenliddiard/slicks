import React, { useState } from 'react';

// create an order context
const OrderContext = React.createContext();
// creates a context that accepts children for anything its providing for
// the context is for the useState order
export function OrderProvider({ children }) {
    // we need to stick state in here
    const [order, setOrder] = useState([]);
    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContext;
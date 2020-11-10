import { useState, useContext }  from 'react';
import OrderContext from '../components/OrderContext';

// passed into order.js
export default function usePizza({ pizzas, inputs }) {
    // 1. create some state to hold our order
    // useState moved up to the orderContext
    // const [order, setOrder] = useState([]);
    // now we access both our state and our updater function(setOrder) via context
    const [order, setOrder] = useContext(OrderContext);
    // 2. Make a function add things to order
    function addToOrder(orderedPizza) {
        // ordered = pizza.id, pizza.size
        // spread order into array with orderesPizza
        setOrder([...order, orderedPizza]);
        // console.log(orderedPizza);
    }
    //  3. Make a function remove things from order
    function removeFromOrder(index) {
        setOrder([
            // everthing before the item we want to remove
            ...order.slice(0, index),
            // everything after
            ...order.slice(index + 1 ),
        ]);
    }
    // 4. send this data the a serverless function when they check out
    // TODO

    return {
        order,
        addToOrder,
        removeFromOrder,
    };
}
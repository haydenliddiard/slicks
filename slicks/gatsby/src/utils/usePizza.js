import { useState }  from 'react';
// passed into order.js
export default function usePizza({ pizzas, inputs }) {
    // 1. create some state to hold our order
    const [order, setOrder] = useState([]);
    // 2. Make a function add things to order
    // ordered pizza is pizza.id, pizza size
    function addToOrder(orderedPizza) {
        console.log(orderedPizza);
        setOrder([...order,
            orderedPizza]);
        }
        // 3. Make a function remove things from order
        function removeFromOrder(index) {
            console.log('removing pizza order');
        setOrder([
            // everything before
            ...order.slice(0, index),
            // everything after
            ...order.slice(index + 1),
        ])
    }
    // 4. send this data the a serverless function when they check out
    // TODO

    return {
        order,
        addToOrder,
        removeFromOrder,
    };
}
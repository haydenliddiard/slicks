import { useState, useContext }  from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';

// passed into order.js
export default function usePizza({ pizzas, values }) {
    // 1. create some state to hold our order
    // useState moved up to the orderContext
    // const [order, setOrder] = useState([]);
    // now we access both our state and our updater function(setOrder) via context
    const [order, setOrder] = useContext(OrderContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
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

    // runs when the form is submited
    async function submitOrder(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);
        // gather all the data
        const body = {
            order: attachNamesAndPrices(order, pizzas),
            total: formatMoney(calculateOrderTotal(order, pizzas)),
            name: values.name,
            email: values.email,
        }
        
        // 4. send this data the a serverless function when they check out
        // TODO
        const res = fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const text = JSON.parse(await (await res).text());

        // check if everything worked
        if(res.status >= 400 && res.status < 600) {
            // turn off loading
          setLoading(false);  
          setError(text.message);
        } else {
            // it worked
            setLoading(true);
            setMessage('Success! Come on down for your order');
        }
    }
    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder,
    };
}
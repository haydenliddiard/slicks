import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
    return order.reduce((runningTotal, singleOrder) => {
        const pizza = pizzas.find(
            // find first pizza where singlePizza.id = single order.id
            (singlePizza) => singlePizza.id === singleOrder.id
        );
        console.log(`${pizza.name} prizza price ${pizza.price} single order size ${singleOrder.size}`)
        return runningTotal + calculatePizzaPrice
        (pizza.price, singleOrder.size);
        // 0 is initial value
    }, 0);
}
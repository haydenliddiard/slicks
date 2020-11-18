import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from "./formatMoney";
// attach names and prices for emails
export default function attachNamesAndPrices(order, pizzas) {
    return order.map(item => {
        const pizza = pizzas.find(pizza => pizza.id === item.id);
        return {
            ...item,
            name: pizza.name,
            thumbnail: pizza.image.asset.fluid.src,
            price: formatMoney(calculatePizzaPrice(pizza.price, item.size)),
        }
    })
}
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        .count {
            background: white;
            padding: 2px 5px;
        }
        .active {
            background: var(--yellow);
        }
    }
`;

function countPizzasInToppings(pizzas) {
    // Return the pizzas with counts
    const counts = pizzas
    .map(pizza => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
        // check if its an existing topping
        const existingTopping = acc[topping.id];
        if(existingTopping) {
            console.log('Existing Topping', existingTopping.name);
            // if it exists incriment by 1
            existingTopping.count += 1;
        }
        else {
            // otherwise add a new entry
            console.log('New Topping', topping.name);
            acc[topping.id] = {
                id: topping.id,
                name: topping.name,
                count: 1,
            }
        }
            return acc;
    }, {});
    // sort them based on their count
    const sortedToppings = Object.values(counts).sort(
        (a, b) => b.count - a.count
        );
    return sortedToppings
}

export default function ToppingsFilter({ activeTopping }) {
    // get list of all the toppings
    // get list of all pissaz
    const { toppings, pizzas } = useStaticQuery(graphql`
        query {
           toppings: allSanityTopping {
               nodes {
                   name
                   id
                   vegetarian
               }
           }
           pizzas: allSanityPizza {
               nodes{
                   toppings {
                       name 
                       id
                   }
               }
           }
        }
    `);
    
    // count how many pizzas are in each topping
    const toppingsWithCount = countPizzasInToppings(pizzas.nodes);
    // console.log(toppingsWithCount)
    // loop over toppings and display toppings and the count of pizzas in that topping
    // link it up
    return (
        <ToppingStyles>
        <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
        </Link>
        {
        toppingsWithCount.map(topping => (
        <Link 
            to={`/topping/${topping.name}`} 
            key={topping.id}
            className={topping.name === activeTopping ? 'active' : ''}
        >
            <span  className='name' >{topping.name}</span>
            <span className="count">{topping.count}</span>
            </Link>
        ))}
    </ToppingStyles>
    )
}
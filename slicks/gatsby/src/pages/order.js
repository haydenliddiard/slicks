import React, {useState} from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import Img from 'gatsby-image';

export default function OrderPage({ data }) {
  const {values, updateValue } = useForm({
    name: "",
    email: "",
  });
  const pizzas = data.pizzas.nodes;
  return(
    <>
      <SEO title="Order a Pizza!" />
        <form>
          <fieldset>
            <legend>Your Info</legend>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            name="name"
            value={values.name} 
            onChange={updateValue}
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </fieldset>
          <fieldset>
            <legend>Menu</legend>
            {pizzas.map(pizza => (
              <div key={pizza.id}>
                <div>
                <h2>{pizza.name}</h2>
                <Img 
                width="50" 
                height="50" 
                fluid={pizza.image.asset.fluid}
                alt={pizza.name}
                >
                </Img>
                </div>
                <div>
                  {['S', 'M', 'L'].map(size => (
                    <button type="button">
                      {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>Order</legend>
          </fieldset>
        </form>
    </>
  )
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug { 
          current 
        }
        price
        image {
         asset {
           fluid(maxWidth: 100) {
             ...GatsbySanityImageFluid
           }
         } 
        }
      }
    }
  }
`;
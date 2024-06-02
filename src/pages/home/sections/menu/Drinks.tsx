import { Meal } from "./Meal"
import drink1 from "../../../../assets/drinks/negroni.png"
import drink2 from "../../../../assets/drinks/bellini.png"
import drink3 from "../../../../assets/drinks/campari.png"
import drink4 from "../../../../assets/drinks/coke.png"
import drink5 from "../../../../assets/drinks/margarita.png"
import drink6 from "../../../../assets/drinks/sangria.png"

export const drinks = [
    {
        name: "Negroni",
        img: drink1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },
    {
        name: "Bellini",
        img: drink2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.49"
    },
    {
        name: "Campari",
        img: drink3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$8.99"
    },
    {
        name: "Coke",
        img: drink4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$4.99"
    },
    {
        name: "Margarita",
        img: drink5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$5.75"
    },
    {
        name: "Sangria",
        img: drink6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$5.75"
    }
];

const Drinks = () => {
    return (
        <div>
            {drinks.map((drink, idx) => {
                return (
                    <Meal
                        key={idx}
                        name={drink.name}
                        img={drink.img}
                        description={drink.description}
                        rating={drink.rating}
                        price={drink.price}
                    />
                );
            })}
        </div>
    );
};

export { Drinks };
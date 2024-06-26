import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../design-system/button/Button";
import { Container, Content } from "../../../components";
import { PopularMenu, LunchMenu, DinnerMenu, Pizzas, Desserts, Drinks } from "./menus";

const MenuSectionContent = styled(Content)`
    /* padding-top: var(--space-120);
    padding-bottom: var(--space-120); */
`;

const MenuTitle = styled.h2`
    text-align: center;
    color: var(--dark-brown);
    margin-bottom: var(--space-80);
`;

const MenuFilters = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    gap: var(--space-30);
    margin-bottom: var(--space-80);
    overflow-x: auto;
    scrollbar-width: none;
`;

const menuTypes = [
    { name: "Popular", component: PopularMenu },
    { name: "Dinner", component: DinnerMenu },
    { name: "Lunch", component: LunchMenu },
    { name: "Pizza", component: Pizzas },
    { name: "Desserts", component: Desserts },
    { name: "Drinks", component: Drinks }
];

const Menu = () => {
    const [currentMenu, setCurrentMenu] = useState(0);

    const CurrentComponent = menuTypes[currentMenu].component;

    return (
        <Container id="menu-section">
            <MenuSectionContent>
                <MenuTitle className="heading-2">Our Popular Menu</MenuTitle>
                <MenuFilters>
                    {menuTypes.map((menu, idx) => {
                        return (
                            <Button
                                key={idx}
                                size="lg"
                                color={idx === currentMenu ? "black" : "gray"}
                                onClick={() => setCurrentMenu(idx)}
                            >
                                {menu.name}
                            </Button>
                        );
                    })}
                </MenuFilters>

                <CurrentComponent />
            </MenuSectionContent>
        </Container>
    );
};

export { Menu };

const menuItems = [
    // Signature Teas
    { name: "Dhum Tea", category: "Signature Teas", description: "Smoky kadak chai finished in clay pot dhum style.", price: "₹10" },
    { name: "Ginger Tea", category: "Signature Teas", description: "Strong milk tea simmered with fresh ginger shavings.", price: "₹20" },
    { name: "Bellam Tea", category: "Signature Teas", description: "Jaggery-sweetened chai with earthy caramel notes.", price: "₹20" },
    { name: "Elachi Tea", category: "Signature Teas", description: "Cardamom infused chai, fragrant and refreshing.", price: "₹20" },
    { name: "Ginger Bellam Tea", category: "Signature Teas", description: "Fresh ginger and jaggery chai with warm spice.", price: "₹20" },
    { name: "Black Pepper Tea", category: "Signature Teas", description: "Peppercorn-spiced chai for a bold kick.", price: "₹20" },
    { name: "Masala Tea", category: "Signature Teas", description: "House masala blend simmered slow for depth.", price: "₹20" },
    { name: "Paan Tea", category: "Signature Teas", description: "Unique paan-inspired chai with minty sweetness.", price: "₹20" },
    { name: "Black Tea", category: "Signature Teas", description: "Classic kadak black tea without milk.", price: "₹15" },
    { name: "Sugar Less Tea", category: "Signature Teas", description: "Robust chai brewed without sugar, customisable.", price: "₹15" },

    // Thickshakes
    { name: "Vanilla", category: "Thickshakes", description: "Creamy vanilla thickshake.", price: "₹149" },
    { name: "Strawberry", category: "Thickshakes", description: "Sweet strawberry thickshake.", price: "₹149" },
    { name: "Butter Scotch", category: "Thickshakes", description: "Rich butterscotch thickshake.", price: "₹149" },
    { name: "Oreo Chocolate", category: "Thickshakes", description: "Chocolate thickshake with Oreo crunch.", price: "₹159" },
    { name: "Oreo Vanilla", category: "Thickshakes", description: "Vanilla thickshake blended with Oreo.", price: "₹159" },
    { name: "Dry Fruit", category: "Thickshakes", description: "Thickshake loaded with roasted dry fruits.", price: "₹169" },
    { name: "Belgium Chocolate", category: "Thickshakes", description: "Decadent Belgian chocolate thickshake.", price: "₹169" },

    // Hot Milk
    { name: "Plain Milk", category: "Hot Milk", description: "Hot steamed milk served fresh.", price: "₹35" },
    { name: "Badam Milk", category: "Hot Milk", description: "Almond-saffron infused hot milk.", price: "₹45" },
    { name: "Coffee", category: "Hot Milk", description: "Classic filter coffee with frothy milk.", price: "₹40" },
    { name: "Black Coffee", category: "Hot Milk", description: "Strong decoction served without milk.", price: "₹30" },
    { name: "Boost", category: "Hot Milk", description: "Boost energy drink blended into hot milk.", price: "₹45" },
    { name: "Horlicks", category: "Hot Milk", description: "Malted Horlicks mix with hot milk.", price: "₹45" },
    { name: "Pepper Milk", category: "Hot Milk", description: "Comforting pepper-spiced hot milk.", price: "₹40" },
    { name: "Chocolate Tea", category: "Hot Milk", description: "Hot chocolate chai fusion.", price: "₹40" },

    // Lassis
    { name: "Sweet Lassi", category: "Lassi", description: "Classic sweet curd blend with malai.", price: "₹69" },
    { name: "Rose Lassi", category: "Lassi", description: "Rose syrup lassi topped with pistachio dust.", price: "₹79" },
    { name: "Mango Lassi", category: "Lassi", description: "Alphonso mango pulp blended with chilled lassi.", price: "₹79" },
    { name: "Dry Fruit Lassi", category: "Lassi", description: "Loaded with roasted dry fruits and saffron.", price: "₹89" },
    { name: "Rooh Afza Lassi", category: "Lassi", description: "Refreshing Rooh Afza twist on classic lassi.", price: "₹79" },

    // Wellness Teas
    { name: "Hibiscus Tea", category: "Wellness Teas", description: "Tangy hibiscus infusion full of antioxidants.", price: "₹20" },
    { name: "Lemon Tea", category: "Wellness Teas", description: "Zesty lemon tea served hot and refreshing.", price: "₹20" },
    { name: "Ginger Lemon Tea", category: "Wellness Teas", description: "Immune-boosting ginger and lemon infusion.", price: "₹15" },
    { name: "Green Tea", category: "Wellness Teas", description: "Classic green tea brewed light.", price: "₹15" }
,

    // Mocktails
    { name: "Lemon Mojito", category: "Mocktails", description: "Fresh lemon, mint, and soda fizz.", price: "₹109" },
    { name: "Virgin Mojito", category: "Mocktails", description: "Classic mint mojito without alcohol.", price: "₹119" },
    { name: "Blue Lagoon", category: "Mocktails", description: "Blue curacao inspired cooler.", price: "₹129" },
    { name: "Red Wine Cooler", category: "Mocktails", description: "Non-alcoholic red wine style spritzer.", price: "₹129" },
    { name: "Water Melon Cooler", category: "Mocktails", description: "Chilled watermelon crush with lime.", price: "₹109" },
    { name: "Orange Mojito", category: "Mocktails", description: "Minty orange cooler with soda.", price: "₹119" },

    // Veg Sandwiches
    { name: "Paneer Sandwich", category: "Veg Sandwiches", description: "Grilled paneer sandwich with masala filling.", price: "₹129" },
    { name: "Mushroom Sandwich", category: "Veg Sandwiches", description: "Sautéed mushroom and cheese sandwich.", price: "₹129" },
    { name: "Mexican Street Sandwich", category: "Veg Sandwiches", description: "Spiced bean mash, peppers, cheese, FWNT sauce.", price: "₹139" },
    { name: "Smoky BBQ Veg Sandwich", category: "Veg Sandwiches", description: "BBQ glaze, charred corn, jalapeño, cheese melt.", price: "₹149" },

    // Non-Veg Sandwiches
    { name: "Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Grilled chicken sandwich with house dressing.", price: "₹149" },
    { name: "Crispy Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Crispy fried chicken stuffed sandwich.", price: "₹159" },
    { name: "Mexican Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Spicy grilled chicken, chipotle mayo, pickled onions.", price: "₹169" },
    { name: "Smoky BBQ Chicken Sandwich", category: "Non-Veg Sandwiches", description: "BBQ chicken, cheddar, caramelised onions, FWNT sauce.", price: "₹179" },
    { name: "Tandoori Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Tandoori marinated chicken sandwich.", price: "₹169" },

    // Chicken Wings
    { name: "Chicken Wings 2 Piece", category: "Chicken Wings", description: "2-piece crispy chicken wings.", price: "₹49" },
    { name: "Chicken Wings 4 Piece", category: "Chicken Wings", description: "4-piece crispy chicken wings.", price: "₹99" },
    { name: "Chicken Wings 6 Piece", category: "Chicken Wings", description: "6-piece crispy chicken wings.", price: "₹129" },

    // Chicken Legs
    { name: "Chicken Legs 2 Piece", category: "Chicken Legs", description: "2-piece crunchy chicken legs.", price: "₹79" },
    { name: "Chicken Legs 4 Piece", category: "Chicken Legs", description: "4-piece crunchy chicken legs.", price: "₹149" },
    { name: "Chicken Legs 6 Piece", category: "Chicken Legs", description: "6-piece crunchy chicken legs.", price: "₹199" },

    // Chicken Lollipop
    { name: "Chicken Lollipop 2 Piece", category: "Chicken Lollipop", description: "2-piece chicken lollipop.", price: "₹69" },
    { name: "Chicken Lollipop 4 Piece", category: "Chicken Lollipop", description: "4-piece chicken lollipop.", price: "₹129" },
    { name: "Chicken Lollipop 6 Piece", category: "Chicken Lollipop", description: "6-piece chicken lollipop.", price: "₹189" },

    // Chicken Strips
    { name: "Chicken Strips 2 Piece", category: "Chicken Strips", description: "2-piece crispy chicken strips.", price: "₹59" },
    { name: "Chicken Strips 4 Piece", category: "Chicken Strips", description: "4-piece crispy chicken strips.", price: "₹119" },
    { name: "Chicken Strips 6 Piece", category: "Chicken Strips", description: "6-piece crispy chicken strips.", price: "₹179" },

    // Snacks
    { name: "French Fries", category: "Snacks", description: "Crispy golden french fries.", price: "₹99" },
    { name: "Veg Nuggets", category: "Snacks", description: "Crumb-fried vegetable nuggets.", price: "₹119" },
    { name: "Veg Fingers", category: "Snacks", description: "Crispy veg finger bites with herbs.", price: "₹119" },
    { name: "Potato Pops", category: "Snacks", description: "Cheesy potato poppers.", price: "₹109" },
    { name: "Chicken Nuggets", category: "Snacks", description: "Classic chicken nuggets with dip.", price: "₹139" },
    { name: "Chicken Popcorn", category: "Snacks", description: "Crunchy chicken popcorn bites.", price: "₹139" },
    { name: "Oats Meal", category: "Snacks", description: "Hearty savoury oats bowl.", price: "₹129" }
];

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const menuSections = document.getElementById("menuSections");

const categories = [...new Set(menuItems.map((item) => item.category))];

function highlightActiveNav() {
    if (!navLinks) return;
    const currentPage = document.body?.dataset?.page;
    if (!currentPage) return;

    navLinks.querySelectorAll("[data-nav]").forEach((link) => {
        if (link.dataset.nav === currentPage) {
            link.classList.add("is-active");
        }
    });
}

function renderMenu() {
    if (!menuSections) return;
    menuSections.innerHTML = "";

    const grouped = categories
        .map((category) => ({
            category,
            items: menuItems.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length);

    grouped.forEach(({ category, items }) => {
        const wrapper = document.createElement("section");
        const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        wrapper.className = `menu__category menu__category--${slug}`;

        const title = document.createElement("h3");
        title.textContent = category;

        const list = document.createElement("ul");
        list.className = "menu__list";

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "menu__item";

            const name = document.createElement("span");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.textContent = item.price;

            listItem.append(name, price);
            list.appendChild(listItem);
        });

        wrapper.append(title, list);
        menuSections.appendChild(wrapper);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("is-open");
        navToggle.classList.toggle("is-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.classList.remove("is-open");
        });
    });
}

highlightActiveNav();

if (menuSections) {
    renderMenu();
}

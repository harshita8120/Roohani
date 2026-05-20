const menuSections = {
    treasure: [
        {src: "images/Sunshine in a bowl.png", alt: "Sunshine in a bowl"},
        {src: "images/Haah Aru Kumara.png", alt: "Haah Aru Kumara"},
        {src: "images/Berry Happy.png", alt: "Berry Happy"}
    ],
    starter: [
        {src: "images/Pani Puri.png", alt: "Pani Puri"},
        {src: "images/NJ's Momos.png", alt: "NJ's Momos"},
        {src: "images/Dumplings.png", alt: "Dumplings"},
        {src: "images/Mackerel Grill.png", alt: "Mackerel Grill"},
        {src: "images/Beet Carpaccio.png", alt: "Beet Carpaccio"},
        {src: "images/Grilled Prawn.png", alt: "Grilled Prawn"}
    ],
    main: [
        {src: "images/Black Sesame Chicken.png", alt: "Black Sesame Chicken"},
        {src: "images/Crispy Chicken Strips.png", alt: "Crispy Chicken Strips"},
        {src: "images/Fish with Basil & Buttermilk.png", alt: "Fish with Basil & Buttermilk"},
        {src: "images/Curried Tofu.png", alt: "Curried Tofu"},
        {src: "images/Prawn and Coconut.png", alt: "Prawn and Coconut"},
        {src: "images/One Pot Soup Noodle.png", alt: "One Pot Soup Noodle"},
        {src: "images/Assamese Fish Curry Platter.png", alt: "Assamese Fish Curry Platter"}
    ],
    dessert: [
        {src: "images/Bumble Bee.png", alt: "Bumble Bee"},
        {src: "images/Bliss Bread.png", alt: "Bliss Bread"},
        {src: "images/Berry & Chocolate.png", alt: "Berry & Chocolate"},
        {src: "images/Strawberry Entrement.png", alt: "Strawberry Entrement"},
        {src: "images/Tiramisu 2.O.png", alt: "Tiramisu 2.O"},
        {src: "images/Pina Colada & Pear.png", alt: "Pina Colada & Pear"},
        {src: "images/Persimmon Entrement.png", alt: "Persimmon Entrement"},
        {src: "images/Apple Frangipane.png", alt: "Apple Frangipane"},
        {src: "images/Sunflower Tart.png", alt: "Sunflower Tart"},
        {src: "images/Christmas Swiss Roll.png", alt: "Christmas Swiss Roll"},
        {src: "images/Strawberry Cream Paris Brest.png", alt: "Strawberry Cream Paris Brest"},
        {src: "images/Yellow Delight.png", alt: "Yellow Delight"},
        {src: "images/Orangy.png", alt: "Orangy"}
    ]
};

// Inject data-images into each carousel div
document.querySelectorAll('.carousel[data-section]').forEach(container => {
    const section = container.dataset.section;
    if (menuSections[section]) {
        container.dataset.images = JSON.stringify(menuSections[section]);
    }
});
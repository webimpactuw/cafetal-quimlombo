import "./App.css";

const menu = {
  Breakfast: [
    {
      item: "Beans and Cheese Burrito",
      description: "Fried pinto beans and cheese",
      price: 6.99,
    },
    {
      item: "Fried pinto beans and cheese",
      description: "One egg, bacon, ham, cheese",
      price: 6.99,
    },
    {
      item: "Breakfast Burrito (large)",
      description: "Three eggs, bacon, ham, cheese ",
      price: 9.5,
    },
    {
      item: "Chilaquiles",
      description:
        "Choice of meat, pico de gallo, cheese, served w/rice and beans, option of green, red, or mole sauce",
      price: 11.99,
    },
    {
      item: "Chile Relleno Burrito",
      description:
        "Chile relleno, rice, beans, cheese, with a home made red sauce, sour cream ",
      price: 10.75,
    },
    {
      item: "Chile Relleno Plate",
      description:
        "Chile relleno served w/rice and beans topped with a home made red sauce and sour cream",
      price: 12.25,
    },
    {
      item: "Chorizo Egg Burrito",
      description: "Three eggs and chorizo",
      price: 9.5,
    },
    {
      item: "Egg and Chorizo Plate",
      description: "Three eggs and chorizo served w/rice and beans",
      price: 12.25,
    },
  ],
  Lunch: [
    {
      item: "Burritos",
      description: "Choice of meat, rice, beans, and cheese",
      price: 9.5,
    },
    {
      item: "Birria Plato (soup) ",
      description: "Birria and consomé",
      price: 11.99,
    },
    {
      item: "Consomé",
      description: "Spiced tomato broth",
      price: 4.5,
    },
    {
      item: "Enchiladas",
      description:
        "Two enchiladas one flavor served w/rice and beans, option of green, red or mole sauce topped with sour cream and cheese",
      price: 13.5,
    },
    {
      item: "Huarache",
      description:
        "Choice of meat, beans, lettuce, pico de gallo, sour cream, and cheese",
      price: 10.75,
    },
    {
      item: "Meat plate",
      description: "Choice of meat served with rice and beans",
      price: 11.25,
    },
    {
      item: "Mulita",
      description: "Choice of meat served with guacamole inside",
      price: 4.5,
    },
    {
      item: "Quesabirria",
      description: "Birria quesadilla served with guacamole inside",
      price: 12.25,
    },
    {
      item: "Quesadilla",
      description: "Choice of meat served with rice and beans",
      price: 10.25,
    },
    {
      item: "Pork Ribs Plate",
      description:
        "Pork ribs with a spicy home made red tomato sauce on top served w/rice and beans ",
      price: 11.99,
    },
    {
      item: "Tamales",
      description: "Corn husks containing steamed dough with various fillings",
      price: 3.5,
      subitems: [
        {
          item: "Chicken",
          description: "Choice of red, green, or mole sauce",
          color: "bg-[#FAC6AF]",
        },
        {
          item: "Pork",
          description: "Choice of red or green salsa",
          color: "bg-[#B36E3C]",
        },
        {
          item: "Chorizo",
          description: "Choice of beans or cheese",
          color: "bg-[#70351B]",
        },
        {
          item: "Rajas con queso",
          description: "Roasted poblano strips with cheese",
          color: "bg-[#489734]",
        },
        {
          item: "Beans and cheese",
          description: "",
          color: "bg-[#B95D1A]",
        },
        {
          item: "Sweet corn",
          description: "",
          color: "bg-[#E8C50B]",
        },
        {
          item: "Vegetables",
          description: "",
          color: "bg-[#20691F]",
        },
        {
          item: "Nopales",
          description: "Sliced cactus leaves",
          color: "bg-[#45A53C]",
        },
        {
          item: "Chipotle",
          description: "Smoked chile peper",
          color: "bg-[#DA0D0D]",
        },
        {
          item: "Black beans",
          description: "",
          color: "bg-[#282121]",
        },
        {
          item: "Chipilín",
          description: "Central American greens",
          color: "bg-[#419D21]",
        },
      ],
    },
    {
      item: "Tamale plate",
      description: "Choice of tamale served with rice and beans",
      price: 9.75,
    },
    {
      item: "Pozole",
      description: "Traditional Mexican soup made with pork and hominy",
      price: 11.99,
    },
    {
      item: "Single Taco",
      description: "Choice of meat",
      price: 2.5,
    },
    {
      item: "Taco Plate",
      description: "Three tacos, one flavor, served with rice and beans",
      price: 9.75,
    },
    {
      item: "Torta",
      description: "Choice of meat, onions, tomatoes, jalapenos, mayonaise",
      price: 9.75,
    },
    {
      item: "Tostada",
      description:
        "Choice of meat, beans, lettuce, pico de gallo, sour cream, and cheese",
      price: 5.99,
    },
    {
      item: "Wet Burrito Plate",
      description:
        "Choice of meat, rice, beans, and cheese; served w/rice and beans, option of green, red or mole sauce topped with sour cream and cheese",
      price: 13.25,
    },
  ],
  Starters: [
    {
      item: "Chips and Guacamole",
      description: "",
      price: 6.99,
    },
    {
      item: "Chips and Pico de Gallo",
      description: "",
      price: 6.15,
    },
    {
      item: "Chips and Salsa",
      description: "",
      price: 5.5,
    },
  ],
  "Filling Options": [
    {
      item: "Meats",
      description:
        "Chorizo, Azada, Birria, Spicy Pork, Chicken Tinga, Chicken Mole *Not for tamales*",
      price: 0,
    },
    {
      item: "Vegan",
      description:
        "Nopales, Rajas, Potatoes, Garden Green (kale) *Not for tamales*",
      price: 0,
    },
  ],
  Extras: [
    {
      item: "Avocado",
      description: "",
      price: 1.75,
    },
    {
      item: "Meat",
      description: "",
      price: 3.25,
    },
    {
      item: "Cheese",
      description: "",
      price: 1.25,
    },
  ],
  Sides: [
    {
      item: "Rice",
      description: "",
      price: 3.25,
    },
    {
      item: "Beans",
      description: "",
      price: 3.25,
    },
    {
      item: "Pico de Gallo",
      description: "",
      price: 4.35,
    },
    {
      item: "Guacamole",
      description: "",
      price: 5.75,
    },
    {
      item: "Salsa (1 oz)",
      description: "",
      price: 0.35,
    },
    {
      item: "Salsa (8 oz)",
      description: "",
      price: 3.25,
    },
    {
      item: "Sour cream (1 oz)",
      description: "",
      price: 0.35,
    },
    {
      item: "Sour cream (8 oz)",
      description: "",
      price: 3.25,
    },
  ],
  Coffee: [
    {
      item: "Americano",
      description: "",
      price: 1.99,
    },
    {
      item: "Ameri-Latte",
      description: "",
      price: 1.99,
    },
    {
      item: "Citrus Mocha",
      description: "",
      price: 1.99,
    },
    {
      item: "Cappuccino",
      description: "",
      price: 1.99,
    },
    {
      item: "Cold Brew",
      description: "",
      price: 1.99,
    },
    {
      item: "Drip Coffee",
      description: "",
      price: 1.99,
    },
    {
      item: "Espresso",
      description: "",
      price: 1.99,
    },
    {
      item: "Latte",
      description: "",
      price: 1.99,
    },
    {
      item: "Cafe de Olla",
      description: "",
      price: 1.99,
    },
    {
      item: "Latte a la Canela",
      description: "",
      price: 1.99,
    },
    {
      item: "Mocha",
      description: "",
      price: 1.99,
    },
    {
      item: "Púne",
      description: "",
      price: 1.99,
    },
  ],
  "Specialty Drinks": [
    {
      item: "Aztec-Cocoa",
      description: "",
      price: 3.25,
    },
    {
      item: "Chai Latte",
      description: "",
      price: 3.25,
    },
    {
      item: "Horchata",
      description: "",
      price: 3.25,
    },
    {
      item: "Horchata Latte",
      description: "",
      price: 3.25,
    },
    {
      item: "Hot Chocolate",
      description: "",
      price: 3.25,
    },
    {
      item: "Hot Tea",
      description: "",
      price: 3.25,
    },
    {
      item: "Iced Tea",
      description: "",
      price: 3.25,
    },
    {
      item: "Italian Soda",
      description: "",
      price: 3.25,
    },
    {
      item: "London Fog",
      description: "",
      price: 3.25,
    },
  ],
  "Aguas Frescas": [
    {
      item: "Agua de Jamaica",
      description: "",
      price: 3.25,
    },
    {
      item: "Chia Lemonade",
      description: "",
      price: 3.25,
    },
    {
      item: "Horchata",
      description: "",
      price: 3.25,
    },
  ],
};
const menuItemStyles = {
  Breakfast: "grid-cols-1",
  Lunch: "grid-cols-1",
  Starters: "grid-cols-1",
  "Filling Options": "grid-cols-1",
  Extras: "grid-cols-3",
  Sides: "grid-cols-3",
  Coffee: "grid-cols-3",
  "Specialty Drinks": "grid-cols-3",
  "Aguas Frescas": "grid-cols-3",
};

const currentCategory = "";
const categories = {
  Food: [
    "Breakfast",
    "Lunch",
    "Starters",
    "Filling Options",
    "Extras",
    "Sides",
  ],
  Drinks: ["Coffee", "Specialty Drinks", "Aguas Frescas"],
};
const getID = function (category) {
  return category.toLowerCase().split(" ").join("-");
};

const hours = {
  monday: {
    open: 10,
    close: 19,
  },
  tuesday: {
    open: 10,
    close: 19,
  },
  wednesday: {
    open: 10,
    close: 19,
  },
  thursday: {
    open: 10,
    close: 19,
  },
  friday: {
    open: 10,
    close: 19,
  },
  saturday: {
    open: 10,
    close: 15,
  },
  sunday: {
    open: 0,
    close: 0,
  },
};

function Menu() {
  return (
    <div className="px-16 py-16 pt-32 text-xl bg-menu-background">
      {/****** SIDEBAR ******/}
      <div className="fixed w-[15vw] h-[80vh] border-r-4 border-red-primary">
        {/* MENU CATEGORIES */}
        <div className="flex flex-col gap-8">
          {Object.entries(categories).map(function ([category, items]) {
            return (
              <div className="flex flex-col gap-4">
                <Header text={category} />
                {items.map((item) => (
                  <Category text={item} current={item === currentCategory} />
                ))}
              </div>
            );
          })}
        </div>

        {/* MENU FILTERS */}
        {/* <div>
          <Header text="Options" />
          <Option text="Vegetarian" />
          <Option text="Vegan" />
          <Option text="Gluten free" />
          <Option text="Lactose free" />
          <Option text="Nut free" />
        </div> */}

        {/* MENU OPTIONS */}
        {/* <div>
          <Header text="Language" />
        </div> */}
      </div>

      {/****** MENU ******/}
      <div className="relative ml-[20vw]">
        {/* STATUS */}
        {/* <Closing /> */}

        {/* MENU */}
        <div className="flex flex-col gap-12">
          {Object.entries(menu).map(function ([category, items]) {
            return (
              <div>
                <Header text={category} />
                <div className={`grid ${menuItemStyles[category]}`}>
                  {items.map(
                    ({ item, description, price, subitems = null }) => (
                      <MenuItem
                        name={item}
                        description={description}
                        price={price}
                        multiItemPerLine={
                          Number(menuItemStyles[category].slice(-1)) > 1
                        }
                        subitems={subitems}
                      />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ***** GENERAL COMPOENENTS *****
function Header({ text }) {
  return (
    <h3 id={getID(text)} className="text-4xl font-bold">
      {text}
    </h3>
  );
}

// ***** SIDEBAR COMPONENTS *****
function Category({ text, current = false }) {
  return (
    <a
      href={`#${getID(text)}`}
      className={`text-gray-secondary ${
        current ? "text-red-primary" : ""
      } hover:text-red-primary`}
    >
      {text}
    </a>
  );
}

// ***** MENU COMPONENTS *****
function MenuItem({ name, description, price, multiItemPerLine, subitems }) {
  const divStyle =
    "p-3 pt-4 border-b-2 border-gray-tertiary border-dashed " +
    (multiItemPerLine
      ? ""
      : "flex flex-row justify-between items-center gap-12");

  return (
    <>
      <div className={divStyle}>
        <div>
          <p className="font-bold">{name}</p>
          {description ?? <p className="text-gray-secondary">{description}</p>}
        </div>
        <p>
          {price !== 0
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)
            : ""}
        </p>
      </div>
      {subitems &&
        subitems.map(({ item, description, color }) => (
          <div className="flex flex-row items-center gap-4 ml-10 p-3 pt-4 border-b-2 border-gray-tertiary border-dashed">
            <div className={`w-4 h-4 rounded-full ${color}`}></div>
            <div>
              <p className="font-semibold">{item}</p>
              {description ?? (
                <p className="text-gray-secondary">{description}</p>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

// ************************************************************
function Option({ text }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <PlaceholderIcon />
      <p className="font-medium">{text}</p>
    </div>
  );
}

function PlaceholderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function Closing() {
  const getDayOfTheWeek = () =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    })
      .format(new Date())
      .toLowerCase();

  const isOpen = function () {
    const currentTime = new Date();
    // const currentTime = new Date("2024-04-18T12:00:00");
    const openingTime = new Date();
    openingTime.setHours(hours[getDayOfTheWeek()].open);
    openingTime.setMinutes(0);
    openingTime.setSeconds(0);
    const closingTime = new Date();
    closingTime.setHours(hours[getDayOfTheWeek()].close);
    closingTime.setMinutes(0);
    closingTime.setSeconds(0);

    return openingTime < currentTime && currentTime < closingTime;
  };

  const getClosingTime = function () {
    const hour = hours[getDayOfTheWeek()].close;
    const ampm = hour < 12 ? "am" : "pm";

    if (hour === 0 || hour === 12) {
      return `12:00 ${ampm}`;
    } else {
      return `${hour % 12}:00 ${ampm}`;
    }
  };

  if (isOpen()) {
    return (
      <p className="font-semibold text-right">
        <span className="text-green">Open</span> until {getClosingTime()}
      </p>
    );
  } else {
    return (
      <p className="font-semibold text-right">
        <span className="text-red">Closed</span>
      </p>
    );
  }
}

export default Menu;

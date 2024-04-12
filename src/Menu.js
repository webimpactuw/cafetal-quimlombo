function Menu() {
  const currentCategory = "Breakfast";
  const categories = [
    ["Breakfast", "Lunch", "Filling Options", "Extras", "Sides"],
    ["Coffee", "Specialty Drinks", "Aqua Frescas", "Extras"],
  ];

  return (
    <div className="text-2xl py-8 px-16 flex flex-row">
      <div className="w-1/5 flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Header text="Menu" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 p-1.5 border-2 border-black rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          {categories.map((section) => (
            <div>
              {section.map((item) => (
                <Category text={item} current={item === currentCategory} />
              ))}
            </div>
          ))}
        </div>

        <div>
          <Header text="Options" />
          <Option text="Vegetarian" />
          <Option text="Vegan" />
          <Option text="Gluten free" />
          <Option text="Lactose free" />
          <Option text="Nut free" />
        </div>

        <div>
          <Header text="Language" />
        </div>
      </div>
      <div className="w-4/5">
        <p className="font-semibold text-right">
          <span className="text-green-500">Open</span> until 7:00 pm
        </p>

        <div>
          <header className="flex flex-row justify-between pb-2 border-b-4 border-black">
            <h3 className="text-3xl font-semibold">Breakfast</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </header>
          <div className="flex flex-col gap-2 p-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ text }) {
  return <h3 className="font-semibold">{text}</h3>;
}

function Category({ text, current = false }) {
  return (
    <div className="flex flex-row">
      <div className={"w-2 " + (current ? "bg-red" : "")}></div>
      <p className="font-medium pl-4">{text}</p>
    </div>
  );
}

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

function MenuItem({ current = false }) {
  return (
    <div className={"flex flex-row flex-1 gap-6 p-8 shadow rounded-lg"}>
      <div className="w-40 h-40 shrink-0 border-4 border-black"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-4xl font-semibold">Tamales</h4>
          <span className="font-semibold">$8.99</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row gap-2">
          <PlaceholderIcon />
          <PlaceholderIcon />
          <PlaceholderIcon />
        </div>
      </div>
    </div>
  );
}

export default Menu;

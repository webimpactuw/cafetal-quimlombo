const hours = {
  sunday: {
    open: 0,
    close: 0,
  },
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
};

function Hours({ displayContact = true }) {
  return (
    <div className="px-6 bg-[white] py-3 w-[400px] rounded-2xl shadow-lg text-gray-primary">
      {getOpenString()}

      <div
        className={`flex flex-col gap-2 pb-4 ${
          displayContact && "mb-4 border-b-[1px] border-gray-tertiary"
        }`}
      >
        {Object.entries(hours).map(function ([dayOfTheWeek, { open, close }]) {
          return (
            <div className="relative flex justify-between">
              {getDayOfWeek() === dayOfTheWeek && (
                <div className="absolute h-[100%] w-1 left-[-10px] border-l-4 border-red-primary rounded-sm"></div>
              )}
              <p>
                {dayOfTheWeek.at(0).toUpperCase() +
                  dayOfTheWeek.slice(1).toLowerCase()}
              </p>
              {intToTimeString(open, close)}
            </div>
          );
        })}
      </div>

      {displayContact && (
        <div className="font-medium">
          <div className="flex items-center gap-3 mb-2 group hover:text-red-primary transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-secondary group-hover:stroke-red-primary transition"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <a href="tel:+12066026412" target="_blank" rel="noreferrer">
              (206) 602-6412
            </a>
          </div>

          <div className="flex items-center gap-3 group hover:text-red-primary transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-secondary group-hover:stroke-red-primary transition"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <a
              href="https://maps.app.goo.gl/7pZER3j5H2RD5uQN7"
              target="_blank"
              rel="noreferrer"
            >
              <p>4343 15th Ave S</p>
              <p>Seattle, WA 98108</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// HELPER FUNCTIONS
function getDayOfWeek() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  })
    .format(new Date())
    .toLowerCase();
}

function intToTime(time) {
  const ampm = time < 12 ? "am" : "pm";

  if (time === 0 || time === 12) {
    return `12:00 ${ampm}`;
  } else {
    return `${time % 12}:00 ${ampm}`;
  }
}

// ELEMENT FUNCTIONS
function getOpenString() {
  const currentTime = new Date();
  const dayOfWeek = getDayOfWeek();

  const openingTime = new Date();
  openingTime.setHours(hours[dayOfWeek].open);
  openingTime.setMinutes(0);
  openingTime.setSeconds(0);
  const closingTime = new Date();
  closingTime.setHours(hours[dayOfWeek].close);
  closingTime.setMinutes(0);
  closingTime.setSeconds(0);

  if (openingTime < currentTime && currentTime < closingTime) {
    return (
      <h3 className="mb-2 text-2xl font-bold">
        <span className="text-green-primary">Open</span> until{" "}
        {intToTime(closingTime.getHours())}
      </h3>
    );
  } else {
    return (
      <p className="mb-2 text-2xl font-semibold">
        <span className="text-red-primary">Closed</span>
      </p>
    );
  }
}

function intToTimeString(open, close) {
  if (open >= close) {
    return <div className="text-gray-tertiary">Closed</div>;
  } else {
    return <div>{`${intToTime(open)} - ${intToTime(close)}`}</div>;
  }
}

export default Hours;

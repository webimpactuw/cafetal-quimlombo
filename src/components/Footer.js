function Footer() {
  return (
    <div className="relative px-5 md:px-10 py-5 flex justify-between items-center bg-red-primary text-white z-50">
      {/* COPYRIGHT */}
      <p className="text-sm lg:text-lg flex items-center">
        &copy; 2024 Cafetal Quilombo Café
      </p>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-row md:gap-4">
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/cafetalquilombo/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-8 h-8 lg:w-12 lg:h-12 hover:text-beige transition"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/cafetalquilombocafe/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-8 h-8 lg:w-12 lg:h-12 hover:text-beige transition"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;

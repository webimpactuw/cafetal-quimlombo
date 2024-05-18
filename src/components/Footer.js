function Footer() {
  return (
    <div className="px-4 flex justify-between items-center bg-red-primary text-white">
      {/* COPYRIGHT */}
      <p className="text-lg flex items-center px-8 p-4">
        &copy; 2024 Cafetal Quilombo Cafe
      </p>

      {/* SOCIAL MEDIA */}
      <div className="px-8 py-4 flex flex-row gap-4">
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/cafetalquilombo/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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

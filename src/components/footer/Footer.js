import LogoSection from "./LogoSection";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <footer id="contact">
      <LogoSection />
      <div className={classes.footer}>
        <div className={classes.main}>
          <div className={classes["first-col"]}>
            <p className={classes.title}>
              <span className="font-bold">Your</span>Car
            </p>
            <p className={`${classes["fi-col-des"]}`}>
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p className={`${classes["fi-col-des"]}`}>
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>
          <div className={classes["second-col"]}>
            <p className={classes.title}>News Letter</p>
            <p>
              Subscribe to our news letter for updates, news and exclusive
              offers
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                className="placeholder:italic placeholder:text-main-color block bg-white  border border-main-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="email"
                name="email"
              />
              <button
                type="submit"
                className="text-lg  text-white bg-main-color p-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className={classes["third-col"]}>
            <p className={classes.title}>Contact</p>
            <div className={classes.location}>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z"
                  fill="#12273D"
                />
              </svg>
              <div>
                <p>2038 2nd Avenue,Las Vegas,United States</p>
              </div>
            </div>
            <div className={classes.phone}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.23 12.2598L13.69 11.9698C13.3914 11.9347 13.0886 11.9678 12.8046 12.0665C12.5206 12.1652 12.2626 12.327 12.05 12.5398L10.21 14.3798C7.37123 12.936 5.06382 10.6286 3.62004 7.78977L5.47004 5.93977C5.90004 5.50977 6.11004 4.90977 6.04004 4.29977L5.75004 1.77977C5.69335 1.29194 5.45923 0.842003 5.09228 0.515614C4.72532 0.189226 4.25115 0.00918337 3.76004 0.00976704H2.03004C0.900041 0.00976704 -0.0399593 0.949767 0.0300407 2.07977C0.560041 10.6198 7.39004 17.4398 15.92 17.9698C17.05 18.0398 17.99 17.0998 17.99 15.9698V14.2398C18 13.2298 17.24 12.3798 16.23 12.2598Z"
                  fill="#12273D"
                />
              </svg>
              <div>
                <p>01444773421423</p>
                <p>01477678449405</p>
              </div>
            </div>
            <div className={classes.email}>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4L10 9L2 4V2L10 7L18 2V4ZM18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
                  fill="#12273D"
                />
              </svg>
              <p>info@YourCar.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["social-part"]}>
        <a href="#">
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0.0600586C6.75 0.0600586 0 6.79506 0 15.0901C0 22.5901 5.49 28.8151 12.66 29.9401V19.4401H8.85V15.0901H12.66V11.7751C12.66 8.01006 14.895 5.94006 18.33 5.94006C19.965 5.94006 21.675 6.22506 21.675 6.22506V9.93006H19.785C17.925 9.93006 17.34 11.0851 17.34 12.2701V15.0901H21.51L20.835 19.4401H17.34V29.9401C20.8747 29.3818 24.0933 27.5783 26.4149 24.8552C28.7365 22.132 30.008 18.6685 30 15.0901C30 6.79506 23.25 0.0600586 15 0.0600586Z"
              fill="#12273D"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6251 2.94025C28.5493 3.40431 27.3786 3.7383 26.1728 3.86837C27.4247 3.12459 28.3623 1.94954 28.8095 0.563686C27.6347 1.26255 26.3477 1.75261 25.0056 2.01212C24.4446 1.41245 23.7662 0.934725 23.0126 0.608713C22.2589 0.2827 21.4462 0.115388 20.6251 0.117202C17.3028 0.117202 14.631 2.81017 14.631 6.11486C14.631 6.57892 14.6872 7.04298 14.7786 7.48947C9.80401 7.22931 5.36729 4.85275 2.41768 1.21408C1.88023 2.13206 1.59858 3.17729 1.60205 4.24103C1.60205 6.32228 2.66025 8.15744 4.27393 9.23673C3.32296 9.19928 2.39427 8.9379 1.56338 8.47384V8.54767C1.56338 11.4621 3.62354 13.8774 6.36924 14.4328C5.8537 14.5667 5.32337 14.6352 4.79072 14.6367C4.40049 14.6367 4.03135 14.5981 3.65869 14.5453C4.41807 16.9219 6.6294 18.6481 9.2626 18.7043C7.20244 20.318 4.62197 21.2672 1.82002 21.2672C1.31729 21.2672 0.853223 21.2496 0.371582 21.1934C3.02939 22.8985 6.18291 23.8828 9.579 23.8828C20.604 23.8828 26.6368 14.7492 26.6368 6.8215C26.6368 6.56134 26.6368 6.30119 26.6192 6.04103C27.7864 5.18673 28.8095 4.12853 29.6251 2.94025Z"
              fill="#12273D"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.7 0H21.3C26.1 0 30 3.9 30 8.7V21.3C30 23.6074 29.0834 25.8203 27.4518 27.4518C25.8203 29.0834 23.6074 30 21.3 30H8.7C3.9 30 0 26.1 0 21.3V8.7C0 6.39262 0.916605 4.17974 2.54817 2.54817C4.17974 0.916605 6.39262 0 8.7 0ZM8.4 3C6.96783 3 5.59432 3.56893 4.58162 4.58162C3.56893 5.59432 3 6.96783 3 8.4V21.6C3 24.585 5.415 27 8.4 27H21.6C23.0322 27 24.4057 26.4311 25.4184 25.4184C26.4311 24.4057 27 23.0322 27 21.6V8.4C27 5.415 24.585 3 21.6 3H8.4ZM22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79918C24.5525 6.15081 24.75 6.62772 24.75 7.125C24.75 7.62228 24.5525 8.0992 24.2008 8.45083C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45083C21.1975 8.0992 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79918C21.9008 5.44754 22.3777 5.25 22.875 5.25ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5Z"
              fill="#12273D"
            />
          </svg>
        </a>
      </div>
      <div className="container mx-auto">
        <p className="text-center text-xs pt-4">
          © Copyright 2023 ·{" "}
          <a href="#" className="font-bold">
            YourCar{" "}
          </a>
          All rights reserved
        </p>
        <p className="text-center font-bold text-main-color">
          <a
            href="https://www.linkedin.com/in/bashar-yousri-330882234"
            target="-blank"
          >
            by BaSHaR Yousri
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

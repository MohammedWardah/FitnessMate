import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState({
    diet: false,
    home: false,
    watch: false,
    profile: false,
  });

  // Color icon based on location
  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink({
      diet: currentPath.toLowerCase().includes("diet"),
      home: currentPath === "/",
      watch: currentPath.toLowerCase().includes("watch"),
      profile: currentPath.toLowerCase().includes("profile"),
    });
  }, [location.pathname]);

  // Navigate on icon click
  const navigateTo = (link) => {
    let path = "/";
    if (link === "Diet") path = "/Diet";
    else if (link === "Watch") path = "/Watch";
    else if (link === "Profile") path = "/Profile";

    navigate(path);
  };

  return (
    <footer className={styles.footer}>
      <svg
        onClick={() => navigateTo("Diet")}
        className={activeLink.diet ? styles.active : ""}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26.9478 13.2936C29.4081 10.8333 29.4239 6.86019 26.9831 4.41942C24.5424 1.97864 20.5693 1.99447 18.109 4.45477L4.45472 18.109C1.99441 20.5693 1.97859 24.5424 4.41936 26.9832C6.86014 29.424 10.8332 29.4081 13.2936 26.9478L26.9478 13.2936Z"
          stroke="#B2B2B2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75806 19.0614L11.158 23.4614"
          stroke="#B2B2B2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4581 13.5614L16.7581 17.9614"
          stroke="#B2B2B2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7581 7.76141L22.158 12.1614"
          stroke="#B2B2B2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        onClick={() => navigateTo("Home")}
        className={activeLink.home ? styles.active : ""}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.292893 13.2929C-0.0976311 13.6834 -0.097631 14.3166 0.292893 14.7071C0.683418 15.0976 1.31658 15.0976 1.70711 14.7071L0.292893 13.2929ZM3.88889 11.1111L3.18178 10.404L3.18178 10.404L3.88889 11.1111ZM14 1L14.7071 0.292893C14.3166 -0.0976311 13.6834 -0.0976311 13.2929 0.292893L14 1ZM26.2929 14.7071C26.6834 15.0976 27.3166 15.0976 27.7071 14.7071C28.0976 14.3166 28.0976 13.6834 27.7071 13.2929L26.2929 14.7071ZM1.70711 14.7071L4.596 11.8182L3.18178 10.404L0.292893 13.2929L1.70711 14.7071ZM4.596 11.8182L14.7071 1.70711L13.2929 0.292893L3.18178 10.404L4.596 11.8182ZM13.2929 1.70711L23.404 11.8182L24.8182 10.404L14.7071 0.292893L13.2929 1.70711ZM23.404 11.8182L26.2929 14.7071L27.7071 13.2929L24.8182 10.404L23.404 11.8182ZM2.88889 11.1111V25.5556H4.88889V11.1111H2.88889ZM5.33333 28H9.66667V26H5.33333V28ZM12.1111 25.5556V19.7778H10.1111V25.5556H12.1111ZM12.5556 19.3333H15.4444V17.3333H12.5556V19.3333ZM15.8889 19.7778V25.5556H17.8889V19.7778H15.8889ZM18.3333 28H22.6667V26H18.3333V28ZM25.1111 25.5556V11.1111H23.1111V25.5556H25.1111ZM22.6667 28C24.0167 28 25.1111 26.9056 25.1111 25.5556H23.1111C23.1111 25.801 22.9121 26 22.6667 26V28ZM15.8889 25.5556C15.8889 26.9056 16.9833 28 18.3333 28V26C18.0879 26 17.8889 25.801 17.8889 25.5556H15.8889ZM15.4444 19.3333C15.6899 19.3333 15.8889 19.5323 15.8889 19.7778H17.8889C17.8889 18.4277 16.7945 17.3333 15.4444 17.3333V19.3333ZM12.1111 19.7778C12.1111 19.5323 12.3101 19.3333 12.5556 19.3333V17.3333C11.2055 17.3333 10.1111 18.4277 10.1111 19.7778H12.1111ZM9.66667 28C11.0167 28 12.1111 26.9056 12.1111 25.5556H10.1111C10.1111 25.801 9.91213 26 9.66667 26V28ZM2.88889 25.5556C2.88889 26.9056 3.9833 28 5.33333 28V26C5.08787 26 4.88889 25.801 4.88889 25.5556H2.88889ZM9.66667 28H18.3333V26H9.66667V28Z"
          fill="#B2B2B2"
        />
      </svg>
      <svg
        onClick={() => navigateTo("Watch")}
        className={activeLink.watch ? styles.active : ""}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="11" y="11" width="14" height="14" rx="3" stroke="#B2B2B2" strokeWidth="2" />
        <path
          d="M13.5 5C13.5 4.05719 13.5 3.58579 13.7929 3.29289C14.0858 3 14.5572 3 15.5 3H20.5C21.4428 3 21.9142 3 22.2071 3.29289C22.5 3.58579 22.5 4.05719 22.5 5V10.5H13.5V5Z"
          fill="#B2B2B2"
        />
        <path
          d="M13.5 31C13.5 31.9428 13.5 32.4142 13.7929 32.7071C14.0858 33 14.5572 33 15.5 33H20.5C21.4428 33 21.9142 33 22.2071 32.7071C22.5 32.4142 22.5 31.9428 22.5 31V25.5H13.5V31Z"
          fill="#B2B2B2"
        />
      </svg>
      <svg
        onClick={() => navigateTo("Profile")}
        className={activeLink.profile ? styles.active : ""}
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 27H0C0 27.5523 0.447715 28 1 28L1 27ZM23 27V28C23.5523 28 24 27.5523 24 27H23ZM17.2857 6.77778C17.2857 9.33882 15.0002 11.5556 12 11.5556V13.5556C15.9428 13.5556 19.2857 10.5987 19.2857 6.77778H17.2857ZM12 11.5556C8.99979 11.5556 6.71429 9.33882 6.71429 6.77778H4.71429C4.71429 10.5987 8.05721 13.5556 12 13.5556V11.5556ZM6.71429 6.77778C6.71429 4.21674 8.99979 2 12 2V0C8.05721 0 4.71429 2.95686 4.71429 6.77778H6.71429ZM12 2C15.0002 2 17.2857 4.21674 17.2857 6.77778H19.2857C19.2857 2.95686 15.9428 0 12 0V2ZM2 27C2 22.0457 6.39616 17.8889 12 17.8889V15.8889C5.45358 15.8889 0 20.7858 0 27H2ZM12 17.8889C17.6038 17.8889 22 22.0457 22 27H24C24 20.7858 18.5464 15.8889 12 15.8889V17.8889ZM1 28H23V26H1V28Z"
          fill="#B2B2B2"
        />
      </svg>
    </footer>
  );
};

export default Footer;

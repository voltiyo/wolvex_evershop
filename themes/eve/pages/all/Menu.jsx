import PropTypes from "prop-types";
import React from "react";
function isWritable(object, property) {
  const descriptor = Object.getOwnPropertyDescriptor(object, property);
  return descriptor ? !descriptor.writable : true; // If no descriptor, assume writable.
}
export default function Menu({ menu: { items } }) {
  const newitems = [
    { ...items[0], url: "https://www.wolvex.co.uk/health-and-personal-care" },
    { ...items[1], url: "https://www.wolvex.co.uk/beauty-and-personal-care" },
    { ...items[2], url: "https://www.wolvex.co.uk/diy-and-tools" }
  ]
  

  return (
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-275 justify-content-center gap-7">
        {newitems.map((i, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item" key={index}>
            <a className="nav-link hover:underline" href={i.url}>
              {i.name}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a className="nav-link hover:underline" href={"https://www.wolvex.co.uk/page/contact-us"}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const layout = {
  areaId: "header",
  sortOrder: 1,
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;

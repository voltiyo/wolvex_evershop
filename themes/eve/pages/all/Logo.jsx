import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/WOLVEX_LOGO_master.png" alt="eve" style={{width: "80px"}} />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 0,
};

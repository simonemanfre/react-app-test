import React from "react";

const Icons = () => {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
      }}
      width={0}
      height={0}
    >
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        id="icon-arrow-down"
      >
        <path d="M464.716 318.431 281.859 501.288c-14.281 14.283-37.436 14.283-51.719 0L47.283 318.431c-14.282-14.283-14.282-37.438 0-51.72s37.438-14.284 51.72 0l120.425 120.427V36.572C219.428 16.374 235.802 0 256 0s36.572 16.373 36.572 36.572v350.566l120.426-120.427c7.14-7.14 16.5-10.711 25.86-10.711s18.719 3.57 25.86 10.712c14.283 14.283 14.283 37.437 0 51.719z"></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        id="icon-arrow-right"
      >
        <path d="M517.504 288 323.232 93.728 368.48 48.48 640 320 368.48 591.52l-45.248-45.248L517.504 352H0v-64z"></path>
      </symbol>
    </svg>
  );
};

export default Icons;

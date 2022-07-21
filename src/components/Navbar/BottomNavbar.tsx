import "../../style/colors.scss";
import "./bottom-navbar.scss";
import { MdHome, MdPeopleAlt } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { useState, useEffect } from "react";

interface forIcons {
  id: number;
  name: any;
  active: boolean;
}

const icons = [
  { id: 1, name: MdHome, active: true },
  { id: 2, name: MdPeopleAlt, active: false },
  { id: 3, name: RiYoutubeLine, active: false },
  { id: 4, name: BsPersonCircle, active: false },
  { id: 5, name: BiBell, active: false },
  { id: 6, name: FaBars, active: false },
];

const paramTransform = {
  transform: `transformX(-150%)`,
};

const BottomNavbar = () => {
  const [listIcons, setListIcons] = useState<forIcons[]>(icons);
  const handleActive = (id: number) => {
    const changeActive = icons.map((element) => {
      if (element.id === id) {
        return { ...element, active: true };
      }
      if (element.active === true) return { ...element, active: false };
      return element;
    });
    setListIcons(changeActive);
  };

  return (
    <>
      <div className="bottom-nav">
        {listIcons.map((icon, index) => {
          const { id, active } = icon;
          const IconName = icons[index].name;
          return (
            <button
              key={id}
              className={
                active
                  ? "bottom-nav__btn-icon active-btn"
                  : "bottom-nav__btn-icon"
              }
              onClick={() => handleActive(id)}
            >
              <IconName
                className={
                  active ? "bottom-nav__icon active-icon" : "bottom-nav__icon"
                }
              />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default BottomNavbar;

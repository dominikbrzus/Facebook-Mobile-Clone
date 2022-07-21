import { BsThreeDots, BsFillChatLeftFill } from "react-icons/bs";
import {
  AiOutlineClose,
  AiFillLike,
  AiFillHeart,
  AiFillFire,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import SomeCompany from "../../assets/someCompany.jpg";
import StandardImg from "../../assets/standardPhoto.jpg";
import Shirt1 from "../../assets/shirt1.jpg";
import Shirt2 from "../../assets/shirt2.jpg";
import Shirt3 from "../../assets/shirt3.jpg";
import Shirt4 from "../../assets/shirt4.jpg";

const SponsoredPost = () => {
  return (
    <div className="wall__post">
      <div className="wall__header flex-around">
        <img
          src={SomeCompany}
          alt="photo avatar"
          className="wall__header-avatar"
        />
        <div className="wall__header-title-section">
          <h4 className="wall__header-title">Company X</h4>
          <span className="wall__header-minutes">Sponsored</span>
          <BiWorld className="wall__header__icon-world" />
        </div>
        <BsThreeDots className="wall__header-icon" />
        <AiOutlineClose className="wall__header-icon" />
      </div>

      <div className="wall__content">
        <p className="wall__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          similique at quisquam mollitia odio autem dolores culpa impedit harum!{" "}
          <AiFillFire style={{ color: "#F85C50", fontSize: "1.1rem" }} />
        </p>
        <div className="wall__content-img-area grid">
          <img
            src={Shirt1}
            className="wall__content-img wall__content-img-sponsored"
            alt="standard-photo"
          />
          <img
            src={Shirt2}
            className="wall__content-img wall__content-img-sponsored"
            alt="standard-photo"
          />
          <img
            src={Shirt3}
            className="wall__content-img wall__content-img-sponsored"
            alt="standard-photo"
          />
          <img
            src={Shirt4}
            className="wall__content-img wall__content-img-sponsored"
            alt="standard-photo"
          />
        </div>
      </div>

      <div className="wall__comments">
        <div className="wall__comments-interactions flex-between">
          <div className="wall__comments-like-section flex">
            <AiFillLike className="wall__comments-icon-like" />
            <span className="wall__comments-count">10</span>
          </div>

          <div className="wall__comments-interacting-section">
            <span className="wall__comments-comments">Comments: 1 · </span>
            <span className="wall__comments-shares">1 Shares</span>
          </div>
        </div>

        <div className="wall__comments-line"></div>

        <div className="wall__comments-bottom flex-evenly">
          <div className="wall__comments-action flex">
            <AiFillLike className="wall__comments-action-icon" /> Like
          </div>
          <div className="wall__comments-action flex">
            <BsFillChatLeftFill className="wall__comments-action-icon" /> Add
            comment
          </div>
          <div className="wall__comments-action flex">
            <FaShare className="wall__comments-action-icon" /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredPost;

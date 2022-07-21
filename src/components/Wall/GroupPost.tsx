import { BsThreeDots, BsFillChatLeftFill } from "react-icons/bs";
import { AiOutlineClose, AiFillLike, AiFillHeart } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import StandardImg from "../../assets/standardPhoto.jpg";
import AvatarGroup from "../../assets/avatar-group1.png";
const GroupPost = () => {
  return (
    <div className="wall__post">
      <div className="wall__header flex-around">
        <div className="wall__group-avatar-section">
          <img
            src={AvatarGroup}
            alt="photo avatar"
            className="wall__header-avatar wall__avatar-large"
          />
          <img src={StandardImg} className="wall__avatar-small" />
        </div>
        <div className="wall__header-title-section">
          <h4 className="wall__header-title">Buy & Sell Group</h4>
          <span className="wall__header-minutes">
            <strong style={{ letterSpacing: ".050rem" }}>Andrew Johnson</strong>{" "}
            · 38 min.
          </span>
          <BiWorld className="wall__header__icon-world" />
        </div>
        <BsThreeDots className="wall__header-icon" />
        <AiOutlineClose className="wall__header-icon" />
      </div>

      <div className="wall__content">
        <p className="wall__content-text">
          Officiis iusto nam, tempore obcaecati beatae dolore quia impedit animi
          dolorum ipsum delectus. Veniam recusandae veritatis, velit neque
          soluta rem quo?
        </p>
      </div>

      <div className="wall__comments">
        <div className="wall__comments-interactions flex-between">
          <div className="wall__comments-like-section flex">
            <AiFillLike className="wall__comments-icon-like" />
            <span className="wall__comments-count">2</span>
          </div>

          <div className="wall__comments-interacting-section">
            <span className="wall__comments-comments">Comments: 1</span>
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

export default GroupPost;

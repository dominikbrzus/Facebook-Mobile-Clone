import { BsThreeDots, BsFillChatLeftFill } from "react-icons/bs";
import { AiOutlineClose, AiFillLike, AiFillHeart } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import StandardAvatar from "../../assets/standardAv.jpg";
import StandardImg from "../../assets/standardPhoto.jpg";

const StandardPost = () => {
  return (
    <div className="wall__post">
      <div className="wall__header flex-around">
        <img
          src={StandardAvatar}
          alt="photo avatar"
          className="wall__header-avatar"
        />
        <div className="wall__header-title-section">
          <h4 className="wall__header-title">John Smith</h4>
          <span className="wall__header-minutes">38 min.</span>
          <BiWorld className="wall__header__icon-world" />
        </div>
        <BsThreeDots className="wall__header-icon" />
        <AiOutlineClose className="wall__header-icon" />
      </div>

      <div className="wall__content">
        <p className="wall__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          similique at quisquam mollitia odio autem dolores culpa impedit harum!
          Voluptate minima quaerat aliquid id quos commodi vel eum culpa
          officiis iusto nam, tempore obcaecati beatae dolore quia impedit animi
          dolorum ipsum delectus. Veniam recusandae veritatis, velit neque
          soluta rem quo.
        </p>
        <img
          src={StandardImg}
          className="wall__content-img"
          alt="standard-photo"
        />
      </div>

      <div className="wall__comments">
        <div className="wall__comments-interactions flex-between">
          <div className="wall__comments-like-section flex">
            <AiFillLike className="wall__comments-icon-like" />
            <AiFillHeart className="wall__comments-icon-heart" />
            <span className="wall__comments-count">38</span>
          </div>

          <div className="wall__comments-interacting-section">
            <span className="wall__comments-comments">Comments: 4 · </span>
            <span className="wall__comments-shares">2 Shares</span>
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

export default StandardPost;

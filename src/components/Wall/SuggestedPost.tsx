import { BsThreeDots, BsFillChatLeftFill } from "react-icons/bs";
import { AiOutlineClose, AiFillLike, AiFillHeart } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import TravelAvatar from "../../assets/tarvAv.jpg";
import TravelImg from "../../assets/travels.jpg";

const SuggestedPost = () => {
  return (
    <div className="wall__post">
      <div className="wall__sugested-header flex">
        <p className="wall__suggested-title">Suggested Post</p>
        <BsThreeDots className="wall__header-icon" />
        <AiOutlineClose className="wall__header-icon" />
        <div className="wall__suggested-line"></div>
      </div>
      <div className="wall__header flex-around">
        <img
          src={TravelAvatar}
          alt="photo avatar"
          className="wall__header-avatar"
        />
        <div className="wall__header-title-section">
          <h4 className="wall__header-title">Travel Website</h4>
          <span className="wall__header-minutes">7 days</span>
          <BiWorld className="wall__header__icon-world" />
        </div>
      </div>

      <div className="wall__content">
        <p className="wall__content-text">
          Voluptate minima quaerat aliquid id quos commodi vel eum culpa
          officiis iusto nam, tempore obcaecati beatae dolore quia impedit animi
          dolorum ipsum delectus. Veniam recusandae veritatis, velit neque
          soluta rem quo.
        </p>
        <img
          src={TravelImg}
          className="wall__content-img wall__content-img-suggested"
          alt="standard-photo"
        />
      </div>

      <div className="wall__suggested-website-section">
        <p className="wall__suggestet-website">example.com</p>
        <p className="wall__suggested-website-title">
          How to find an exotic country to travel{" "}
        </p>
      </div>

      <div className="wall__comments">
        <div className="wall__comments-interactions flex-between">
          <div className="wall__comments-like-section flex">
            <AiFillLike className="wall__comments-icon-like" />
            <AiFillHeart className="wall__comments-icon-heart" />
            <span className="wall__comments-count">150</span>
          </div>

          <div className="wall__comments-interacting-section">
            <span className="wall__comments-comments">Comments: 45 · </span>
            <span className="wall__comments-shares">22 Shares</span>
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

export default SuggestedPost;

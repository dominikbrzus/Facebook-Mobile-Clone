import Woman from "../../assets/woman.jpg";
import { BsFileEarmarkImage } from "react-icons/bs";
import "./thing.scss";
const Thing = () => {
  return (
    <>
      <div className="thing flex-between">
        <img src={Woman} alt="photo woman" className="thing__img" />
        <input
          className="thing__input"
          placeholder="What are you thinking about?"
        />
        <BsFileEarmarkImage className="thing__icon" />
      </div>
      <div className="gray-line"></div>
    </>
  );
};

export default Thing;

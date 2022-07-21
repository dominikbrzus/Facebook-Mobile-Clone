import "./reels.scss";
import { useState, useRef} from "react";
import ReelsMain from "./ReeelsMain";

const Reels = () => {
  const [isClicked, setIsClicked] = useState<string>("stories");
  const refStories = useRef<HTMLParagraphElement>(null);
  const refReels = useRef<HTMLParagraphElement>(null);

  const handleClickElement = (ref: any) => {
    setIsClicked(ref.current.dataset.name);
  };

  return (
    <>
      <div className="reels">
        <div className="reels__titles flex-around">
          <p
            className={
              isClicked === "stories"
                ? "reels__element-title active-element"
                : "reels__element-title"
            }
            onClick={() => handleClickElement(refStories)}
            ref={refStories}
            data-name="stories"
          >
            Stories
          </p>
          <p
            className={
              isClicked === "reels"
                ? "reels__element-title active-element"
                : "reels__element-title"
            }
            onClick={() => handleClickElement(refReels)}
            ref={refReels}
            data-name="reels"
          >
            Reels
          </p>
        </div>
      </div>
      <ReelsMain isClicked={isClicked} />
    </>
  );
};

export default Reels;

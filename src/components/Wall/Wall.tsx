import "./wall.scss";
import StandardPost from "./StandardPost";
import SponsoredPost from "./SponsoredPost";
import SuggestedPost from "./SuggestedPost";
import GroupPost from "./GroupPost";

const Wall = () => {
  return (
    <div className="wall">
      <StandardPost />
      <SponsoredPost />
      <GroupPost />
      <SuggestedPost />
    </div>
  );
};

export default Wall;

import { FaPlusCircle } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import "./reels-main.scss";
import Woman from "../../assets/woman.jpg";
import { useState, useEffect } from "react";
import { reelsData, ReelsInterface } from "./data";
import El1 from "../../assets/el1.jpg";
import El2 from "../../assets/el2.jpg";
import El3 from "../../assets/el3.jpg";
import El4 from "../../assets/el4.jpg";
import El5 from "../../assets/el5.jpg";
import El6 from "../../assets/el6.jpg";

const images = [El1, El2, El3, El4, El5, El6];

interface People {
  peopleStories: {
    login: { username: string };
    name: { first: string; last: string };
    picture: { thumbnail: string };
  }[];
}

const ReelsMain: React.FC<{ isClicked: string }> = ({ isClicked }) => {
  const [listPeopleStories, setListPeopleStories] = useState<
    People["peopleStories"]
  >([]);
  const [reelsElements, setReelsElements] =
    useState<ReelsInterface["reelsInterfaceArr"]>(reelsData);

  useEffect(() => {
    const fetchAPIstories = async () => {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json();
      if (!response.ok) throw new Error(`Error ${response.status}}`);
      setListPeopleStories(data.results);
    };
    fetchAPIstories();
  }, []);

  return (
    <>
      <div className="reels-main grid">
        {isClicked === "stories" ? (
          <div className="reels-main__element">
            <img src={Woman} alt="reels" className="reels-main__img" />
            <FaPlusCircle className="reels-main__plus-icon" />
            <p className="reels-main__text--black">Create stories</p>
          </div>
        ) : (
          <div className="reels-main__element--reels">
            <BiMoviePlay className="reels-main__watch-icon" />
            <BsPlusLg className="reels-main__plus-icon--second" />
            <p className="reels-main__text--white">Create reels</p>
          </div>
        )}

        {isClicked === "stories"
          ? listPeopleStories.map((people, index) => {
              const { login, name, picture } = people;
              return (
                <div className="reels-main__element" key={login.username}>
                  <img
                    src={picture.thumbnail}
                    alt="photo-person"
                    className="reels-main__avatar"
                  />
                  <img
                    src={images[index]}
                    alt="reels"
                    className="reels-main__img"
                  />
                  <p className="reels-main__text--white">
                    {name.first} {name.last}
                  </p>
                </div>
              );
            })
          : reelsData.map((element) => {
              const { id, thumbnail } = element;
              return (
                <div className="reels-main__element" key={id}>
                  <img
                    src={thumbnail}
                    alt="reels"
                    className="reels-main__img"
                  />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default ReelsMain;

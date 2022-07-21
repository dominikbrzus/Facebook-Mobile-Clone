import Photo1 from "../../assets/photo1.jpg";
import Photo2 from "../../assets/photo2.jpg";
import Photo3 from "../../assets/photo3.jpg";
import Photo4 from "../../assets/photo4.jpg";
import Photo5 from "../../assets/photo5.jpg";
import Photo6 from "../../assets/photo6.jpg";

export interface ReelsInterface {
  reelsInterfaceArr: {
    id: number;
    thumbnail: string;
  }[];
}

export const reelsData = [
  { id: 1, thumbnail: Photo1 },
  { id: 2, thumbnail: Photo2 },
  { id: 3, thumbnail: Photo3 },
  { id: 4, thumbnail: Photo4 },
  { id: 5, thumbnail: Photo5 },
  { id: 6, thumbnail: Photo6 },
];

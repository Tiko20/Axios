import "./Component.css";
import { getImgesService } from "../../redux/services";
import { refrehImgaesAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Card } from "./Card";

export const Images = () => {
  const dispatch = useDispatch();
  const nkarner = useSelector((state) => state?.nkar?.data);
  console.log(nkarner);
  const getImages = () => {
    getImgesService();
    dispatch(refrehImgaesAction());
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="users">
      {nkarner?.map((val, ind) => (
          // <div key={ind} className="cont">
          //   {val.author}
          //   <img src={val.download_url} className="nkarner" />
          // </div>
          <Card name={val.author} url={val.download_url} index={ind}/>
          
      ))}
    </div>
  );
};

import { useState } from "react";
import useShowToast from "./useShowToast";
const usePreviewImage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const showToast = useShowToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      //add event listener to loadend event to read the file
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      //read the file as date url to preview it

      reader.readAsDataURL(file);
    } else {
      showToast("invalid file type", "please select an image file", "error");
      setImage(null);
    }
  };

  return { handleImageChange, imgUrl, setImgUrl };
};

export default usePreviewImage;

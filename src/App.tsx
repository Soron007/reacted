import Star from "./components/star-rating/Star";
import "./App.css";
import DropDown from "./components/dropdown/DropDown";
import { useState } from "react";
import Color from "./components/color/Color";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/loadMore/LoadMore";

const App = () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [stars, setStars] = useState(0);
  const [open, setOpen] = useState(false);

  const handleStars = (item: number) => {
    setStars(item);
    setOpen(false);
  };

  return (
    <>
      {/* <div className="App"> */}
      {/* random color component */}
      {/* <div
          className="color-div
      "
        >
          <Color />
        </div>
        <div className="star-div">
          <Star noOfStars={stars} />
        </div>

        <div className="content">
          <DropDown
            content={
              <>
                {items.map((item) => (
                  <div
                    className="dropdown-item"
                    key={item}
                    onClick={() => handleStars(item)}
                  >
                    {`${item > 1 ? `${item} stars` : `${item} star`}`}
                  </div>
                ))}
              </>
            }
            open={open}
            setOpen={setOpen}
            stars={stars}
          />
        </div>
      </div>
      <div>
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"6"}
          page="1"
        />
      </div> */}

      <LoadMore />
      {/* </div> */}
    </>
  );
};

export default App;

import { h1 } from "framer-motion/client";

function SliderData() {
  //fetch Data
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return arr.map((el, index) => {
    return (
      <div
        key={index}
        className="panel flex items-center justify-center w-screen h-screen bg-red-500"
      >
        <h1>ADD collaborated brands / some singificant shoot photos</h1>
        <p className="text-white text-2xl flex items-center justify-center">
          {el}
        </p>
      </div>
    );
  });
}

export default SliderData;

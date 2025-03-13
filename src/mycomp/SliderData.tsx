import img1 from "@/assets/M&c/1.jpeg";
import img2 from "@/assets/M&c/2.jpeg";
import img3 from "@/assets/M&c/3.jpeg";
import img4 from "@/assets/M&c/4.jpeg";
import img5 from "@/assets/M&c/5.jpeg";
import img6 from "@/assets/M&c/6.jpeg";
import img7 from "@/assets/M&c/7.jpeg";
import Image from "next/image";

function SliderData() {
  //fetch Data
  const arr = [img1, img2, img3, img4, img5, img6, img7];
  return arr.map((el, index) => {
    return (
      <div
        key={index}
        className="panel flex items-center justify-center w-screen h-screen bg-red-500"
      >
        <Image src={el} className="w-full h-full" alt="f" />

        <p className="text-white text-2xl flex items-center justify-center"></p>
      </div>
    );
  });
}

export default SliderData;

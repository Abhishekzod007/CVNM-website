import { useEffect, useState } from "react";

const slides = [
  <div
    className="w-screen h-screen mobile:h-[38vh] bg-[url('https://imgs.search.brave.com/-Jfcq2fVUs5AHB9u_hftrHExgkw34coDzPBVPbZ4ry4/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly93d3cu/bmF2YXJyb2NvbGxl/Z2UuZWR1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE0LzAyL2Nv/bXB1dGVyLWxhYi5q/cGc')] 
    bg-bottom bg-cover bg-fixed flex flex-col justify-center items-center relative"
  >
    <div className="w-full h-full absolute top-0 left-0 bg-[#00000055]" />
    <div className="text-center z-[2] flex flex-col items-center gap-y-6">
      <h1 className="font-allura text-4xl mobile:text-2xl text-back">
        Computer Vision and multimedia
      </h1>
      <p className="font-light text-sm mobile:hidden text-back bg-background bg-opacity-30 px-10 py-6 w-2/3 rounded-lg" style={{ textShadow: '0px 0px 5px #000000' }}>
        Vision and Image Processing Lab is a research facility in the Electrical Engineering Department dedicated to Deep Learning, haptics, computer vision and image processing applications. Research activities include: Co-segmentation, Re-identification, Learning strategies in Deep learning, Anomaly Detection, Data compression, Few shot learning, Distance metric learning, Haptic rendering, Haptic communication and Haptic perception.
      </p>
    </div>
  </div>,
  <div className="w-screen h-screen mobile:h-[38vh]">
    <img
      src="https://imgs.search.brave.com/4faTu0jI9zAlHaWWvp-JqT31Y1ZrZWQpyOF1APd0oqw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzkwMDAvMSpT/WVVHaUpsdVpOTUJz/VUl4NkNzZC1RLmpw/ZWc"
      alt="book"
      className="w-full h-full object-cover"
    />
    <div className="absolute z-[1] top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #00000077)' }} />
  </div>,
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (slide < 0) {
      setSlide(slides.length - 1);
    }
    if (slide > slides.length - 1) {
      setSlide(0);
    }
  }, [slide]);

  // setInterval(() => {
  //   setSlide(slide + 1)
  // }, 5000)

  return (
    <section id="hero" className="h-screen mobile:h-[38vh] relative bg-cover overflow-hidden">
      <div
        className="flex duration-1000"
        style={{
          transform: `translateX(-${(slide / slides.length) * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slideItem) => slideItem)}
      </div>
      <div className="p-page absolute w-full top-1/2 -translate-y-1/2 left-0 flex justify-between font-bold text-back z-[2]">
        <button
          onClick={() => {
            setSlide(slide - 1);
          }}
        >
          {" "}
          <span className="material-icons text-3xl">&#xe5e0;</span>{" "}
        </button>
        <button
          onClick={() => {
            setSlide(slide + 1);
          }}
        >
          {" "}
          <span className="material-icons text-3xl">&#xe5e1;</span>{" "}
        </button>
      </div>
    </section>
  );
}
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopup, setIsPopup] = useState(false);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const togglePopup = () => {
    setIsPopup(!isPopup);
  };

  return (
    <>
      <div className="relative w-full h-80 md:h-96 lg:h-120 border-4 border-teal-500 rounded-lg">
        <div
          className="absolute inset-0 flex items-center justify-between"
          style={{ pointerEvents: "none" }}
        >
          {/* Empty divs for spacing */}
          <div className="w-16"></div>
          <div className="w-16"></div>
        </div>
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={togglePopup}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
        {/* Navigation buttons for small carousel */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 text-white bg-teal-600 bg-opacity-70 p-2 rounded-full z-10"
        >
          &#8249;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 text-white bg-teal-600 bg-opacity-70 p-2 rounded-full z-10"
        >
          &#8250;
        </button>
      </div>

      {isPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-11/12 max-w-9xl h-auto border-4 border-teal-500 rounded-lg">
            {/* Exit button positioned outside the popup */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-2xl z-10 text-white bg-teal-500 rounded-full p-2"
            >
              <FaTimes />
            </button>
            <Image
              src={images[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              layout="responsive"
              width={1200} // Set a suitable width
              height={675} // Set a suitable height
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Navigation buttons for large carousel */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 text-white bg-teal-600 bg-opacity-70 p-2 rounded-full z-10"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 text-white bg-teal-600 bg-opacity-70 p-2 rounded-full z-10"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCarousel;

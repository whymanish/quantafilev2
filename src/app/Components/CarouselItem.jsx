const CarouselItem = ({ content, isActive }) => {
    return (
      <div
        className={`h-full w-full transition-transform duration-300 transform ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="h-full flex items-center justify-center bg-blue-500 text-white text-4xl">
          {content}
        </div>
      </div>
    );
  };
  
  export default CarouselItem;
  
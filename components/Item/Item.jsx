import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item w-full p-2 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="w-full flex justify-around">
      <div className="aspect-square overflow-hidden rounded-lg ">
          <img 
            src={props.image} 
            alt={props.name}
            className="w-full h-full object-contain object-center p-1 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
      </Link>
      <div className="mt-3 space-y-1">
        <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
          {props.name}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            ${props.new_price}
          </span>
          {props.old_price && (
            <span className="text-sm sm:text-base text-gray-500 line-through">
              ${props.old_price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
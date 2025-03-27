import new_collection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="newcollection flex flex-col items-center gap-[10px] mb-[100px] ">
      <h1 className="text-[#171717] text-[50px] font-semibold ">
        NEW COLLECTION
      </h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />
      <div className="collections grid grid-cols-4 mt-[50px] gap-[30px] ">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;

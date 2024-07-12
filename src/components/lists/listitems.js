import { fruits } from "./fruitData";

const ListItems = () => {
  return (
    //---------------------day-7---------------------------------------------
    // <div>
    //     <li>Apple</li>
    //     <li>Banana</li>
    //     <li>Watermelon</li>
    //     <li>Kiwi</li>
    // </div>
    //-------------------------DAY-8---------------------------------
    <>
      {fruits.map((eachFruit) => (
        <li key={eachFruit.id} >{eachFruit.name}</li>
      ))}
    </>
  );
};

export default ListItems;

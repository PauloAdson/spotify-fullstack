import React from "react";
import SingleItem from "../SingleItem/SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //   console.log(title, items);

  return (
    <>
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title} populares</h2>
          <Link to={path} className="item-list__header">
            Mostrar tudo
          </Link>
        </div>

        <div className="item-list__container">
          {itemsArray
            .filter((CurrentValue, index) => index < items)
            .map((CurrObj, index) => (
              <SingleItem
                // id={CurrObj.id}
                // name={CurrObj.name}
                // image={CurrObj.image}
                // banner={CurrObj.banner}
                idPath={idPath}
                {...CurrObj}
                key={`${title}-${index}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;

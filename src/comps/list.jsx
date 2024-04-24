import React from "react";

export default function List({
  children,
  listOfItems, // Array containing the items to be displayed in the list. Each item will be passed individually to the Component
  classNames = "", // Additional CSS classes to apply to the component
  doesItemHaveID = false, // Boolean indicating whether each item in the list has a unique ID
}) {
  return (
    <>
      <div className={"divide-y !m-0 !p-0 bg-white" + classNames}>
        {listOfItems?.map((item, index) =>
          React.cloneElement(children, {
            key: doesItemHaveID ? item.id : index,
            ...item,
          })
        )}
      </div>
    </>
  );
}

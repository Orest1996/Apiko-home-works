import React, { useState } from 'react';
import { observer } from "mobx-react";
import Header from "./Header";
import Categories from "./Categories";
import CategoryDetails from "./CategoryDetails";
import { rootStore as store } from "../stores/RootStore";

function App() {
    const [categoryNumber, setCategoryNumber] = useState(0);
    const categoryDetails = store.groups.list[categoryNumber];

  return (
    <div className="App">
      <Header />
      <div className="categories-wrapper">
          <Categories
              categoryNumber={categoryNumber}
              setCategoryNumber={setCategoryNumber}
          />
          <CategoryDetails
              categoryDetails={categoryDetails || null}
              categoryNumber={categoryNumber || 0}
          />
      </div>
    </div>
  );
}

export default observer(App);

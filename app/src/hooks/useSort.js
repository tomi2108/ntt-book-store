import { useState } from "react";

export const useSort = () => {
  const [sort,setSort] = useState({ value:null,titleOrder:0,authorOrder:0,priceOrder:0 });

  const nextTitleOrder = sort.titleOrder === 0 ? 1 : sort.titleOrder === 1 ? -1 : 0;
  const nextAuthorOrder = sort.authorOrder === 0 ? 1 : sort.authorOrder === 1 ? -1 : 0;
  const nextPriceOrder = sort.priceOrder === 0 ? 1 : sort.priceOrder === 1 ? -1 : 0;

  const sortByTitle = () => setSort({ value:"title", titleOrder:nextTitleOrder, authorOrder:0, priceOrder:0 });
  const sortByAuthor = () => setSort({ value:"author", authorOrder:nextAuthorOrder, titleOrder:0, priceOrder:0 });
  const sortByPrice = () => setSort({ value:"price", priceOrder:nextPriceOrder, titleOrder:0, authorOrder:0 });

  const handleTitleSort = (a,b) =>
    sort.titleOrder === 1 ?
      a.title.localeCompare(b.title) :
      sort.titleOrder === -1 ?
        b.title.localeCompare(a.title) : 0;

  const handleAuthorNameSort = (a,b) =>
    sort.authorOrder === 1 ?
      a.Author.name.localeCompare(b.Author.name) :
      sort.authorOrder === -1 ?
        b.Author.name.localeCompare(a.Author.name) : 0;

  const handlePriceSort = (a,b) =>
    sort.priceOrder === 1 ?
      a.price - b.price :
      sort.priceOrder === -1 ?
        b.price-a.price : 0;

  const sortFunc = (bookA,bookB) => {
    if(!sort.value) return 0;
    if(sort.value==="title") return handleTitleSort(bookA,bookB);
    if(sort.value==="author") return handleAuthorNameSort(bookA,bookB);
    if(sort.value==="price") return handlePriceSort(bookA,bookB);
  };

  const sortOrder =
    sort.value === "title" ? sort.titleOrder :
      sort.value === "author" ? sort.authorOrder :
        sort.value === "price" ? sort.priceOrder : null;


  return { sortFunc, sortByTitle, sortByAuthor, sortByPrice,sortValue:sort.value,sortOrder };
};
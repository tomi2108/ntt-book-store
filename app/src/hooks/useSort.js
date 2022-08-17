import { useState } from "react";

const SORT_OPTIONS = {
  ascending: 1,
  notSorted: 0,
  descending: -1
};

export const useSort = () => {
  const [sort, setSort] = useState({
    value: null,
    titleOrder: SORT_OPTIONS.notSorted,
    authorOrder: SORT_OPTIONS.notSorted,
    priceOrder: SORT_OPTIONS.notSorted
  });

  const nextTitleOrder =
    sort.titleOrder === SORT_OPTIONS.notSorted
      ? SORT_OPTIONS.ascending
      : sort.titleOrder === SORT_OPTIONS.ascending
        ? SORT_OPTIONS.descending
        : SORT_OPTIONS.notSorted;

  const nextAuthorOrder =
    sort.authorOrder === SORT_OPTIONS.notSorted
      ? SORT_OPTIONS.ascending
      : sort.authorOrder === SORT_OPTIONS.ascending
        ? SORT_OPTIONS.descending
        : SORT_OPTIONS.notSorted;

  const nextPriceOrder =
    sort.priceOrder === SORT_OPTIONS.notSorted
      ? SORT_OPTIONS.ascending
      : sort.priceOrder === SORT_OPTIONS.ascending
        ? SORT_OPTIONS.descending
        : SORT_OPTIONS.notSorted;

  const sortByTitle = () =>
    setSort({
      value: "title",
      titleOrder: nextTitleOrder,
      authorOrder: SORT_OPTIONS.notSorted,
      priceOrder: SORT_OPTIONS.notSorted
    });

  const sortByAuthor = () =>
    setSort({
      value: "author",
      authorOrder: nextAuthorOrder,
      titleOrder: SORT_OPTIONS.notSorted,
      priceOrder: SORT_OPTIONS.notSorted
    });

  const sortByPrice = () =>
    setSort({
      value: "price",
      priceOrder: nextPriceOrder,
      titleOrder: SORT_OPTIONS.notSorted,
      authorOrder: SORT_OPTIONS.notSorted
    });

  const handleTitleSort = (a, b) =>
    sort.titleOrder === SORT_OPTIONS.ascending
      ? a.title.localeCompare(b.title)
      : sort.titleOrder === SORT_OPTIONS.descending
        ? b.title.localeCompare(a.title)
        : SORT_OPTIONS.notSorted;

  const handleAuthorNameSort = (a, b) =>
    sort.authorOrder === SORT_OPTIONS.ascending
      ? a.Author.name.localeCompare(b.Author.name)
      : sort.authorOrder === SORT_OPTIONS.descending
        ? b.Author.name.localeCompare(a.Author.name)
        : SORT_OPTIONS.notSorted;

  const handlePriceSort = (a, b) =>
    sort.priceOrder === SORT_OPTIONS.ascending
      ? a.price - b.price
      : sort.priceOrder === SORT_OPTIONS.descending
        ? b.price - a.price
        : SORT_OPTIONS.notSorted;

  const sortFunc = (bookA, bookB) => {
    if (!sort.value) return SORT_OPTIONS.notSorted;
    if (sort.value === "title") return handleTitleSort(bookA, bookB);
    if (sort.value === "author") return handleAuthorNameSort(bookA, bookB);
    if (sort.value === "price") return handlePriceSort(bookA, bookB);
  };

  const sortOrder =
    sort.value === "title"
      ? sort.titleOrder
      : sort.value === "author"
        ? sort.authorOrder
        : sort.value === "price"
          ? sort.priceOrder
          : null;

  return {
    sortFunc,
    sortByTitle,
    sortByAuthor,
    sortByPrice,
    sortValue: sort.value,
    sortOrder
  };
};

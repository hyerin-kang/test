"use client";

import React from "react";

const SearchPage = ({ searchParams }) => {
  const params = React.use(searchParams);
  const query = params.query;

  return <div>검색어 : {query}</div>;
};

export default SearchPage;

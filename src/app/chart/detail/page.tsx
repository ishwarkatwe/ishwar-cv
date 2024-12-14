import React, { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

const SearchPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;

import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Next from "../assets/Next";
import Prev from "../assets/Prev";

type Select = {
  selected: number;
};
// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  //
  const handlePageClick = (event: Select) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <Wrapp>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Next color="#a0a0a0" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<Prev color="#a0a0a0" />}
        renderOnZeroPageCount={null}
        containerClassName="pagenation"
      />
    </Wrapp>
  );
}

export default PaginatedItems;

const Wrapp = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  padding: 10px;
  & .pagenation {
    width: inherit;
    list-style: none;
    display: flex;
    gap: 0 24px;
    border: none;
    font-size: 14px;
    width: auto;
    height: auto;
    & li {
      display: block;
      position: static;
    }
  }
`;

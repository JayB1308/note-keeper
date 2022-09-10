import { Dispatch, SetStateAction, useState } from "react";
import {
  ActivePageNumbers,
  PageChangeButtons,
  PageNumbers,
  PaginationContainer,
  PaginationMenu,
} from "../styles/Pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSpring } from "react-spring";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<any>>;
}

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [hoverLeft, setHoverLeft] = useState<boolean>(false);
  const [hoverRight, setHoverRight] = useState<boolean>(false);
  const [hoverNumber, setHoverNumber] = useState<boolean>(false);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const animatePageChangerLeft = useSpring({
    marginTop: hoverLeft ? "-0.75rem" : "0rem",
    color: hoverLeft ? "#252525" : "#ffb703",
    backgroundColor: hoverLeft ? "#ffb703" : "#252525",
  });
  const animatePageChangerRight = useSpring({
    marginTop: hoverRight ? "-0.75rem" : "0rem",
    color: hoverRight ? "#252525" : "#ffb703",
    backgroundColor: hoverRight ? "#ffb703" : "#252525",
  });
  const animatePageNumber = useSpring({
    color: hoverNumber ? "#252525" : "#ffb703",
    backgroundColor: hoverNumber ? "#ffb703" : "#252525",
  });

  return (
    <PaginationContainer>
      <PaginationMenu>
        <PageChangeButtons
          style={animatePageChangerLeft}
          onMouseEnter={() => {
            setHoverLeft(true);
          }}
          onMouseLeave={() => {
            setHoverLeft(false);
          }}
          onClick={(e) => {
            e.preventDefault();
            prevPage();
          }}
        >
          <BsChevronLeft />
        </PageChangeButtons>
        {pageNumbers.map((pgNum) => {
          return currentPage === pgNum ? (
            <ActivePageNumbers
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(pgNum);
              }}
              onMouseLeave={() => {
                setHoverNumber(false);
              }}
            >
              {pgNum}
            </ActivePageNumbers>
          ) : (
            <PageNumbers
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(pgNum);
              }}
              onMouseEnter={() => {
                setHoverNumber(true);
              }}
              onMouseLeave={() => {
                setHoverNumber(false);
              }}
              style={animatePageNumber}
            >
              {pgNum}
            </PageNumbers>
          );
        })}
        <PageChangeButtons
          style={animatePageChangerRight}
          onMouseEnter={() => {
            setHoverRight(true);
          }}
          onMouseLeave={() => {
            setHoverRight(false);
          }}
          onClick={(e) => {
            e.preventDefault();
            nextPage();
          }}
        >
          <BsChevronRight />
        </PageChangeButtons>
      </PaginationMenu>
    </PaginationContainer>
  );
};

export default Pagination;

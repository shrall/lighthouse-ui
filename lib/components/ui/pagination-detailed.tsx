"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronLeftOutline } from "./icon/ChevronLeftOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";
import { DoubleChevronLeftOutline } from "./icon/DoubleChevronLeftOutline";
import { DoubleChevronRightOutline } from "./icon/DoubleChevronRightOutline";
import { Button } from "./button";
import useWindowSize from "@/hooks/useWindowSize";

interface PaginationDetailedProps extends React.HTMLAttributes<HTMLElement> {
  contentProps?: React.ComponentProps<"ul">;
  locale?: "en" | "id";
  showLabel?: boolean;
  pageSize: number;
  pageNumber: number;
  setPageNumber: (page: number) => void;
  totalPage: number;
  totalData: number;
}

const PaginationDetailed = React.forwardRef<
  HTMLElement,
  PaginationDetailedProps
>(
  (
    {
      className,
      locale = "en",
      showLabel = true,
      pageSize,
      pageNumber,
      setPageNumber,
      totalPage,
      totalData,
      contentProps,
      ...props
    },
    ref,
  ) => {
    const { width } = useWindowSize();

    React.useEffect(() => {
      setPageNumber(1);
    }, [pageSize, totalData]);

    const renderPageNumbers = () => {
      if (!width) return;
      const pageNumbers = [];
      if (totalPage <= (width < 768 ? 5 : 7)) {
        //NOTE - Show all pages if total pages are 7 or less
        for (let i = 1; i <= totalPage; i++) {
          pageNumbers.push(
            <PaginationButton
              key={i}
              onClick={() => setPageNumber(i)}
              aria-current={pageNumber === i ? "page" : undefined}
              active={pageNumber === i}
            >
              {i}
            </PaginationButton>,
          );
        }
      } else {
        //NOTE - Always show first page
        pageNumbers.push(
          <PaginationButton
            key={1}
            onClick={() => setPageNumber(1)}
            aria-current={pageNumber === 1 ? "page" : undefined}
            active={pageNumber === 1}
          >
            1
          </PaginationButton>,
        );

        //NOTE - Set start and end page number
        let start = 2;
        let end = totalPage - 1;

        //NOTE - Show ellipsis if page number is greater than 4 and set start page number to current page - 1
        if (pageNumber > (width < 768 ? 2 : 4)) {
          start = pageNumber - (width < 768 ? 0 : 1);
          pageNumbers.push(
            <PaginationButton key="ellipsis1" disabled>
              ...
            </PaginationButton>,
          );
        }
        //NOTE - Set end page number to 5 if page number is less than or equal to 4
        if (pageNumber <= (width < 768 ? 2 : 4)) {
          end = width < 768 ? 3 : 5;
        }
        //NOTE - Set end page number to current page + 1 if page number is greater than 4 and less than total page - 3
        if (
          pageNumber > (width < 768 ? 2 : 4) &&
          pageNumber < totalPage - (width < 768 ? 1 : 3)
        ) {
          end = pageNumber + (width < 768 ? 0 : 1);
        }
        //NOTE - Set start page number to total page - 4 if page number is greater than or equal to total page - 3
        if (pageNumber >= totalPage - (width < 768 ? 1 : 3)) {
          start = totalPage - (width < 768 ? 2 : 4);
        }

        //NOTE - Loop through page numbers and add to page numbers array from start to end
        for (let i = start; i <= end; i++) {
          pageNumbers.push(
            <PaginationButton
              key={i}
              onClick={() => setPageNumber(i)}
              aria-current={pageNumber === i ? "page" : undefined}
              active={pageNumber === i}
            >
              {i}
            </PaginationButton>,
          );
        }

        //NOTE - Show ellipsis if page number is less than total page - 3
        if (pageNumber < totalPage - (width < 768 ? 1 : 3)) {
          pageNumbers.push(
            <PaginationButton key="ellipsis2" disabled>
              ...
            </PaginationButton>,
          );
        }

        //NOTE - Always show last page
        pageNumbers.push(
          <PaginationButton
            key={totalPage}
            onClick={() => setPageNumber(totalPage)}
            aria-current={pageNumber === totalPage ? "page" : undefined}
            active={pageNumber === totalPage}
          >
            {totalPage}
          </PaginationButton>,
        );
      }
      return pageNumbers;
    };

    return (
      <nav
        role="navigation"
        aria-label="pagination"
        className={cn(
          "lui-flex lui-w-full lui-items-center lui-justify-end",
          className,
        )}
        ref={ref}
        {...props}
      >
        {showLabel && (
          <div className="lui-hidden lui-flex-1 lui-text-start lui-text-base md:lui-block">
            {locale === "en" ? "Show data " : "Menampilkan data "}
            {(pageNumber - 1) * pageSize + 1}-
            {pageSize * pageNumber > totalData
              ? totalData
              : pageSize * pageNumber}{" "}
            {locale === "en" ? "of" : "dari"} {totalData}
          </div>
        )}
        <PaginationContent {...contentProps}>
          <PaginationButton
            onClick={() => setPageNumber(1)}
            disabled={pageNumber === 1}
          >
            <DoubleChevronLeftOutline
              aria-label="Go to first page"
              className={cn(
                "lui-size-6",
                pageNumber !== 1 && "lui-text-ocean-primary-10",
              )}
            />
          </PaginationButton>
          <PaginationButton
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber === 1}
          >
            <ChevronLeftOutline
              aria-label="Go to previous page"
              className={cn(
                "lui-size-6",
                pageNumber !== 1 && "lui-text-ocean-primary-10",
              )}
            />
          </PaginationButton>
          {renderPageNumbers()}
          <PaginationButton
            onClick={() => setPageNumber(Math.min(totalPage, pageNumber + 1))}
            disabled={pageNumber === totalPage}
          >
            <ChevronRightOutline
              aria-label="Go to next page"
              className={cn(
                "lui-size-6",
                pageNumber !== totalPage && "lui-text-ocean-primary-10",
              )}
            />
          </PaginationButton>
          <PaginationButton
            onClick={() => setPageNumber(totalPage)}
            disabled={pageNumber === totalPage}
          >
            <DoubleChevronRightOutline
              aria-label="Go to last page"
              className={cn(
                "lui-size-6",
                pageNumber !== totalPage && "lui-text-ocean-primary-10",
              )}
            />
          </PaginationButton>
        </PaginationContent>
      </nav>
    );
  },
);
PaginationDetailed.displayName = "PaginationDetailed";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "lui-flex lui-flex-row lui-items-center lui-gap-1",
      className,
    )}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

interface PaginationButtonProps extends React.ComponentProps<"button"> {
  active?: boolean;
}

const PaginationButton = React.forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ className, active, ...props }, ref) => (
  <li>
    <Button
      variant="ghost"
      size="large"
      className={cn(
        "lui-min-h-8 lui-w-fit lui-min-w-8 lui-rounded-[0.25rem] lui-p-1 lui-font-bold",
        "lui-text-ocean-dark-10 hover:lui-text-ocean-dark-20 disabled:lui-text-ocean-light-40",
        active && "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
        className,
      )}
      ref={ref}
      {...props}
    />
  </li>
));
PaginationButton.displayName = "PaginationButton";

export { PaginationDetailed, PaginationContent, PaginationButton };

import * as React from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { Input } from "./input";
import { Icon } from "./icon";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  texts?: {
    showItems?: string;
    data?: string;
    of?: string;
    go?: string;
    goToPage?: string;
  };
  isLoading?: boolean;
  isEmpty?: boolean;
  pageSize: number;
  setPageSize: (size: number) => void;
  pageSizes?: number[];
  pageNumber: number;
  setPageNumber: (page: number) => void;
  searchPageNumber: number | undefined;
  setSearchPageNumber: (page: number | undefined) => void;
  totalPage: number;
  totalData: number;
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      texts = {
        showItems: "Show items",
        data: "Data",
        of: "of",
        go: "Go",
        goToPage: "Go to page",
      },
      isLoading,
      isEmpty = false,
      pageSize,
      setPageSize,
      pageSizes = [10, 25, 50, 100],
      pageNumber,
      setPageNumber,
      searchPageNumber,
      setSearchPageNumber,
      totalPage,
      totalData,
      ...props
    },
    ref,
  ) => {
    React.useEffect(() => {
      setPageNumber(1);
    }, [pageSize]);

    return (
      <div
        className={cn(
          "lui-flex lui-items-center lui-p-4 lui-text-sm md:lui-text-base",
          (isLoading || isEmpty) && "lui-pt-5",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="lui-hidden lui-flex-1 lui-text-sm md:lui-block">
          {isLoading ? (
            <Skeleton className="lui-h-4 lui-w-16 lui-rounded-full" />
          ) : (
            !isEmpty && (
              <DropdownMenu>
                <DropdownMenuTrigger className="lui-group lui-flex lui-items-center lui-gap-x-1 lui-rounded-xl lui-border lui-border-ocean-light-40 lui-p-3 lui-transition-colors hover:lui-border-ocean-primary-10 data-[state=open]:lui-border-ocean-primary-10">
                  <span className="lui-hidden xl:lui-block">
                    {texts.showItems}
                  </span>
                  <span className="lui-font-semibold">{pageSize}</span>
                  <Icon
                    name="chevron-down-outline"
                    className="lui-transition-all group-data-[state=open]:lui-rotate-180"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="lui-divide-y lui-divide-solid lui-border-ocean-light-30 lui-p-0"
                >
                  {pageSizes.map((size) => (
                    <DropdownMenuItem
                      key={size}
                      className={cn(
                        "lui-justify-center hover:lui-bg-ocean-light-30",
                        pageSize === size && "lui-bg-ocean-secondary-10",
                      )}
                      onClick={() => {
                        setPageSize(size);
                      }}
                    >
                      {size}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )}
        </div>

        <div className="lui-flex lui-w-full lui-items-center lui-gap-x-3 md:lui-w-auto">
          {isLoading ? (
            <Skeleton className="lui-mr-auto lui-h-4 lui-w-48 lui-rounded-full" />
          ) : (
            !isEmpty && (
              <span className="lui-mr-auto md:lui-mr-0">
                {texts.data}: {(pageNumber - 1) * pageSize + 1}-
                {pageSize * pageNumber > totalData
                  ? totalData
                  : pageSize * pageNumber}{" "}
                {texts.of} {totalData}
              </span>
            )
          )}
          {isLoading ? (
            <div className="lui-flex lui-items-center lui-gap-2">
              <Skeleton className="size-4 lui-rounded-sm" />
              <Skeleton className="size-4 lui-rounded-sm" />
            </div>
          ) : (
            !isEmpty && (
              <>
                <Button
                  className="lui-min-w-10 lui-max-w-10 lui-rounded-full lui-bg-ocean-secondary-10 lui-p-0 lui-text-ocean-primary-10 hover:lui-text-white disabled:lui-bg-ocean-light-20 disabled:lui-text-ocean-light-40"
                  onClick={() => setPageNumber(pageNumber - 1)}
                  disabled={pageNumber === 1}
                >
                  <Icon name="chevron-left-outline" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="lui-rounded-lg lui-border lui-border-ocean-light-40 lui-px-3 lui-py-2 lui-transition-colors hover:lui-border-ocean-primary-10 data-[state=open]:lui-border-ocean-primary-10">
                    {pageNumber}/{totalPage}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="lui-flex lui-items-center lui-justify-center lui-gap-x-5 lui-px-5 lui-py-3"
                  >
                    <span className="lui-text-sm lui-text-ocean-primary-10">
                      {texts.goToPage}
                    </span>
                    <div className="lui-w-10 lui-font-semibold lui-text-ocean-primary-10">
                      <Input
                        className="lui-rounded-lg lui-border lui-border-ocean-light-40 lui-bg-white lui-p-2 lui-text-center"
                        input={{ className: "lui-bg-white" }}
                        value={searchPageNumber}
                        onChange={(e) =>
                          setSearchPageNumber(
                            Number(e.target.value) || undefined,
                          )
                        }
                      />
                    </div>
                    <Button
                      className="lui-min-w-0"
                      onClick={() =>
                        searchPageNumber !== undefined &&
                        searchPageNumber >= 1 &&
                        searchPageNumber <= totalPage &&
                        setPageNumber(searchPageNumber)
                      }
                      disabled={
                        searchPageNumber === undefined ||
                        searchPageNumber < 1 ||
                        searchPageNumber > totalPage
                      }
                    >
                      {texts.go}
                    </Button>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  className="lui-min-w-10 lui-max-w-10 lui-rounded-full lui-bg-ocean-secondary-10 lui-p-0 lui-text-ocean-primary-10 hover:lui-text-white disabled:lui-bg-ocean-light-20 disabled:lui-text-ocean-light-40"
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={pageNumber === totalPage}
                >
                  <Icon name="chevron-right-outline" />
                </Button>
              </>
            )
          )}
        </div>
      </div>
    );
  },
);
Pagination.displayName = "Pagination";

export { Pagination };

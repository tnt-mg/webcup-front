import { useCallback } from "react"

export const Pagination = ({
  meta,
  onPageChanged = (number: number) => console.log(number),
}: any) => {
  if (!meta || meta.pagination.pageCount <= 1) {
    return <></>
  }
  const { pageCount, page } = meta.pagination
  const handleClick = useCallback(
    (event: any) => {
      const changeTo = Number(event.currentTarget.getAttribute("data-page"))
      if (page !== changeTo) {
        onPageChanged(changeTo)
      }
    },
    [page]
  )
  return (
    <div className="btn-group">
      {[...Array(pageCount).keys()].map((d) => {
        return (
          <button
            onClick={handleClick}
            data-page={d + 1}
            key={`pagination-${d}`}
            className={`btn btn-sm ${page === d + 1 ? "btn-active" : ""}`}
          >
            {d + 1}
          </button>
        )
      })}
    </div>
  )
}

import "./Pagination.css";

const Pagination = ({ page, setPage, total }) => (
  <div className="pager">
    <button disabled={page <= 1}     onClick={() => setPage(p => p - 1)}>Prev</button>
    <span>{page} / {total}</span>
    <button disabled={page >= total} onClick={() => setPage(p => p + 1)}>Next</button>
  </div>
);
export default Pagination;

function Pagination(props) {

  const {
    listData,
    handleClick,
  } = props

  return (
    <div className="pagination">
        <button onClick={() => handleClick(listData.previous, false)}>Previous</button>
        <button onClick={() => handleClick(listData.next, false)}>Next</button>
    </div>
  );
}

export default Pagination;

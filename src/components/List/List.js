import ListItem from './ListItem';
function List(props) {

  const {
    listData,
    handleClick,
  } = props

  return (
    <div className="List">
      {listData && listData.map(
        (datum, index) => 
        <ListItem
          key={index}
          itemInfo={datum}
          handleClick={handleClick} />)}
    </div>
  );
}

export default List;

import './ListItem.css';

function ListItem(props) {

  const {
    itemInfo,
    handleClick,
  } = props
  
  return (
    <div className="list-item" 
            onClick={() => handleClick(itemInfo.url, true)}>
      {itemInfo && (
        itemInfo.name
      )}
    </div>
  );
}

export default ListItem;

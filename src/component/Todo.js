function Todo({ item }) {
  //   console.log(item);
  //   const deleteItem = (index) => {
  //     console.log(index);
  //     // delete index[1][2]
  //   };
  return (
    <>
      {item.map((value, index) => {
        return (
          <div key={index}>
            <input type="checkbox" />
            <label>{value}</label>
            <button onClick={() => deleteById(index)}>DELETE</button>
           
          </div>
        );
      })}
    </>
  );
}
export default Todo;

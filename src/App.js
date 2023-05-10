import { useSelector, useDispatch } from "react-redux";
import { increase_count, decrease_count } from "./redux/actions/actionsCreator";






const App = () => {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase_count())
  }
  const handleDecrease = () => {
    dispatch(decrease_count())
  }
  return (
    <div className="App">
      <span>HI, dude! {count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default App;

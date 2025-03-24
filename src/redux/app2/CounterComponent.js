import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterComponent = () => {
  const count = useSelector((state) => state.counterSlice.ab);
  const dispatch = useDispatch();

  return (
    <div>
       <h1>this is counter component</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterComponent;

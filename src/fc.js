import { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { globalContext } from "./context/global";
import Storage from "./hoc/storage";

const Fc = (props) => {
  const context = useContext(globalContext);
  // const [state, setstate] = useState(initialState);

  // console.info(context);

  useEffect(() => {
    // didmount
    // console.info("mount");
    // console.info("----fc", localStorage.getItem("myName"));
  }, []);

  // useEffect(() => {
  //   console.info(11);
  //   return () => {
  //     console.info(222);
  //   };
  // }, [props.title]);

  return <div>Fc{props.dataState.num}</div>;
};

// 将redux里的state映射到props中
const mapStateToProps = (state) => {
  return {
    dataState: state,
  };
};

export default connect(mapStateToProps)(Fc);

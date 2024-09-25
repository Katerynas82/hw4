import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

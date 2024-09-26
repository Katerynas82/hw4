import { Toaster } from "react-hot-toast";

const ErrorMessage = () => {
  return (
    <div>
      <Toaster
        containerStyle={{
          top: 10,
          left: 720,
          bottom: 20,
          right: 20,
          zIndex: 1001,
        }}
      />
    </div>
  );
};

export default ErrorMessage;

import "./messages.css";

const ErrorText = ({ error }) => {
  return (
    <div>
      <p className="errorMessage">{error}</p>
    </div>
  );
};

export default ErrorText;

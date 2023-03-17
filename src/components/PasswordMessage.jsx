import "./messages.css";

const PasswordMessage = () => {
  return (
    <div>
      <div className="message">
        <span>Password must contain the following:</span>
        <p>
          A <b>lowercase</b> letter
        </p>
        <p>
          A <b>capital (uppercase)</b> letter
        </p>
        <p>
          A <b>number</b>
        </p>
        <p>
          Minimum <b>8 characters</b>
        </p>
      </div>
    </div>
  );
};

export default PasswordMessage;

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ErrorText from "./components/ErrorText";
import PasswordMessage from "./components/PasswordMessage";
import { validateEmail } from "./utils/utils";

const Form = () => {
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    password: "",
    Nok_firstName: "",
    Nok_lastName: "",
    Nok_middleName: "",
    Nok_email: "",
    Nok_phoneNumber: "",
    relationship: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    Nok_firstName: "",
    Nok_lastName: "",
    Nok_email: "",
    Nok_phoneNumber: "",
    relationship: "",
  });
  const showPassword = () => setShow(!show);
  const handleClick = () => setShowMessage(!showMessage);

  //binding with the state
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //validating the fields
  const handleOnBlur = (event) => {
    const { name, value } = event.target;

    if (name === "firstName") {
      if (value === "") {
        return setErrors({
          ...errors,
          firstName: "Field is Required",
        });
      }
      setErrors({
        ...errors,
        firstName: "",
      });
    }
    if (name === "lastName") {
      if (value === "") {
        return setErrors({
          ...errors,
          lastName: "Field is Required",
        });
      }
      setErrors({
        ...errors,
        lastName: "",
      });
    }
    if (name === "password") {
      if (value === "") {
        return setErrors({
          ...errors,
          password: "Field is Required",
        });
      }
      setErrors({
        ...errors,
        password: "",
      });
    }
    if (name === "relationship") {
      if (value === "") {
        return setErrors({
          ...errors,
          relationship: "Field is Required and must be a relation",
        });
      }
      setErrors({
        ...errors,
        relationship: "",
      });
    }
    if (name === "Nok_firstName") {
      if (value === "") {
        return setErrors({
          ...errors,
          Nok_firstName: "Field is Required",
        });
      }
      setErrors({
        ...errors,
        Nok_firstName: "",
      });
    }
    if (name === "Nok_lastName") {
      if (value === "") {
        return setErrors({
          ...errors,
          Nok_lastName: "Field is Required",
        });
      }
      setErrors({
        ...errors,
        Nok_lastName: "",
      });
    }

    if (name === "phoneNumber") {
      if (value === "") {
        return setErrors({
          ...errors,
          phoneNumber: "Field is Required",
        });
      }
      if (value.length !== 11) {
        return setErrors({
          ...errors,
          phoneNumber: "Phone number must include 11 characters",
        });
      }
      setErrors({ ...errors, phoneNumber: "" });
    }
    if (name === "Nok_phoneNumber") {
      if (value === "") {
        return setErrors({
          ...errors,
          Nok_phoneNumber: "Field is Required",
        });
      }
      if (value.length !== 11) {
        return setErrors({
          ...errors,
          Nok_phoneNumber: "Phone number must include 11 characters",
        });
      }
      setErrors({ ...errors, Nok_phoneNumber: "" });
    }

    if (name === "email") {
      const isValid = validateEmail(value);
      if (value === "") {
        return setErrors({ ...errors, email: "Field is Required" });
      }
      if (!isValid) {
        return setErrors({ ...errors, email: "Please enter a valid email" });
      }
      setErrors({ ...errors, email: "" });
    }
    if (name === "Nok_email") {
      const isValid = validateEmail(value);
      if (value === "") {
        return setErrors({ ...errors, Nok_email: "Field is Required" });
      }
      if (!isValid) {
        return setErrors({
          ...errors,
          Nok_email: "Please enter a valid email",
        });
      }
      setErrors({ ...errors, Nok_email: "" });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      relationship,
      password,
      Nok_firstName,
      Nok_lastName,
      Nok_email,
      Nok_phoneNumber,
    } = input;
    if (
      [
        firstName,
        email,
        lastName,
        phoneNumber,
        relationship,
        password,
        Nok_firstName,
        Nok_lastName,
        Nok_email,
        Nok_phoneNumber,
      ].includes("")
    ) {
      let error = {};
      Object.entries(input).forEach(([key, value]) => {
        if (value === "") {
          error[key] = "Field is Required";
        }
      });
      setErrors(error);
      return;
    } else {
      alert("Registration Successful");
    }
  };
  const states = ["Lagos", "Rivers", "Abuja", "Oyo"];
  const countries = ["Nigeria", "Ghana", "America", "South Africa"];
  const lgas = ["Alimisho", "Ikeja GRA", "Magodo"];

  const {
    firstName,
    lastName,
    middleName,
    email,
    phoneNumber,
    relationship,
    password,
    Nok_firstName,
    Nok_lastName,
    Nok_email,
    Nok_middleName,
    Nok_phoneNumber,
  } = input;

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={submitForm}>
          <div className="left-form">
            <h2>Personal Information</h2>
            <div className="first-row">
              <div className="first-row-input">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  minLength={3}
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  className={errors.firstName ? "error" : ""}
                />
                <ErrorText error={errors.firstName && errors.firstName} />
              </div>
              <div className="first-row-input2">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  minLength={3}
                  onBlur={handleOnBlur}
                  className={errors.lastName ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.lastName && errors.lastName} />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-input">
                <input
                  type="text"
                  name="middleName"
                  value={middleName}
                  minLength={3}
                  placeholder="Middle Name"
                  onChange={handleChange}
                />
              </div>
              <div className="second-row-input2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onBlur={handleOnBlur}
                  className={errors.email ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.email && errors.email} />
              </div>
            </div>
            <div className="third-row">
              <div className="third-row-input">
                <label htmlFor="gender">Gender: </label>
                <input type="radio" name="gender" value="male" required />
                Male
                <input type="radio" name="gender" value="female" />
                Female
              </div>
              <div className="third-row-input2">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone number"
                  maxLength={11}
                  onBlur={handleOnBlur}
                  className={errors.phoneNumber ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.phoneNumber && errors.phoneNumber} />
              </div>
            </div>
            <div className="fourth-row">
              <div className="fourth-row-input">
                <select name="state">
                  <option value="state">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fourth-row-input2">
                <select name="country" required>
                  <option value="country">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="fifth-row">
              <div className="fifth-row-input">
                <select name="lga">
                  <option value="country">Local Govt Area</option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fifth-row-input2">
                <label htmlFor="">Date Of Birth:</label>
                <input
                  type="date"
                  name="dateofbirth"
                  min="2002-01-01"
                  required
                />
              </div>
            </div>
            <div className="sixth-row">
              <div className="sixth-row-input">
                <label htmlFor="">Start Of Work:</label>
                <input
                  type="date"
                  name="startofwork"
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className="sixth-row-input2">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onClick={handleClick}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  placeholder="Password"
                  onBlur={handleOnBlur}
                  className={errors.password ? "error" : ""}
                  required
                />
                {show ? (
                  <FaEyeSlash
                    className="password-icon"
                    onClick={showPassword}
                  />
                ) : (
                  <FaEye className="password-icon" onClick={showPassword} />
                )}
                {showMessage ? <PasswordMessage /> : ""}
                <ErrorText error={errors.password && errors.password} />
              </div>
            </div>
          </div>
          <div className="right-form">
            <h2>Next of Kin Information</h2>
            <div className="first-row">
              <div className="first-row-input">
                <input
                  type="text"
                  name="Nok_firstName"
                  value={Nok_firstName}
                  placeholder="First Name"
                  minLength={3}
                  onBlur={handleOnBlur}
                  className={errors.Nok_firstName ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText
                  error={errors.Nok_firstName && errors.Nok_firstName}
                />
              </div>
              <div className="first-row-input2">
                <input
                  type="text"
                  name="Nok_lastName"
                  value={Nok_lastName}
                  placeholder="Last Name"
                  minLength={3}
                  onBlur={handleOnBlur}
                  className={errors.Nok_lastName ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.Nok_lastName && errors.Nok_lastName} />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-input">
                <input
                  type="text"
                  name="Nok_middleName"
                  value={Nok_middleName}
                  placeholder="Middle Name"
                  minLength={3}
                  onChange={handleChange}
                />
              </div>
              <div className="second-row-input2">
                <input
                  type="email"
                  name="Nok_email"
                  placeholder="Email"
                  value={Nok_email}
                  onBlur={handleOnBlur}
                  className={errors.Nok_email ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.Nok_email && errors.Nok_email} />
              </div>
            </div>
            <div className="third-row">
              <div className="third-row-input">
                <label htmlFor="gender">Gender: </label>
                <input type="radio" name="gender" value="male" required />
                Male
                <input type="radio" name="gender" value="female" />
                Female
              </div>
              <div className="third-row-input2">
                <input
                  type="tel"
                  name="Nok_phoneNumber"
                  value={Nok_phoneNumber}
                  placeholder="Phone number"
                  maxLength={11}
                  onBlur={handleOnBlur}
                  className={errors.Nok_phoneNumber ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText
                  error={errors.Nok_phoneNumber && errors.Nok_phoneNumber}
                />
              </div>
            </div>
            <div className="fourth-row">
              <div className="fourth-row-input">
                <input
                  type="text"
                  name="relationship"
                  value={relationship}
                  placeholder="Relationship"
                  onBlur={handleOnBlur}
                  className={errors.relationship ? "error" : ""}
                  onChange={handleChange}
                />
                <ErrorText error={errors.relationship && errors.relationship} />
              </div>
              <div className="fourth-row-input2">
                <select name="state">
                  <option value="state">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="fifth-row">
              <select name="country">
                <option value="country">Select a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="sixth-row">
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

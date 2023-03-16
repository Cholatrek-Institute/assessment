import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form>
          <div className="left-form">
            <h2>Personal Information</h2>
            <div className="first-row">
              <div className="first-row-input">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="first-row-input2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-input">
                <input
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  placeholder="Middle Name"
                />
              </div>
              <div className="second-row-input2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="third-row">
              <div className="third-row-input">
                <label htmlFor="gender">Gender: </label>
                <input type="radio" name="gender" id="male" value="male" />
                Male
                <input type="radio" name="gender" id="female" value="female" />
                Female
              </div>
              <div className="third-row-input2">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
            <div className="fourth-row">
              <div className="fourth-row-input">
                <select name="state">
                  <option value="state">Select a state</option>
                  <option value="lagos">Lagos</option>
                  <option value="rivers">Rivers</option>
                  <option value="oyo">Oyo</option>
                </select>
              </div>
              <div className="fourth-row-input2">
                <select name="country" required>
                  <option value="country">Select a country</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="america">America</option>
                </select>
              </div>
            </div>
            <div className="fifth-row">
              <div className="fifth-row-input">
                <select name="lga" id="lga">
                  <option value="country">Local Govt Area</option>
                  <option value="nigeria">Alimosho</option>
                  <option value="ghana">Magodo</option>
                  <option value="america">Ikeja GRA</option>
                </select>
              </div>
              <div className="fifth-row-input2">
                <label htmlFor="">Date Of Birth:</label>
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
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
                  id="startofwork"
                  required
                />
              </div>
              <div className="sixth-row-input2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="right-form">
            <h2>Next of Kin Information</h2>
            <div className="first-row">
              <div className="first-row-input">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="first-row-input2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-input">
                <input
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  placeholder="Middle Name"
                />
              </div>
              <div className="second-row-input2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="third-row">
              <div className="third-row-input">
                <label htmlFor="gender">Gender: </label>
                <input type="radio" name="gender" id="male" value="male" />
                Male
                <input type="radio" name="gender" id="female" value="female" />
                Female
              </div>
              <div className="third-row-input2">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
            <div className="fourth-row">
              <div className="fourth-row-input">
                <input
                  type="text"
                  name="relationship"
                  id="relationship"
                  placeholder="Relationship"
                  required
                />
              </div>
              <div className="fourth-row-input2">
                <select name="state">
                  <option value="state">Select a state</option>
                  <option value="lagos">Lagos</option>
                  <option value="rivers">Rivers</option>
                  <option value="oyo">Oyo</option>
                </select>
              </div>
            </div>
            <div className="fifth-row">
              <select name="country" required>
                <option value="country">Select a country</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
                <option value="america">America</option>
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

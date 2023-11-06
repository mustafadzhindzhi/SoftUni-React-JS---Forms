import { useState } from "react";

export default function ControlledForm() {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const userNameChangeHandler = (e) => {
    setUserNameValue(e.target.value);
  };

  const resetFormHandler = () => {
    setUserNameValue("");
    setPasswordValue("");
    setAgeValue("");
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeValue(Number(e.target.value));
  };

  const submitHandler = () => {
    console.log(userNameValue);
    console.log(passwordValue);
    console.log(ageValue);

    resetFormHandler();
  };

  return (
    <>
      <h1>Controlled Form</h1>

      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userNameValue}
            onChange={userNameChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={ageValue}
            onChange={ageChangeHandler}
          />
        </div>

        <div>
          <button type="button" onClick={submitHandler}>
            Register
          </button>
          <button type="button" onClick={resetFormHandler}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

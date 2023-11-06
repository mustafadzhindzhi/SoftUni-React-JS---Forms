import { useState } from "react";

const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "",
  swimming: false,
  shopping: false,
  running: false,
};

export default function ControlledForm() {
  const [formValues, setFormValues] = useState(formInitialState);

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(formInitialState);
  };

  const submitHandler = () => {
    console.log(formValues);

    resetFormHandler();
  };

  const onCheckboChange = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.checked,
    }));
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
            value={formValues.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formValues.age}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
            <option value="m">M</option>
            <option value="f">F</option>
          </select>
        </div>

        <div>
          <h3>Hobbies</h3>
          <label htmlFor="swimming">Swimming</label>
          <input
            type="checkbox"
            name="swimming"
            id="swimming"
            checked={formValues.swimming}
            onChange={onCheckboChange}
          />
          <label htmlFor="running">Running</label>
          <input
            type="checkbox"
            name="running"
            id="running"
            checked={formValues.running}
            onChange={onCheckboChange}
          />
          <label htmlFor="shopping">Shopping</label>
          <input
            type="checkbox"
            name="shopping"
            id="shopping"
            checked={formValues.shopping}
            onChange={onCheckboChange}
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

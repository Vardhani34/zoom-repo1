import './s4.css';
import { Link } from 'react-router-dom';
import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
function Screen4(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const validate = () => {
      const errors = {};
      if (!state.email.includes("@")) errors.email = "Invalid email address.";
      if (state.password.length < 6) errors.password = "Password too short.";
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        console.log("Form submitted:", state);
      } else {
        dispatch({ type: "SET_ERRORS", errors });
      }
    };
  
    return(
        <>
        <div className='body'>
        
        <header>
        <Link to='/'><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-1521462-1289083.png?f=webp&w=256" alt=""/></Link>
        <h3>Sign in</h3>
        </header>
    
        <div className='inp'>
        <p>Enter your email address</p>
        <form onSubmit={handleSubmit}>
      <div>
        
        <input
          type="email"
          placeholder='Email'
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
          }
        />
        {state.errors.email && <p>{state.errors.email}</p>}
      </div>
      <div>
        
        <input
          type="password"
          placeholder='Password'
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "password",
              value: e.target.value,
            })
          }
        />
        {state.errors.password && <p>{state.errors.password}</p>}
      </div>



        <button type='submit' className='bt1'><h4>Sign in</h4></button>
        </form>
        <p className='p'>Forgot Password?</p>
        </div>
        <div className='inp'>
        <p>Other sign in methods</p>
        <button className='bt'>
            <i class="fa-brands fa-google"></i>Continue with Google
            
            
        </button><br />
        <button className='bt'>
            <i class="fa-brands fa-apple"></i>Continue with Apple
            
            
            
        </button><br />
        <button className='bt'>
            <i class="fa-brands fa-facebook"></i>Continue with Facebook
            
            
            
        </button><br />
        <button className='bt'>
            <i class="fa-solid fa-key"></i>Continue with SSO
            
            
            
        </button>
        </div>
        </div>
        </>
    )
}
export default Screen4
import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import formSchema from "./FormSchema";

const initialDisabled = true;
const initialUsers = [];
const initialFormVals ={
    username: '',
    password: '',
  }
const initialFormErrors ={
    username: '',
    password: '',
}

const Signup = () => {
    const [ users, setUsers ] = useState(initialUsers)
    const [ formVals, setFormVals ] = useState(initialFormVals)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)

    const postNewUser = newUser => {
        axios.post('https://african-marketplace-2.herokuapp.com/api/auth/signup', newUser)
        .then(res=>{
          setUsers([...users, res.data])
        })
        .catch(err=>{
          console.error(err)
        })
        .finally(() => setFormVals(initialFormVals))
        }
    const updateForm = (inputName, inputValue) => {
        validate(inputName, inputValue)
        setFormVals({ ...formVals, [inputName]:inputValue})
    }
    const submitForm = () => {
        const newUser ={
          username: formVals.username.trim(),
          password: formVals.password.trim()
        }
        postNewUser(newUser)
      }
      const validate = (name, value) =>{
        yup.reach(formSchema,name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
      }
    
    //   useEffect(() => {
    //     getUsers()
    //   }, [])
      
      useEffect(() => {
        formSchema.isValid(formVals).then(valid => setDisabled(!valid))
      }, [formVals])
    
    return (
        <div className="login signup">
        <form onSubmit={this.handleSubmit} update={updateForm} submit={submitForm} disabled={disabled} errors={formErrors}>
            <span className="formtext">Sign up</span>
            <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={event => this.setState({username: event.target.value})}
            />
            <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={event => this.setState({password: event.target.value})}
            />
            <button>Sumbit</button>
        </form>
        </div>
    )
    }


export default Signup;
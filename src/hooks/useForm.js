import { useState } from "react";


export const useForm = (intialForm = {}) => {

    const [formState, setFormState] = useState(intialForm);

    const onInputChange = (e) => {
        const {name, value} = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onReset = () => {
        setFormState(intialForm)
      }

  return {
    formState,
    onInputChange,
    onReset
  }
}

import React from "react";
import { useForm } from "react-hook-form";
function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { firstName, lastName, age } = data;
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("age", age);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("firstName")} />
        <input type="text" {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input type="text" {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter your number for age</p>}
        <input type="text" type="submit" />
      </form>
    </>
  );
}

export default ReactForm;

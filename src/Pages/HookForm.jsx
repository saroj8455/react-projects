import React from "react";
import PageLayout from "./PageLayout";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function HookForm() {
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, resolver: zodResolver(schema) });

  const createRecord = async (data) => {
    // e.preventDefault();
    try {
      await new Promise((reslove) => setTimeout(reslove, 1000));
      console.log("form submitted", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <article>
        <h1 className="text-2xl mb-6">
          React Hook Form with zod for validation tutorial!
        </h1>
        <div className="tutorial-form w-6">
          <form onSubmit={handleSubmit(createRecord)}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
              {errors.email && (
                <small className="text-500 text-orange-400">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password")}
                type="password"
                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
              {errors.password && (
                <small className="text-500 text-orange-400">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div className="card flex justify-content-center">
              <Button
                label={isSubmitting ? "Loading..." : "Submit"}
                disabled={isSubmitting}
                type="submit"
              />
            </div>
          </form>
        </div>
      </article>
    </PageLayout>
  );
}

/**
 * 
 * 
 * 
 

{...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}


{...register("password", { required: true, minLength: 6 })}
 */

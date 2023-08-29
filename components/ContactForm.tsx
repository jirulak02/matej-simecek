"use client";

import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { StyledButton, StyledInput } from "./ui/Styles";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  return (
    <Form
      action={"/api/form"}
      encType="application/json"
      control={control}
      onSuccess={() => {
        toast.success("Zpráva byla úspěšně odeslána.");
      }}
      onError={() => {
        toast.error("Zprávu se nepodařilo odeslat.");
      }}
      className={`flex w-full flex-col gap-4 ${className}`}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className={`flex flex-col ${!errors.firstName && ""}`}>
          <StyledInput
            type="text"
            label="Jméno"
            autoComplete="given-name"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {/* {errors.firstName?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )} */}
        </div>
        <div className={`flex flex-col ${!errors.lastName && ""}`}>
          <StyledInput
            type="text"
            label="Příjmení"
            autoComplete="family-name"
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {/* {errors.lastName?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )} */}
        </div>
      </div>
      <div className={`flex flex-col ${!errors.email && ""}`}>
        <StyledInput
          type="text"
          label="E-mail"
          autoComplete="email"
          {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {/* {errors.email?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-sm text-red-500">Provide a valid email format!</p>
        )} */}
      </div>
      <div className={`flex flex-col ${!errors.message && ""}`}>
        <StyledInput
          multiline
          rows={4}
          label="Vaše zpráva"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {/* {errors.message?.type === "required" && (
          <p className="text-sm text-red-500">This field is required!</p>
        )} */}
      </div>
      <div className="flex justify-center">
        <StyledButton type="submit" variant="outlined" {...(isSubmitting && { disabled: true })}>
          {isSubmitting ? "Odesíláno" : "Odeslat"}
        </StyledButton>
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 w-80 border-2 border-lime-800",
          },
          error: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 w-80 border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}

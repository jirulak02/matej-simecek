"use client";

import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { StyledButton, StyledInput } from "./ui/Styles";
import { error } from "console";

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
            error={errors.firstName && true}
          />
        </div>
        <div className={`flex flex-col ${!errors.lastName && ""}`}>
          <StyledInput
            type="text"
            label="Příjmení"
            autoComplete="family-name"
            {...register("lastName", { required: true })}
            error={errors.lastName && true}
          />
        </div>
      </div>
      <div className={`flex flex-col ${!errors.email && ""}`}>
        <StyledInput
          type="text"
          label="E-mail"
          autoComplete="email"
          {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
          error={errors.email && true}
        />
      </div>
      <div className={`flex flex-col ${!errors.message && ""}`}>
        <StyledInput
          multiline
          rows={4}
          label="Vaše zpráva"
          {...register("message", { required: true })}
          error={errors.message && true}
        />
      </div>
      <div className="flex justify-center">
        <StyledButton
          type="submit"
          variant="contained"
          className="text-primary-dark bg-white shadow-none transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-neutral-200 hover:shadow-none focus:shadow-none disabled:cursor-not-allowed disabled:bg-gray-300"
          {...(isSubmitting && { disabled: true })}
        >
          {isSubmitting ? "Odesíláno" : "Odeslat"}
        </StyledButton>
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-medium border-2 border-green-500",
          },
          error: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-medium border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}

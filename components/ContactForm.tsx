"use client";

import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import { StyledButtonSecondary, StyledInput } from "./ui/Styles";

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
        toast.error("Něco se pokazilo. Dejte mi prosím vědět, že formulář nefunguje.");
      }}
      className={`flex w-full flex-col gap-4 ${className}`}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className={`flex flex-col`}>
          <StyledInput
            type="text"
            label="Jméno"
            autoComplete="given-name"
            {...register("firstName", { required: true })}
            error={errors.firstName && true}
          />
        </div>
        <div className={`flex flex-col`}>
          <StyledInput
            type="text"
            label="Příjmení"
            autoComplete="family-name"
            {...register("lastName", { required: true })}
            error={errors.lastName && true}
          />
        </div>
      </div>
      <div className={`flex flex-col`}>
        <StyledInput
          type="text"
          label="E-mail"
          autoComplete="email"
          {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
          error={errors.email && true}
        />
      </div>
      <div className={`flex flex-col`}>
        <StyledInput
          multiline
          rows={4}
          label="Vaše zpráva"
          {...register("message", { required: true })}
          error={errors.message && true}
        />
      </div>
      <div className="flex justify-center">
        <StyledButtonSecondary
          type="submit"
          variant="contained"
          {...(isSubmitting && { disabled: true })}
        >
          {isSubmitting ? "Odesíláno" : "Odeslat"}
        </StyledButtonSecondary>
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-medium border-2 border-green-500",
          },
          error: {
            duration: 8000,
            position: "bottom-center",
            className: "text-lg font-medium border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}

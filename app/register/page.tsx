import { RegisterForm } from "./_components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Fill in your details to create a new account
          </p>
        </div>

        <div className="mt-8 bg-card p-6 shadow-sm rounded-lg border">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

import { useForm } from "react-hook-form";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import { Link } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>();

  function onSubmit(data: LoginForm) {
    console.log(data);
  }

  return (
    <AuthLayout>
      <AuthCard
        title="Acesse o portal"
        subtitle="Entre usando seu e-mail e senha cadastrados"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="E-mail"
            placeholder="exemplo@mail.com"
            error={errors.email}
            {...register("email", {
              required: "Informe o e-mail",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail inválido"
              }
            })}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            error={errors.password}
            {...register("password", {
              required: "Digite a senha"
            })}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Entrar
          </button>
        </form>

        {/* seção inferior */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Ainda não tem uma conta?</p>
          <Link
            to="/register"
            className="mt-2 inline-block border bg-gray-100 px-4 py-2 rounded-lg text-sm"
          >
            Criar conta
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}

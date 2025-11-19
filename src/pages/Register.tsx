import { useForm } from "react-hook-form";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import { Link } from "react-router-dom";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>();

  function onSubmit(data: RegisterForm) {
    console.log(data);
  }

  return (
    <AuthLayout>
      <AuthCard
        title="Crie sua conta"
        subtitle="Informe seu nome, e-mail e senha"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Nome"
            placeholder="Digite o nome completo"
            error={errors.name}
            {...register("name", {
              required: "Informe o nome"
            })}
          />

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
              required: "Digite uma senha",
              minLength: {
                value: 6,
                message: "Mínimo de 6 dígitos"
              }
            })}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Cadastrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Já tem uma conta?</p>
          <Link
            to="/"
            className="mt-2 inline-block border bg-gray-100 px-4 py-2 rounded-lg text-sm"
          >
            Acessar conta
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}

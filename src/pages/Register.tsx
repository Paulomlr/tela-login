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
            label="NOME"
            placeholder="Digite o nome completo"
            error={errors.name}
            {...register("name", {
              required: "Informe o nome"
            })}
          />

          <Input
            label="E-MAIL"
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
            label="SENHA"
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
            className="w-full mt-8 bg-[var(--color-gray-200)] text-white py-2.5 rounded-lg hover:bg-[var(--color-gray-100)]"
          >
            Cadastrar
          </button>
        </form>
      </AuthCard>

      <AuthCard 
        title="Já tem uma conta?"
        subtitle="Entre agora mesmo"
        titleClass="text-[20px] font-semibold"
      >
        <Link
          to="/"
        >
          <button className="w-full text-black font-semibold bg-gray-500 py-2.5 rounded-lg hover:bg-[var(--color-gray-400)]">
            Acessar conta
          </button>
        </Link> 
      </AuthCard>
    </AuthLayout>
  );
}

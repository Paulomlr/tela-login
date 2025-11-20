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
              required: "Digite a senha"
            })}
          />

          <button
            type="submit"
            className="w-full mt-8 bg-[var(--color-gray-200)] text-white py-2.5 rounded-lg hover:bg-[var(--color-gray-100)]"
          >
            Entrar
          </button>
        </form>

        
      </AuthCard>
      <AuthCard 
        title="Ainda não tem conta?"
        subtitle="Cadastre agora mesmo"
        titleClass="text-[20px] font-semibold"
      >
        <Link
          to="/register"
        >
          <button className="w-full text-black font-semibold bg-gray-500 py-2.5 rounded-lg hover:bg-[var(--color-gray-400)]">
            Acessar conta
          </button>
        </Link> 
        
      </AuthCard>
    </AuthLayout>
  );
}

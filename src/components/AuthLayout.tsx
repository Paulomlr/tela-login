import background from "../assets/Login_Background.png";
import logo from "../assets/Logo_IconDark.svg"; // ou .png

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background azul em toda a tela */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Metade direita branca */}
      <div className="absolute right-0 top-0 w-full h-full bg-white md:w-1/2">
        <div className="flex flex-col items-center justify-center h-full px-8">
          {/* Logo + nome no topo */}
          <div className="absolute top-12 md:top-16">
            <img src={logo} alt="HelpDesk" className="h-12 md:h-16 w-auto mx-auto" />
            <h2 className="text-2xl font-bold text-blue-700 mt-2">HelpDesk</h2>
          </div>

          {/* Formulário centralizado */}
          <div className="w-full max-w-md mt-32 md:mt-40">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
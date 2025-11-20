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
      <div className="absolute gap-2 mt-4 right-0 top-0 w-full h-full bg-white rounded-tr-2xl lg:w-1/2 rounded-tl-2xl lg:rounded-tr-none">
        <div className="flex flex-col items-center justify-center h-full px-8">
          {/* Logo + nome no topo */}
          <div className=" flex mt-15 mb-10 top-12 md:top-16 gap-x-3">
            <img src={logo} alt="HelpDesk" className="h-12 md:h-12 w-auto mx-auto" />
            <h2 style={{ color: "#2E3DA3" }} className="text-3xl font-semibold mt-2">HelpDesk</h2>
          </div>

          {/* Formulário centralizado */}
          <div className="w-full h-full md:max-w-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
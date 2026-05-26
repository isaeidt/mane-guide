import { useEffect } from "react";
import { useNavigate } from "react-router";
import PaginaEstabelecimento from "../../imports/PaginaEstabelecimento/PaginaEstabelecimento";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickedElement = target.closest('[data-name]') as HTMLElement;

      if (!clickedElement) return;

      const text = clickedElement.textContent?.trim() || "";

      if (text === "ManéGuide" && !text.includes("©")) {
        e.preventDefault();
        navigate("/");
      } else if (text.includes("Sair") || text.includes("Logout")) {
        e.preventDefault();
        navigate("/login");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <PaginaEstabelecimento />
    </div>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router";
import ManeGuideComunidade from "../../imports/ManeGuideComunidade/ManeGuideComunidade";

export default function Comunidade() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickedElement = target.closest('[data-name]') as HTMLElement;

      if (!clickedElement) return;

      const text = clickedElement.textContent?.trim() || "";
      const dataName = clickedElement.getAttribute('data-name');

      if (text.includes("Explorar") && dataName === "Link") {
        e.preventDefault();
        navigate("/explorar");
      } else if (text.includes("Lado B") && dataName === "Link") {
        e.preventDefault();
        navigate("/lado-b");
      } else if (text.includes("Favoritos")) {
        e.preventDefault();
        navigate("/favoritos");
      } else if (text.includes("Eventos")) {
        e.preventDefault();
        navigate("/eventos");
      } else if (text === "ManéGuide" && !text.includes("©")) {
        e.preventDefault();
        navigate("/");
      } else if (clickedElement.querySelector('img[alt*="Avatar"]') || text.includes("Avatar")) {
        e.preventDefault();
        navigate("/login");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <ManeGuideComunidade />
    </div>
  );
}

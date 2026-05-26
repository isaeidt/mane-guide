import { useEffect } from "react";
import { useNavigate } from "react-router";
import HtmlBody2 from "../../imports/Html→Body-2/Html→Body-1-2217";

export default function Eventos() {
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
      } else if (text.includes("Comunidade") && dataName === "Link") {
        e.preventDefault();
        navigate("/comunidade");
      } else if (text.includes("Favoritos")) {
        e.preventDefault();
        navigate("/favoritos");
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
      <HtmlBody2 />
    </div>
  );
}

import svgPaths from "./svg-za4tm4t01c";
import imgMascotContainerWithHandDrawnSubtleBorder from "./f615b89ccc7bca2523d65a10c064cb96f69ad8ff.png";
import imgDownload1 from "./c111dcd504f2824238d8c1eac7572a6b9dd6a855.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[40px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[44px]">A Ilha te espera.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] pb-[0.695px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[18px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Deixa o Mané te guiar pelos caminhos mais</p>
        <p className="leading-[28.8px]">autênticos de Floripa!</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[14.895px] items-start relative shrink-0 w-[383px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-3px] pt-[24px] top-[249px]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function MascotContainerWithHandDrawnSubtleBorder() {
  return (
    <div className="h-[263.66px] pointer-events-none relative rounded-[24px] w-[304.004px]" data-name="Mascot Container with hand-drawn subtle border">
      <div aria-hidden="true" className="absolute inset-0 rounded-[24px]">
        <div className="absolute bg-white inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgMascotContainerWithHandDrawnSubtleBorder} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 rounded-[24px]" />
    </div>
  );
}

function DecorativeDoodleNote() {
  return (
    <div className="bg-[#73d9fd] content-stretch flex flex-col items-start p-[13px] relative rounded-bl-[135px] rounded-br-[120px] rounded-tl-[135px] rounded-tr-[120px]" data-name="Decorative Doodle Note">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-bl-[135px] rounded-br-[120px] rounded-tl-[135px] rounded-tr-[120px]" />
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#005e75] text-[14px] whitespace-nowrap">
        <p className="leading-[16.8px]">Ó-lhó-lhó! Que bom te ver!</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[188.01px] items-start left-[-3.02px] top-[-5.01px]" data-name="Container">
      <div className="flex h-[274.109px] items-center justify-center relative shrink-0 w-[313.02px]">
        <div className="-rotate-2 flex-none">
          <MascotContainerWithHandDrawnSubtleBorder />
        </div>
      </div>
      <div className="absolute flex h-[85.278px] items-center justify-center right-[-47.18px] top-[-32.13px] w-[212.262px]">
        <div className="flex-none rotate-12">
          <DecorativeDoodleNote />
        </div>
      </div>
    </div>
  );
}

function BrandingMascotSection() {
  return (
    <div className="h-[319.59px] relative shrink-0 w-[473.86px]" data-name="Branding / Mascot Section">
      <Margin />
      <Container3 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[388.14px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">E-MAIL</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">teuemail@mane.com</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[58px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[20px] pt-[19px] px-[25px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[400px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">SENHA</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Esqueceu a senha?</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Label1 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[400px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[20px] pt-[19px] px-[25px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[405px]" data-name="Container">
      <Container8 />
      <Input1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+41.14px)] size-[16px] top-1/2" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #572000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff6b00] drop-shadow-[4px_4px_0px_#94928f] h-[69px] left-[66px] rounded-[12px] top-[220px] w-[268px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-14px)] text-[#572000] text-[24px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[28.8px]">Entrar</p>
      </div>
      <Container10 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[17.86px] top-[72.8px] w-[518px]" data-name="Form">
      <Container5 />
      <Container7 />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[24px] whitespace-nowrap">
        <p className="leading-[28.8px] whitespace-pre">{`                         Bem-vindo de volta, Mané!`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`                   Entre para descobrir os segredos da Ilha.`}</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.99px] items-start left-[-47.14px] top-[-30.2px] w-[518px]" data-name="Header">
      <Heading />
      <Container11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[60.99px] left-[41.14px] right-[40.86px] top-[79.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Form />
        <Header />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute left-[-14px] top-[478px] w-[518px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a04100] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Entrar como administrador</p>
        </div>
      </div>
    </div>
  );
}

function LoginFormCard() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[525px] items-start left-[55.8%] p-[41px] right-[-7.8%] rounded-[50px] top-[calc(50%+66.9px)]" data-name="Login Form Card">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container4 />
      <Container12 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[48px] items-center left-[192px] max-w-[1000px] right-[192px] top-[calc(50%-0.01px)]" data-name="Container">
      <BrandingMascotSection />
      <LoginFormCard />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute content-stretch flex h-[565.2px] items-center justify-center left-0 pb-[122.81px] pt-[122.8px] px-[20px] right-0 top-[186px]" data-name="Main Content Area">
      <Container />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#a04100] text-[24px] w-[136px]">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Buscar na ilha...</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#fbf2ed] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[12px] pl-[18px] pr-[17px] pt-[11px] relative size-full">
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute right-[12px] size-[18px] top-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="Container">
      <Input2 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center left-[1007px] top-[17px] w-[260px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start pb-[4px] relative shrink-0 w-[86px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[33px] justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] w-[106px]">
        <p className="leading-[28.8px]">Explorar</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] w-[79px]">
        <p className="leading-[28.8px]">Lado B</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] whitespace-nowrap">
        <p className="leading-[28.8px]">Comunidade</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[288px] top-[15px]" data-name="Nav">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[66px] items-center justify-between left-[-56px] pl-[64px] py-[16px] right-[97px] top-0" data-name="Container">
      <Container14 />
      <Container15 />
      <Nav />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[152px] top-[5px]">
      <div className="absolute h-[56px] left-[152px] top-[5px] w-[57px]" data-name="download 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[182.99%] left-[-35.65%] max-w-none top-[-29.57%] w-[179.14%]" src={imgDownload1} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[66px] left-[40px] top-0 w-[1220px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Group />
      </div>
    </div>
  );
}

function HeaderTopNavBarComponent() {
  return (
    <div className="absolute bg-[#fff8f5] content-stretch flex flex-col h-[67px] items-start left-0 pb-px px-[40px] right-0 top-0" data-name="Header - TopNavBar Component">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[24px] whitespace-nowrap">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Privacidade</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Termos</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Sobre Nós</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Contato</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] h-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">© 2026 ManéGuide - Feito com sotaque em Floripa.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[64px] pr-[64.02px] relative size-full">
          <Container20 />
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#9d988f] bottom-0 content-stretch flex flex-col items-start left-0 pb-[32px] pt-[34px] px-[40px] right-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 245) 0%, rgb(255, 248, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainContentArea />
      <HeaderTopNavBarComponent />
      <Footer />
    </div>
  );
}
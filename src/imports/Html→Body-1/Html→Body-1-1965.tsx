import svgPaths from "./svg-skuc54aa2d";
import imgAvatarDoUsuario from "./9fb14b2e8e21c89d52de89f1eca053e339c055ff.png";
import imgMascoteManeGuide from "./e4f790e010e2792afb6cf58b97f724f0e4508553.png";
import imgImage7 from "./a1e9cc2a384468457ce013108f71d8ca4ca6f7e3.png";
import imgImage8 from "./1a58e6f696448949c19c0f6152c23acf89c1d513.png";
import imgImage14 from "./b2f58b85e002c00b94d476452ba7218cb5862baa.png";
import imgImage13 from "./70c5644c87ad2002a0aaf128e192db5c116ebc0d.png";
import imgPitchManeGuide101 from "./475836a993fea79f816c0172e0911c77d4732659.png";
import imgUser31 from "./e4c77ee80c153b2f8750354e807f166c5c031e72.png";
import imgDownload1 from "./c111dcd504f2824238d8c1eac7572a6b9dd6a855.png";

function Group1() {
  return (
    <div className="col-1 h-[44px] ml-0 mt-0 relative row-1 w-[45px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 44">
        <g id="Group 2">
          <ellipse cx="22.5" cy="22" fill="var(--fill-0, #A6A6A6)" id="Ellipse 1" rx="22.5" ry="22" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2px] mt-[2px] place-items-start relative row-1">
      <Group1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[46px] left-px top-px w-[45px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 46">
        <g id="Group 2">
          <ellipse cx="22.5" cy="23" fill="var(--fill-0, #FFF6F0)" id="Ellipse 1" rx="22.5" ry="23" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-px top-px">
      <Group6 />
    </div>
  );
}

function AvatarDoUsuario1() {
  return (
    <div className="absolute left-0 pointer-events-none rounded-[9999px] size-[48px] top-0" data-name="Avatar do Usuário">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute h-[173.42%] left-[-100.83%] max-w-none top-[-15.57%] w-[308.3%]" src={imgAvatarDoUsuario} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#a04100] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <AvatarDoUsuario1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
    </div>
  );
}

function AvatarDoUsuario() {
  return (
    <div className="col-1 ml-0 mt-0 relative rounded-[9999px] row-1 size-[48px]" data-name="Avatar do Usuário">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute h-[173.42%] left-[-100.83%] max-w-none top-[-15.57%] w-[308.3%]" src={imgAvatarDoUsuario} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#a04100] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <AvatarDoUsuario />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Bom dia,Mané!</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">Explore Floripa hoje</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Group2 />
        <Container2 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fff8f5] relative rounded-[12px] shrink-0 w-[245px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pt-[17px] px-[17px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Explorar</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,107,0,0)] content-stretch flex gap-[12px] items-center pl-[5px] pr-[12px] py-[12px] relative rounded-[12px] w-[251.579px]" data-name="Link">
      <div className="flex h-[18.947px] items-center justify-center relative shrink-0 w-[16.842px]">
        <div className="flex-none scale-x-105 scale-y-105">
          <div className="h-[18px] relative w-[16px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
              <path d={svgPaths.p2fb94400} fill="var(--fill-0, #5A4136)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <Container5 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.2px] px-[5.95px] relative shrink-0 w-[221px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[239px]">
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="Container">
          <g id="Icon">
            <path d={svgPaths.p1db08b60} fill="var(--fill-0, #5A4136)" />
            <path d={svgPaths.p1db08b60} fill="var(--fill-1, #572000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#572000] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Favoritos</p>
      </div>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#572000] left-[13px] size-[13px] top-[17px]" data-name="Container" />;
}

function Link1() {
  return (
    <div className="bg-[#ff6b00] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[235px]" data-name="Link">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Mapa da Ilha</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pdbf5c00} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Eventos</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[1.2px] relative size-full">
        <LinkCssTransform />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-[104px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid min-h-[inherit] relative size-full" />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="bg-[#fbf2ed] content-stretch flex flex-col gap-[16px] h-[1528px] items-start pl-[8px] pr-[10px] py-[8px] relative shrink-0 w-[256px]" data-name="Aside - SideNavBar">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-r-2 border-solid inset-0 pointer-events-none" />
      <BackgroundBorder />
      <Nav />
      <Margin />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.pf8747d7} fill="var(--fill-0, #005E75)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005e75] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Minha Coleção Privada</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#73d9fd] content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#006780] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[40px] tracking-[-0.8px] w-full">
        <p className="leading-[44px]">Meus Picos Salvos</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pb-[0.595px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[18px] w-[566px]">
        <p className="leading-[28.8px] mb-0">Aqui é onde tu guarda o tesouro da Ilha, ô querido!</p>
        <p className="leading-[28.8px] mb-0">Todos aqueles cantinhos especiais, desde a trilha</p>
        <p className="leading-[28.8px]">secreta até aquele caldo de cana nota dez.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.8px] items-start min-w-px relative" data-name="Container">
      <BackgroundBorder1 />
      <Heading />
      <Container17 />
    </div>
  );
}

function MascoteManeGuide() {
  return (
    <div className="flex-[1_0_0] min-h-px relative shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] w-full" data-name="Mascote Mané Guide">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[56.25%] left-0 max-w-none top-[21.88%] w-full" src={imgMascoteManeGuide} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[384px]" data-name="Container">
      <div className="absolute bg-[#ffdbcc] blur-[32px] inset-0 opacity-30 rounded-[9999px]" data-name="Decorative doodle behind mascot" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-[73px] max-w-[1200px] right-[-249px] top-[-58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-center max-w-[inherit] relative size-full">
        <Container14 />
        <Container18 />
      </div>
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="bg-[#efe6e2] flex-[1_0_0] h-[265px] min-w-px relative" data-name="Header - Hero Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[50px] pt-[48px] px-[64px] relative size-full">
          <Container13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Procurar nos favoritos...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[397px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[13px] pl-[42px] pr-[18px] pt-[12px] relative rounded-[inherit] size-full">
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-[22.73%] content-stretch flex flex-col items-start left-[12px] top-[22.73%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #8E7164)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container21 />
    </div>
  );
}

function SearchFilterBarMicroInteraction() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[243px] max-w-[1200px] pb-[9px] pt-[32px] px-[64px] top-[256px] w-[1024px]" data-name="Search & Filter Bar (Micro interaction)">
      <Container19 />
    </div>
  );
}

function ArticleCard1Paints() {
  return (
    <div className="absolute bg-white inset-[0_0.01px_0_0] rounded-[12px]" data-name="Article - Card 1 paints">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[224px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[227px] relative w-[303px]" data-name="image 7">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p2628ad80} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center p-[8px] right-[12.01px] rounded-[9999px] top-[12px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0.35px_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[192px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container23 />
        <Button />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-[174.42px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1e1b18] text-[24px] top-[28.4px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Praia do</p>
        <p className="leading-[28.8px]">Gravatá</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4.9</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
        <Heading1 />
        <Background />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] w-full">
        <p className="leading-[24px] mb-0">A trilha é curta, mas a vista é</p>
        <p className="leading-[24px]">de cair o queixo. Perfeito pra</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8e7164] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Leste da Ilha</p>
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,103,128,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006780] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">NATUREZA</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t inset-0 pointer-events-none" />
      <Container30 />
      <Overlay />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container26 />
        <Container29 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function ArticleCard() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Article - Card 1">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="absolute bg-[rgba(160,65,0,0)] inset-[6px_-1.99px_-2px_6px] rounded-[12px]" data-name="Background" />
        <ArticleCard1Paints />
        <Container22 />
        <Container25 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p2628ad80} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center p-[8px] right-[9.33px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0.35px_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container33 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[192px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[339px] relative shrink-0 w-[510px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <Button1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-[175.56px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1e1b18] text-[24px] top-[28.4px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Canto do</p>
        <p className="leading-[28.8px]">Moreira</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4.7</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Background1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Melhor sequência de</p>
        <p className="leading-[24px]">camarão da região com…</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8e7164] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Ribeirão da Ilha</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,103,128,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006780] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">GASTRONOMIA</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] pt-[17px] relative size-full">
          <Container39 />
          <Overlay1 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container35 />
        <Container38 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="absolute bg-[rgba(160,65,0,0)] inset-[6px_-2px_-2px_6px] rounded-[12px]" data-name="Background" />
        <BackgroundBorder2 />
        <Container32 />
        <Container34 />
      </div>
    </div>
  );
}

function ArticleCard2WithStickyNoteOverlay() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Article - Card 2 (With Sticky Note Overlay)">
      <Container31 />
    </div>
  );
}

function ArticleCard4Paints() {
  return (
    <div className="absolute bg-white inset-[0_0.01px_0.2px_0] rounded-[12px]" data-name="Article - Card 4 paints">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p2628ad80} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center p-[8px] right-[12.01px] rounded-[9999px] top-[12px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0.35px_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container41 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[192px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[233px] relative shrink-0 w-[269px]" data-name="image 14">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
        </div>
        <Button2 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4.8</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[24px] whitespace-nowrap">
          <p className="leading-[28.8px]">Santo Antônio</p>
        </div>
        <Background2 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Caminhar por aqui é voltar</p>
        <p className="leading-[24px]">no tempo. História pura e…</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8e7164] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Norte da Ilha</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,103,128,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006780] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">CULTURA</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Container47 />
          <Overlay2 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container43 />
        <Container46 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function ArticleCard2() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Article - Card 4">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="absolute bg-[rgba(160,65,0,0)] inset-[6px_-1.99px_-1.8px_6px] rounded-[12px]" data-name="Background" />
        <ArticleCard4Paints />
        <Container40 />
        <Container42 />
      </div>
    </div>
  );
}

function ArticleCard3Paints() {
  return (
    <div className="absolute bg-white inset-[0_0.01px_0_0] rounded-[12px]" data-name="Article - Card 3 paints">
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p2628ad80} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center p-[8px] right-[12.01px] rounded-[9999px] top-[12px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0.35px_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container49 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[192px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[235.206px] relative shrink-0 w-[329px]" data-name="image 13">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
        </div>
        <Button3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-[174.61px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1e1b18] text-[24px] top-[28.4px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Trilha da</p>
        <p className="leading-[28.8px]">Lagoinha</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">5.0</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Background3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Um paraíso escondido que</p>
        <p className="leading-[24px]">exige fôlego, mas…</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8e7164] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Sul da Ilha</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,103,128,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006780] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">AVENTURA</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[17px] relative size-full">
          <Container55 />
          <Overlay3 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container51 />
        <Container54 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function ArticleCard1() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Article - Card 3">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <div className="absolute bg-[rgba(160,65,0,0)] inset-[6px_-1.99px_-2px_6px] rounded-[12px]" data-name="Background" />
        <ArticleCard3Paints />
        <Container48 />
        <Container50 />
      </div>
    </div>
  );
}

function SectionFavoritesGrid() {
  return (
    <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[___405.59px_376.80px_235.80px] left-[305px] top-[379px] w-[896px]" data-name="Section - Favorites Grid">
      <ArticleCard />
      <ArticleCard2WithStickyNoteOverlay />
      <ArticleCard2 />
      <ArticleCard1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute  content-stretch flex items-start left-0 right-0 top-[66px]" data-name="Container">
      <AsideSideNavBar />
      <HeaderHeroSection />
      <SearchFilterBarMicroInteraction />
      <SectionFavoritesGrid />
      <div className="absolute h-[323px] left-[874px] top-[-16px] w-[293px]" data-name="Pitch Mané Guide (10) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.37%] left-[-65.65%] max-w-none top-[-9.35%] w-[213.94%]" src={imgPitchManeGuide101} />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#9d988f] bottom-0 h-[109px] left-0 right-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#a04100] text-[24px] w-[136px]">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Container60() {
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

function Input1() {
  return (
    <div className="bg-[#fbf2ed] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[12px] pl-[18px] pr-[17px] pt-[11px] relative rounded-[inherit] size-full">
        <Container60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container61() {
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

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="Container">
      <Input1 />
      <Container61 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#006780] content-stretch flex flex-col h-[42px] items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 w-[69px]" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[18px]" data-name="user (3) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUser31} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[30px] items-center left-[922px] top-1/2" data-name="Container">
      <Container59 />
      <Button4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-start pb-[4px] relative shrink-0 w-[86px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] w-[106px]">
        <p className="leading-[28.8px]">Explorar</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[80px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] w-[89px]">
        <p className="leading-[28.8px]">Lado B</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[20px] w-[132px]">
        <p className="leading-[28.8px]">Comunidade</p>
      </div>
    </div>
  );
}

function Link7() {
  return <div className="h-[29px] relative shrink-0 w-[127px]" data-name="Link" />;
}

function Nav1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[298px] top-[calc(50%-0.5px)]" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[66px] items-center justify-between left-[-56px] max-w-[1200px] pl-[64px] py-[16px] right-[97px] top-0" data-name="Container">
      <Container57 />
      <Container58 />
      <Nav1 />
    </div>
  );
}

function Group7() {
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
    <div className="absolute h-[66px] left-[40px] top-0 w-[1210px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container56 />
        <Group7 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#fff8f5] content-stretch flex flex-col h-[71px] items-start left-0 pb-[2px] px-[40px] right-0 top-0" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="h-[56px] relative shrink-0 w-[57px]" data-name="download 1" />
      <Frame />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[24px] whitespace-nowrap">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Privacidade</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Termos</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Sobre Nós</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Contato</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className=" content-stretch flex gap-[24px] h-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch  flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">© 2026 ManéGuide - Feito com sotaque em Floripa.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute  content-stretch flex items-center justify-between left-[47px] max-w-[1200px] pl-[64px] pr-[64.02px] right-[33px] top-[1633px]" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 245) 0%, rgb(255, 248, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Container />
      <HeaderTopNavBar />
      <Container62 />
    </div>
  );
}

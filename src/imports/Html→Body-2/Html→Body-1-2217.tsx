import svgPaths from "./svg-c7hnimmp46";
import imgAvatarDoUsuario from "./9fb14b2e8e21c89d52de89f1eca053e339c055ff.png";
import imgUser31 from "./e4c77ee80c153b2f8750354e807f166c5c031e72.png";
import imgDownload1 from "./c111dcd504f2824238d8c1eac7572a6b9dd6a855.png";
import imgImage11 from "./2910e4b8bc8ed26e6d081c561122ce99ac79500f.png";
import imgImage10 from "./39a333162cfe98c21ae4fb5b1ba48df6813ac789.png";
import imgImage12 from "./914b3c25e0097508dc1a89577d3ef2c3b4dd29f6.png";
import imgAb6AXuCQl3A4CVwAtSknMqqFcUa7KxcJ9XdV1RhyqGnHe1DnEgog0HlFyokZwp0AAwOj6E1L5RvbOBlkAmssuV0FljSVk0Xv6COStO7EPmk1LDfzWSe75ZqOlI0Ui6PhLCwZgBxvO2Lmyrc87TVxZy8N4BXOvBt4T4Yst2KzqGFftulTb29QNudiAp8Z8Q4I5NdDtYobw6Wt7EHpcIxZdCg3FEv1L9ZiDx7JuvyLruNfOcgJ6SrYeJyXu6Y6GlXhJjkW1Zk5C from "./6641e7a21a3734513b55c5b59ded42bf438f7907.png";

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
          <path d={svgPaths.p1db08b60} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Favoritos</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
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

function Container9() {
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
    <div className="bg-[rgba(255,107,0,0)] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[221px]" data-name="Link">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pdbf5c00} fill="var(--fill-0, #572000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#572000] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Eventos</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#ff6b00] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[226px]" data-name="Link">
      <Container10 />
      <Container11 />
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

function Container() {
  return (
    <div className="absolute content-stretch flex items-start left-0 right-0 top-[66px]" data-name="Container">
      <AsideSideNavBar />
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#a04100] text-[24px] w-[136px]">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Container16() {
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

function Input() {
  return (
    <div className="bg-[#fbf2ed] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[12px] pl-[18px] pr-[17px] pt-[11px] relative rounded-[inherit] size-full">
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container17() {
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

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="Container">
      <Input />
      <Container17 />
    </div>
  );
}

function Button() {
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

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[30px] items-center left-[922px] top-1/2" data-name="Container">
      <Container15 />
      <Button />
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

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[66px] items-center justify-between left-[-56px] max-w-[1200px] pl-[64px] py-[16px] right-[97px] top-0" data-name="Container">
      <Container13 />
      <Container14 />
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
        <Container12 />
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

function Container19() {
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

function Container20() {
  return (
    <div className="content-stretch flex gap-[24px] h-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">© 2026 ManéGuide - Feito com sotaque em Floripa.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[47px] max-w-[1200px] pl-[64px] pr-[64.02px] right-[33px] top-[1633px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[40px] tracking-[-0.8px] w-full">
        <p className="leading-[44px]">O que tá rolando na Ilha?</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#a04100] content-stretch drop-shadow-[3px_3px_0px_rgba(53,16,0,0.5)] flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">HOJE</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex flex-col items-center justify-center px-[26px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">AMANHÃ</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex flex-col items-center justify-center px-[26px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">SÁB 12/08</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex flex-col items-center justify-center px-[26px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">DOM 13/08</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#efe6e2] content-stretch flex flex-col items-center justify-center px-[26px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PRÓX. SEMANA</p>
      </div>
    </div>
  );
}

function DateSelectorChips() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-auto pb-[16px] relative shrink-0 w-full" data-name="Date Selector Chips">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-[896px]" data-name="Header Section">
      <Heading />
      <DateSelectorChips />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.25">
        <g id="Container">
          <path d={svgPaths.p389def00} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4.9</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[24px] whitespace-nowrap">
          <p className="leading-[28.8px]">{`Jazz & Ostras`}</p>
        </div>
        <Container24 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p39919e0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hoje, 19:30</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Santo Antônio de Lisboa</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a04100] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">R$ 45</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ffdbcc] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#351000] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">INGRESSOS</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[50px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Button6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Container23 />
        <Container27 />
        <Container34 />
      </div>
    </div>
  );
}

function ArticleEventCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Article - Event Card 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start pb-[29.79px] pt-px px-px relative size-full">
          <div className="h-[227px] relative shrink-0 w-[340px] z-[2]" data-name="image 11">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
          </div>
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-[192.16px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1e1b18] text-[24px] top-[28.4px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Feirinha da</p>
        <p className="leading-[28.8px]">Lagoa</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[13.762px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.7625">
        <g id="Container">
          <path d={svgPaths.padd1018} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">TOP</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Heading1 />
        <Container38 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p39919e0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Dom, 09:00 - 17:00</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Lagoa da Conceição</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a04100] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">GRATUITO</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ffdbcc] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#351000] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">VER MAPA</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[16px] relative size-full">
          <Container49 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Container37 />
        <Container41 />
        <Container48 />
      </div>
    </div>
  );
}

function ArticleEventCard2WithHedgehogBadge() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Article - Event Card 2 (With Hedgehog Badge)">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[228px] relative shrink-0 w-[342px] z-[2]" data-name="image 10">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[235px] relative shrink-0 w-[314px]" data-name="image 12">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-[184.36px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1e1b18] text-[24px] top-[28.4px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Pôr do Sol no</p>
        <p className="leading-[28.8px]">Deck</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.5">
        <g id="Container">
          <path d={svgPaths.p19732f80} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">HYPE</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Heading2 />
        <Container53 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p39919e0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sáb, 16:00</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #5A4136)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Praia Brava</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container60 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a04100] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">R$ 80</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ffdbcc] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#351000] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">RESERVAR</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Button8 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[235px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Container52 />
        <Container56 />
        <Container63 />
      </div>
    </div>
  );
}

function ArticleEventCard1() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Article - Event Card 3">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container50 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function SectionEventsGrid() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_447.59px] h-[495.594px] pt-[48px] relative shrink-0 w-[896px]" data-name="Section - Events Grid">
      <ArticleEventCard />
      <ArticleEventCard2WithHedgehogBadge />
      <ArticleEventCard1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[24px] w-full">
        <p className="leading-[28.8px]">Dica de Morador Pinada</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pb-[16px] right-[31.99px] top-[32px]" data-name="Heading 4:margin">
      <Heading3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium_Italic',sans-serif] font-normal italic items-start leading-[0] left-[-0.01px] pb-[0.802px] right-0 text-[#33312a] text-[18px] top-[-1px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center mb-[-0.3px] relative shrink-0">
        <p className="leading-[28.8px]">{`"Se for na Feirinha da Lagoa domingo,`}</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.3px] relative shrink-0">
        <p className="leading-[28.8px] mb-0">tenta chegar antes das 10h. O trânsito na</p>
        <p className="leading-[28.8px]">{`volta pro centro fica um 'ô-ô' depois das`}</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.3px] relative shrink-0">
        <p className="leading-[28.8px]">16h, mané! Aproveita pra comer um pastel</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28.8px]">{`de berbigão no box 4, é o melhor da ilha."`}</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute h-[167.989px] left-[32px] right-[32px] top-[76.8px]" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #572000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#ff6b00] content-stretch flex h-[39.996px] items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 w-[40.006px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#572000] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">ZÉ DA BARRA</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#625e56] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">MORADOR HÁ 42 ANOS</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113.747px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-[356.004px]" data-name="Container">
      <BackgroundBorder1 />
      <Container68 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute bottom-[31.97px] content-stretch flex flex-col h-[255.21px] items-start justify-end left-[28.24px] min-h-[40px] pl-[3.756px] pt-[215.219px] right-[35.75px]" data-name="Margin">
      <Container66 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ba1a1a] content-stretch flex h-[31.995px] items-center justify-center left-1/2 p-[2px] rounded-[9999px] top-[-16px] w-[32.005px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Overlay+Shadow" />
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[4.001px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#fef08a] border border-[#eab308] border-solid drop-shadow-[5px_5px_7.5px_rgba(0,0,0,0.05)] relative size-full" data-name="Background+Border+Shadow">
      <Heading4Margin />
      <Margin1 />
      <Margin2 />
      <BackgroundBorder2 />
    </div>
  );
}

function ResidentTipStickyNote() {
  return (
    <div className="relative self-stretch shrink-0 w-[422px]" data-name="Resident Tip Sticky Note">
      <div className="absolute flex inset-[-3.64px_-4.63px] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-2.16104cqw,98.6394cqh)] rotate-1 w-[hypot(97.839cqw,1.36064cqh)]">
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">MAPA DA VIBE</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4136] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">3 eventos próximos</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Heading4 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] pb-[16px] right-[18px] top-[18px]" data-name="Margin">
      <Container71 />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-[136.48px] pr-[136.5px] py-[8px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">ABRIR NO GOOGLE MAPS</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] pt-[16px] top-[472px]" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Ab6AXuCQl3A4CVwAtSknMqqFcUa7KxcJ9XdV1RhyqGnHe1DnEgog0HlFyokZwp0AAwOj6E1L5RvbOBlkAmssuV0FljSVk0Xv6COStO7EPmk1LDfzWSe75ZqOlI0Ui6PhLCwZgBxvO2Lmyrc87TVxZy8N4BXOvBt4T4Yst2KzqGFftulTb29QNudiAp8Z8Q4I5NdDtYobw6Wt7EHpcIxZdCg3FEv1L9ZiDx7JuvyLruNfOcgJ6SrYeJyXu6Y6GlXhJjkW1Zk5C() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-30 relative w-full" data-name="AB6AXuCQl3a4CVwAt-SknMqqFcUa7KxcJ9xdV1RhyqGnHe1DN_EGOG0hlFyokZwp0aAwOJ6E1L5-rvbOBlkAmssuV0fljSVk0XV-6c-oStO7ePMK1l_dfzWSe75ZQOlI0UI6PhLCwZG_BxvO2Lmyrc87TVxZY8n4bXOvBt4T4YST2kzq_GFftulTB29qNudiAP_8Z8q4I5NdDtYobw6WT7EHpcIxZdCg3FEv1L9ZIDx7JuvyLRUNf-OcgJ6SrYeJyXu6y6glXhJjkW1Zk5c">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuCQl3A4CVwAtSknMqqFcUa7KxcJ9XdV1RhyqGnHe1DnEgog0HlFyokZwp0AAwOj6E1L5RvbOBlkAmssuV0FljSVk0Xv6COStO7EPmk1LDfzWSe75ZqOlI0Ui6PhLCwZgBxvO2Lmyrc87TVxZy8N4BXOvBt4T4Yst2KzqGFftulTb29QNudiAp8Z8Q4I5NdDtYobw6Wt7EHpcIxZdCg3FEv1L9ZiDx7JuvyLruNfOcgJ6SrYeJyXu6Y6GlXhJjkW1Zk5C} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="Container">
          <path d={svgPaths.p1fb93440} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#a04100] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Overlay+Shadow" />
      <Container73 />
    </div>
  );
}

function MapMarkers() {
  return (
    <div className="absolute inset-[25.12%_59.01%_67.3%_33.41%]" data-name="Map Markers">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <BackgroundBorder3 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.651px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6505 12.6667">
        <g id="Container">
          <path d={svgPaths.p4ed9600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#006780] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Overlay+Shadow" />
      <Container75 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute inset-[59.01%_25.12%_33.41%_67.3%]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <BackgroundBorder4 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute inset-[50px_18px_62px_18px] rounded-[8px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="absolute bg-[#e5e7eb] inset-px opacity-50" data-name="Simulated Map" />
        <Ab6AXuCQl3A4CVwAtSknMqqFcUa7KxcJ9XdV1RhyqGnHe1DnEgog0HlFyokZwp0AAwOj6E1L5RvbOBlkAmssuV0FljSVk0Xv6COStO7EPmk1LDfzWSe75ZqOlI0Ui6PhLCwZgBxvO2Lmyrc87TVxZy8N4BXOvBt4T4Yst2KzqGFftulTb29QNudiAp8Z8Q4I5NdDtYobw6Wt7EHpcIxZdCg3FEv1L9ZiDx7JuvyLruNfOcgJ6SrYeJyXu6Y6GlXhJjkW1Zk5C />
        <MapMarkers />
        <Container74 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MapSnippetCard() {
  return (
    <div className="bg-white drop-shadow-[8px_8px_0px_#e9e1dc] relative rounded-[12px] self-stretch shrink-0 w-[458px]" data-name="Map Snippet Card">
      <div aria-hidden="true" className="absolute border-2 border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin3 />
      <ButtonMargin />
      <Border />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[16px] h-[534px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ResidentTipStickyNote />
      <MapSnippetCard />
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="bg-[#efe6e2] h-[747px] relative shrink-0 w-full" data-name="Community Section">
      <div className="content-stretch flex flex-col items-start pt-[109px] px-[64px] relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[54px] h-[1575px] items-center left-[256px] min-h-[1575px] pb-[52px] pt-[48px] top-[71px] w-[1024px]" data-name="Main Content Area">
      <HeaderSection />
      <SectionEventsGrid />
      <CommunitySection />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 245) 0%, rgb(255, 248, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Container />
      <Footer />
      <HeaderTopNavBar />
      <Container18 />
      <MainContentArea />
    </div>
  );
}
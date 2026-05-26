import svgPaths from "./svg-lyvvs4dfvk";
import imgAvatarDoUsuario from "./9fb14b2e8e21c89d52de89f1eca053e339c055ff.png";
import imgImage7 from "./a1e9cc2a384468457ce013108f71d8ca4ca6f7e3.png";
import imgImage8 from "./1a58e6f696448949c19c0f6152c23acf89c1d513.png";
import imgImage6 from "./c6874de5d41a61fbe20e105253d2d62f0b1123e2.png";
import imgImage9 from "./b5b315db29097883403c841ccf604e5d797dd9de.png";
import imgUser31 from "./e4c77ee80c153b2f8750354e807f166c5c031e72.png";
import imgDownload1 from "./c111dcd504f2824238d8c1eac7572a6b9dd6a855.png";
import { imgBackground, imgBackground1, imgBackground2, imgBackground3 } from "./svg-nuxu8";

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
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #572000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#572000] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Explorar</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ff6b00] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] w-[226.316px]" data-name="Link">
      <Container5 />
      <Container6 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.2px] px-[5.95px] relative shrink-0 w-[221px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[215px]">
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container7() {
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

function Container8() {
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
          <Container7 />
          <Container8 />
        </div>
      </div>
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

function Background() {
  return (
    <div className="absolute bg-[#73d9fd] content-stretch flex items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[154.995px_26.223px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005e75] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">SÓ OS MANÉS SABEM</p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[20px] relative w-[154.31px]" data-name="Mask Group">
      <Background />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[36px]" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[40px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[44px]">Lado B de Floripa</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[672px] pb-[0.595px] right-[65px] top-[94.79px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[18px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Esqueça as filas de Jurerê ou o trânsito da Lagoa. Aqui a</p>
        <p className="leading-[28.8px] mb-0">gente te leva pros picos que não estão no GPS do turista</p>
        <p className="leading-[28.8px]">comum. Senta que lá vem história!</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[182.39px] min-w-px mr-[-65px] relative" data-name="Container">
      <div className="absolute flex h-[26.216px] items-center justify-center left-[-0.34px] top-[-3.11px] w-[154.992px]">
        <div className="flex-none rotate-[-2.31deg]">
          <MaskGroup />
        </div>
      </div>
      <Heading />
      <Container14 />
    </div>
  );
}

function Container15() {
  return <div className="h-[196px] relative shrink-0 w-[224px]" data-name="Container" />;
}

function HeroSection() {
  return (
    <div className="content-stretch flex items-center pb-[16px] relative shrink-0 w-full" data-name="Hero Section">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#a04100] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[86.65px_23.453px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground1}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">PASSEIO</p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="h-[23px] relative w-[86.53px]" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[227px] relative w-[303px]" data-name="image 7">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[23.453px] items-center justify-center left-[15.94px] top-[15.77px] w-[86.649px]">
          <div className="flex-none rotate-[0.3deg]">
            <MaskGroup1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Praia do Gravatá</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">A trilha é curta mas íngreme. Lá</p>
        <p className="leading-[20px] mb-0">embaixo, você encontra uma</p>
        <p className="leading-[20px]">vila de pescadores que parou…</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4.9</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Button() {
  return <div className="h-[20px] relative shrink-0 w-[104.42px]" data-name="Button" />;
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Button />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin1 />
        <Margin2 />
        <Container19 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fff8f5] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Card 1">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container16 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#a04100] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[107.181px_23.934px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground2}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">LADO B CLÁSSICO</p>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="h-[23px] relative w-[106.98px]" data-name="Mask Group">
      <Background2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[339px] relative shrink-0 w-[510px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <div className="absolute flex h-[23.933px] items-center justify-center left-[15.9px] top-[15.54px] w-[107.177px]">
          <div className="flex-none rotate-[-0.5deg]">
            <MaskGroup2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Canto do Moreira</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Onde os surfistas locais se</p>
        <p className="leading-[20px] mb-0">escondem quando a Praia Mole</p>
        <p className="leading-[20px]">está cheia. Ondas fortes e…</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[12.542px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5417">
        <g id="Container">
          <path d={svgPaths.p30917900} fill="var(--fill-0, #1E1B18)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Surf Pro</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-end min-h-[20px] pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin3 />
        <Margin4 />
        <Margin5 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#fff8f5] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Card 2">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container23 />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#a04100] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[72.922px_25.009px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground3}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">CULTURAL</p>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="h-[23px] relative w-[72.31px]" data-name="Mask Group">
      <Background3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[312px] relative shrink-0 w-[415px]" data-name="image 6">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
        <div className="absolute flex h-[25.01px] items-center justify-center left-[15.7px] top-[15px] w-[72.924px]">
          <div className="flex-none rotate-[1.6deg]">
            <MaskGroup3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Caminho dos Açores</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Uma ruela escondida em Santo</p>
        <p className="leading-[20px] mb-0">Antônio de Lisboa que guarda a</p>
        <p className="leading-[20px]">arquitetura original e o café…</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Container">
          <path d={svgPaths.p23cfd7c0} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">A+</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin6 />
        <Margin7 />
        <Container33 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#fff8f5] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Card 3">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container30 />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Pedra do Urubu</p>
      </div>
      <div className="h-[19px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
          <path d={svgPaths.p2fcfbf00} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Subida curta pela Guarda do</p>
        <p className="leading-[20px] mb-0">Embaú. A vista do Rio da Madre</p>
        <p className="leading-[20px]">encontrando o mar é algo que…</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Container">
          <path d={svgPaths.p107da600} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Trilha Fácil</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin8 />
        <Margin9 />
        <Container39 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#fff8f5] col-1 justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0" data-name="Card 4">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[216px] relative shrink-0 w-[383px] z-[2]" data-name="image 9">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
        <Container37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#a04100] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[107.181px_23.934px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground2}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">LADO B CLÁSSICO</p>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="h-[23px] relative w-[106.98px]" data-name="Mask Group">
      <Background4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[339px] relative shrink-0 w-[510px]" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
        <div className="absolute flex h-[23.933px] items-center justify-center left-[15.9px] top-[15.54px] w-[107.177px]">
          <div className="flex-none rotate-[-0.5deg]">
            <MaskGroup4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Canto do Moreira</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph4 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Onde os surfistas locais se</p>
        <p className="leading-[20px] mb-0">escondem quando a Praia Mole</p>
        <p className="leading-[20px]">está cheia. Ondas fortes e…</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[12.542px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5417">
        <g id="Container">
          <path d={svgPaths.p30917900} fill="var(--fill-0, #1E1B18)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Surf Pro</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-end min-h-[20px] pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin10 />
        <Margin11 />
        <Margin12 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#fff8f5] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Card 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container43 />
        <Container44 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#fff8f5] col-3 justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0" data-name="Card 6">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Card4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#a04100] content-stretch flex flex-col items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[86.65px_23.453px] px-[12px] py-[4px] rounded-[9999px] top-0" style={{ maskImage: `url('${imgBackground1}')` }} data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">PASSEIO</p>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="h-[23px] relative w-[86.53px]" data-name="Mask Group">
      <Background5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[224px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[227px] relative w-[303px]" data-name="image 7">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[23.453px] items-center justify-center left-[15.94px] top-[15.77px] w-[86.649px]">
          <div className="flex-none rotate-[0.3deg]">
            <MaskGroup5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Praia do Gravatá</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #A04100)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph5 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] w-full">
        <p className="leading-[20px] mb-0">A trilha é curta mas íngreme. Lá</p>
        <p className="leading-[20px] mb-0">embaixo, você encontra uma</p>
        <p className="leading-[20px]">vila de pescadores que parou…</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container52 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #A04100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Work_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1b18] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4.9</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Button1() {
  return <div className="h-[20px] relative shrink-0 w-[104.42px]" data-name="Button" />;
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Button1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[191px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin13 />
        <Margin14 />
        <Container53 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#fff8f5] col-2 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Card 7">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container50 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8e7164] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GridOfCards() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__418px_418px] relative shrink-0 w-full" data-name="Grid of Cards">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] max-w-[1300px] min-w-px relative self-stretch" data-name="Main Content">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[106px] items-center max-w-[inherit] px-[64px] py-[48px] relative size-full">
          <HeroSection />
          <GridOfCards />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-start left-0 right-0 top-[115px]" data-name="Container">
      <AsideSideNavBar />
      <MainContent />
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

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#a04100] text-[24px] w-[136px]">
        <p className="leading-[28.8px]">ManéGuide</p>
      </div>
    </div>
  );
}

function Container61() {
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
        <Container61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2bfb0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container62() {
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="Container">
      <Input />
      <Container62 />
    </div>
  );
}

function Button2() {
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

function Container59() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[30px] items-center left-[922px] top-1/2" data-name="Container">
      <Container60 />
      <Button2 />
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
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0 w-[80px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#a04100] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a04100] text-[20px] w-[89px]">
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

function Container57() {
  return (
    <div className="absolute content-stretch flex h-[66px] items-center justify-between left-[-56px] max-w-[1200px] pl-[64px] py-[16px] right-[97px] top-0" data-name="Container">
      <Container58 />
      <Container59 />
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
        <Container57 />
        <Group7 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#fff8f5] content-stretch flex flex-col h-[71px] items-start left-0 pb-[2px] px-[40px] right-0 top-[49px]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e2bfb0] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="h-[56px] relative shrink-0 w-[57px]" data-name="download 1" />
      <Frame />
    </div>
  );
}

function Container64() {
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

function Container65() {
  return (
    <div className="content-stretch flex gap-[24px] h-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#33312a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">© 2026 ManéGuide - Feito com sotaque em Floripa.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[47px] max-w-[1200px] pl-[64px] pr-[64.02px] right-[33px] top-[1682px]" data-name="Container">
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 245) 0%, rgb(255, 248, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Container />
      <Footer />
      <HeaderTopNavBar />
      <Container63 />
    </div>
  );
}
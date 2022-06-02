import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
  /*Typography brand guide*/
  --font-size--colossal:64px;
  --font-size--gigantic:48px;
  --font-size--huge:36px;
  --font-size--large:32px;
  --font-size--medium:24px;
  --font-size--normal:18px;
  --font-size--small:16px;
  --font-size--tiny:14px;
  --font-size--micro:12px;

--letter-spacing-none:0;
--letter-spacing-small:0.02rem;
--letter-spacing-medium:0.04rem;
--letter-spacing-large:0.08rem;
 
 --font-weight-regular:400;
 --font-weight-medium:500;
 --font-weight-samibold:600;
/*Colors brand guide*/
--light-greys-500:#FEFDFF;
--light-greys-600:#FCFBFF;
--light-greys-700:#FBFAFF;
--light-greys-800:#FAF8FF;
--light-greys-900:#F7F4FF;
--medium-greys-500:#F8F8F8;
--medium-greys-600:#F3F3F3;
--medium-greys-700:#EBEBEB;
--medium-greys-800:#DFDFDF;
--medium-greys-900:#DADADA;
--dark-greys-500:#A3A3A3;
--dark-greys-600:#707070;
--dark-greys-700:#525252;
--dark-greys-800:#525252;
--dark-greys-900:#2B2B2B;
--neutral-50:#F9FAFB;
--neutral-100:#F3F4F6;
--neutral-200:#E5E7EB;
--neutral-300:#D1D5DB;
--neutral-400:#9CA3AF;
--neutral-500:#6B7280;
--neutral-600:#4B5563;
--neutral-700:#374151;
--neutral-800:#1F2937;
--neutral-900:#111827;
--light-power:#F2F2F0;
--dark-power:#484848;
--primary-power-50:#F4F0FF;
--primary-power-100:#E4DAFF;
--primary-power-200:#C9B5FF;
--primary-power-300:#AD91FF;
--primary-power-400:#926CFF;
--primary-power-500:#7747FF;
--primary-power-600:#693AF2;
--primary-power-700:#5E2FE3;
--primary-power-800:#4A1EC6;
--primary-power-900:#2D117B;
--warm-power-50:#FFFBF0;
--warm-power-100:#FFF0CC;
--warm-power-200:#FFE299;
--warm-power-300:#FFD366;
--warm-power-400:#FFC533;
--warm-power-500:#FFB600;
--warm-power-600:#F2AD00;
--warm-power-700:#E4A300;
--warm-power-800:#C88F00;
--warm-power-900:#A57600;
--hope-power-50:#FFFBFD;
--hope-power-100:#FFF0F8;
--hope-power-200:#FFE1F0;
--hope-power-300:#FFD1E9;
--hope-power-400:#FFC2E1;
--hope-power-500:#FFB3DA;
--hope-power-600:#FAA1CF;
--hope-power-700:#F283BD;
--hope-power-800:#E760A6;
--hope-power-900:#C22376;
--baby-power-50:#FEFBFF;
--baby-power-100:#FDF9FE;
--baby-power-200:#FAF2FD;
--baby-power-300:#F8ECFB;
--baby-power-400:#F5E5FA;
--baby-power-500:#F3DFF9;
--baby-power-600:#EECFF8;
--baby-power-700:#DEB2EC;
--baby-power-800:#CC94DE;
--baby-power-900:#AC63C4;
--blue-50:#F1F7FF;
--blue-100:#D3E6FF;
--blue-200:#A7CDFF;
--blue-300:#7BB4FF;
--blue-400:#4F9AFF;
--blue-500:#2381FF;
--blue-600:#0D6CEB;
--blue-700:#0059D0;
--blue-800:#004DB4;
--blue-900:#00367E;
--turquoise-50:#F5FDFF;
--turquoise-100:#E0F7FF;
--turquoise-200:#C0F0FF;
--turquoise-300:#A1E8FF;
--turquoise-400:#81E1FF;
--turquoise-500:#62D9FF;
--turquoise-600:#4CCBF3;
--turquoise-700:#34B4DC;
--turquoise-800:#0E8EB6;
--turquoise-900:#006787;
--sea-green-50:#EDFFFE;
--sea-green-100:#D0FFFD;
--sea-green-200:#B0FFFB;
--sea-green-300:#ADFFFB;
--sea-green-400:#A6FFFA;
--sea-green-500:#80FFF8;
--sea-green-600:#5BF3EB;
--sea-green-700:#11D7CC;
--sea-green-800:#00A299;
--sea-green-900:#005652;
--green-50:#F9FDF4;
--green-100:#E7F8D1;
--green-200:#CFF2A3;
--green-300:#B7EB76;
--green-400:#A0E548;
--green-500:#88DE1A;
--green-600:#68BA00;
--green-700:#508F00;
--green-800:#396500;
--green-900:#254300;
--success-50:#F0FDF4;
--success-100:#DCFCE7;
--success-200:#BBF7D0;
--success-300:#86EFAC;
--success-400:#4ADE80;
--success-500:#22C55E; 
--success-600:#16A34A;
--success-700:#15803D;
--success-800:#166534;
--success-900:#14532D;
--warning-50:#FFFBEB;
--warning-100:#FEF3C7;
--warning-200:#FDE68A;
--warning-300:#FCD34D;
--warning-400:#FBBF24;
--warning-500:#F59E0B; 
--warning-600:#D97706;
--warning-700:#B45309;
--warning-800:#92400E;
--warning-900:#78350F;
--destructive-50:#FEF2F2;
--destructive-100:#FEE2E2;
--destructive-200:#FECACA;
--destructive-300:#FCA5A5;
--destructive-400:#F87171;
--destructive-500:#EF4444; 
--destructive-600:#DC2626;
--destructive-700:#B91C1C;
--destructive-800:#991B1B;
--destructive-900:#7F1D1D;
--shades-00:#fff;
--shades-100:#000;

/*gradients brand guide*/
--gradient-organic-light-500:
linear-gradient(114.6deg, rgba(250, 161, 207, 0.2) -5.14%, rgba(250, 161, 207, 0) 36.54%),
radial-gradient(55.44% 311.67% at 95.58% 131.45%, rgba(129, 225, 255, 0.2) 0%, rgba(161, 232, 255, 0) 100%),
radial-gradient(93.55% 93.55% at 44.56% 73.39%, rgba(228, 218, 255, 0.2) 0%, rgba(228, 218, 255, 0) 100%) ,
radial-gradient(73.13% 153.53% at 73.13% 25.81%, rgba(255, 197, 51, 0.2) 0%, rgba(255, 255, 255, 0) 100%) ,
linear-gradient(0deg, var(--shades-00), var(--shades-100));
--gradient-organic-warm-500:
 radial-gradient(60.61% 235.48% at 93.27% 50%, rgba(252, 165, 165, 0.2) 0%, rgba(252, 165, 165, 0) 100%) ,
linear-gradient(259.06deg, rgba(129, 225, 255, 0.2) -92.97%, rgba(129, 225, 255, 0) 58.66%),
 radial-gradient(49.39% 76.62% at 55.57% 100%, rgba(160, 229, 72, 0.2) 0%, rgba(231, 248, 209, 0.2) 100%),
 linear-gradient(101.72deg, var(--warm-power-400) -28.22%, var(--warm-power-50) 100%);
--gradient-organic-blush-500:
radial-gradient(29.47% 103.18% at 23.88% 141.94%, rgba(242, 131, 189, 0.2) 0%, rgba(242, 131, 189, 0) 100%) ,
radial-gradient(56.77% 114.2% at 85.78% 0%, rgba(255, 211, 102, 0.2) 0%, rgba(255, 211, 102, 0) 100%) ,
linear-gradient(98.41deg, var(--primary-power-200) 0%, var(--hope-power-400) 100%);
--gradient-organic-cool-500:
 linear-gradient(268.22deg, rgba(255, 226, 153, 0.2) 2.41%, rgba(255, 251, 240, 0) 65.43%),
radial-gradient(70.75% 137.65% at 100.27% 112.9%, rgba(250, 161, 207, 0.2) 0%, rgba(255, 179, 218, 0) 100%) ,
linear-gradient(104.86deg, var(--blue-500) -27.64%, var(--blue-100) 100%);

/* I did not find the HEX numbers on the brand guide that supposed to be in this gradient*/
--gradient-linear-warm-500:
linear-gradient(98.41deg, #FF5F6D 0%, #FFC371 100%);
--gradient-linear-cool-500:
linear-gradient(98.41deg, #4CA1AF 0%, #4CA1AF 0.01%, #C4E0E5 100%);

--gradient-linear-primary-500:
 linear-gradient(103.94deg, var(--primary-power-400) 6.94%, var( --hope-power-600) 100%);

 --gradient-linear-off-cool-500:
 linear-gradient(98.57deg, var( --warning-200) -8.6%, var( --primary-power-700) 122.24%);

 --gradient-linear-off-warm-500:
 linear-gradient(98.7deg, var(--destructive-500) -11.66%, var(--sea-green-300) 100%);

 --gradient-linear-off-primary-500:
linear-gradient(106deg, var(--primary-power-900) -20.67%, var(--hope-power-400)108.04%);

 --gradient-linear-dark-garden-500:
 /*in the brand book sheet this gradient appear in diffent HEX number #00A199 in the code it self and on the color guide it appear as sea-green-800:#00A299*/
 linear-gradient(98.41deg,var(--hope-power-900) 0%, var(--sea-green-800) 100%);

 --gradient-linear-green-500:
linear-gradient(98.41deg, var(--success-700) 0%, var(--success-300) 100%);

--gradient-linear-dark-cool-500:
 /*in the brand book sheet this gradient appear in diffent HEX number #AC63C3 in the code it self and on the color guide it appear as baby-power-900:#AC63C4*/
linear-gradient(98.03deg, var(--blue-500) -15.29%, var(--baby-power-900)107.57%);

--gradient-radial-center: 
    radial-gradient( 41.57% 203.21% at 91.57% 84.27%, rgba(13, 108, 235, 0.4) 0%, rgba(35, 129, 255, 0) 100% ),
    radial-gradient(  50% 50% at 50% 50%,rgba(255, 226, 153, 0.4) 0%, rgba(255, 209, 233, 0) 100%),
    linear-gradient(98.7deg, var(--primary-power-100) -11.66%, rgba(228, 218, 255, 0) 100%);
--gradient-linear-left-bottom:
    linear-gradient(106deg,rgba(17, 215, 204, 0.2) 16.33%,rgba(0, 86, 82, 0.2) 95.56%),
    radial-gradient(50.43% 50.43% at 45.72% 65.3%,rgba(255, 211, 102, 0.2) 0%, rgba(255, 251, 240, 0.2) 100%  ),
    linear-gradient(212.83deg, var(--primary-power-200) -0.49%, rgba(244, 240, 255, 0.46) 80.39%);
 --gradient-linear-radia-center:
    radial-gradient(43.97% 134.27% at 32.1% 21.98%, var(--blue-100) 0%,rgba(192, 240, 255, 0) 100%),
    linear-gradient(217.61deg, var(--primary-power-200) 20.91%, var(--hope-power-400) 78.24%);
--gradient-radial-left: radial-gradient(27.29% 60.19% at 72.15% 89.66%,rgba(255, 182, 0, 0.4) 0%,rgba(217, 119, 6, 0) 100%),
    linear-gradient(180deg,rgba(250, 161, 207, 0) 0%,rgba(250, 161, 207, 0.4) 100%),
    linear-gradient(165.14deg, var(--warm-power-300) 4.85%, var(--success-50) 89.52%); 
--gradient-radial-right-top: 
    linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, var(--shades-00) 100%),
    radial-gradient(132.71% 141.6% at 33.76% -32.71%,rgba(173, 145, 255, 0.36) 0%, rgba(201, 181, 255, 0) 100%),
    radial-gradient(55.16% 159.36% at 90.11% -21.09%,var(--primary-power-500) 0%,rgba(243, 223, 249, 0) 47.92%,rgba(255, 179, 218, 0) 100%),
    linear-gradient( 208.55deg,var(--hope-power-400) -0.96%,var(--hope-power-200) 15.1%,rgba(255, 251, 253, 0) 82.38%);
}



body {margin:0;width:100vw;max-width:100vw;
  font-family: 'Manrope', sans-serif;
  font-size:var(--font-size--small );
  font-weight:var(--font-weight-regular);

  }
  
`

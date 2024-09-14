import styled from 'styled-components';

export const Container = styled.div`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    font-size: inherit;
    user-select: none;
    -webkit-user-select: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
    outline: none !important;
  }

  .w-richtext > :first-child {
    margin-top: 0;
  }

  .w-richtext > :last-child {
    margin-bottom: 0;
  }

  .cta-button-bg {
    background: radial-gradient(
      190.82% 190.82% at 50% 100%,
      rgba(254, 173, 15, 1) 0%,
      rgba(168, 112, 64, 0.62) 18.09%
    );
  }
  .cta-button:hover .cta-button-bg {
    opacity: 0.2;
  }
  .cta-button:hover .cta-gradient {
    background-image: linear-gradient(
      90.92deg,
      #f4c15f -25.43%,
      #ffb677 127.94%
    );
  }
  section:focus {
    outline: none;
  }
  .footer-status-dot {
    --color: #09b374;
    background-color: var(--color);
  }
  .footer-status-dot::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: var(--color);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    80% {
      transform: scale(2.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  .filters-wrap::-webkit-scrollbar {
    display: none;
  }
  .announcement-pill {
    background-image: radial-gradient(
      202.04% 202.04% at 50% 111.22%,
      rgba(255, 254, 241, 0.2) 0%,
      rgba(120, 120, 120, 0.2) 23.95%
    );
  }
  .blur-perf {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  .home-hero-heading {
    font-size: 75px;
    font-weight: 500;
    @media only screen and (max-width: 900px) {
      font-size: 35px;
    }
  }
  .faq-body {
    height: auto !important;
  }

  .home-hero-header .home-hero-heading {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .home-hero-header .home-hero-paragraph {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  .home-hero-header .cta-button {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .home-hero-img-wrap {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }
  .home-hero-logos-wrap {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .home-hero-float-wrap {
    -webkit-animation: fadeIn 0.4s backwards ease;
    animation: fadeIn 0.4s backwards ease;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: auto;
      transform: translateY(0px);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: auto;
      transform: translateY(0px);
    }
  }
  .home-hero-h-line {
    --border-offset: calc((100vw - 993px) / 2);
    background-image: linear-gradient(
      to right,
      rgba(255, 254, 241, 0),
      rgba(255, 254, 241, 0.1) var(--border-offset),
      rgba(255, 254, 241, 0.1) calc(var(--border-offset) + 993px),
      rgba(255, 254, 241, 0)
    );
  }
  @media only screen and (min-width: 1440px) {
    .home-hero-h-line {
      --border-offset: 223.5px;
    }
  }
  .home-hero:hover .home-hero-bg-highlight {
    opacity: 100%;
  }
  .float-item {
    background-color: currentColor;
  }
  .float-item-icon {
    filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
    -webkit-filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  }
  .float-item-inner {
    background: currentColor;
  }
  .float-item-line {
    background-image: linear-gradient(
      -90deg,
      transparent,
      currentColor,
      transparent
    );
    will-change: transform, opacity;
  }
  .float-item-line--top {
    background-image: linear-gradient(
      90deg,
      transparent,
      currentColor,
      transparent
    );
  }
  .float-item-line--left {
    background-image: linear-gradient(
      365deg,
      transparent,
      currentColor,
      transparent
    );
  }
  .float-item-line--right {
    background-image: linear-gradient(
      180deg,
      transparent,
      currentColor,
      transparent
    );
  }

  .home-hero-bg-wrap::before,
  .use-case-card::before,
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0;
    will-change: background, opacity;
    transition-duration: 400ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: opacity;
    background-image: radial-gradient(
      600px at var(--cursor-x) var(--cursor-y),
      rgba(255, 254, 241, 0.15),
      transparent 40%
    );
    background-size: auto;
    background-origin: padding-box;
    z-index: 1;
  }
  .use-case-card::before,
  .feature-card::before {
    background-image: radial-gradient(
      500px at var(--cursor-x) var(--cursor-y),
      rgba(255, 254, 241, 0.3),
      transparent 40%
    );
    border-radius: inherit;
  }

  .home-hero:hover .home-hero-bg-wrap::before,
  .use-cases-grid:hover .use-case-card::before,
  .features-grid:hover .feature-card::before {
    opacity: 1;
  }
  .home-hero-img-wrap::after,
  .feature-card-inner::after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0;
    will-change: background, opacity;
    transition-duration: 400ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: opacity;
    background-image: radial-gradient(
      600px at var(--cursor-x) var(--cursor-y),
      rgba(255, 254, 241, 0.05),
      transparent 60%
    );
    background-size: auto;
    background-origin: padding-box;
    z-index: 3;
  }
  .feature-card-inner::after {
    background-image: radial-gradient(
      500px at var(--cursor-x) var(--cursor-y),
      rgba(255, 254, 241, 0.06),
      transparent 60%
    );
    border-radius: inherit;
  }
  .home-hero-img-wrap:hover.home-hero-img-wrap::after,
  .feature-card:hover .feature-card-inner::after {
    opacity: 1;
  }

  .float-item-line {
    --distance: 1000px;
  }
  .animate .float-item-line--bottom {
    animation: float-laser-bottom 2s linear;
    animation-iteration-count: 1;
  }
  .animate .float-item-line--top {
    animation: float-laser-top 2s linear;
    animation-iteration-count: 1;
  }
  .animate .float-item-line--left {
    animation: float-laser-left 2s linear;
    animation-iteration-count: 1;
  }
  .animate .float-item-line--right {
    animation: float-laser-right 2s linear;
    animation-iteration-count: 1;
  }
  @keyframes float-laser-bottom {
    0% {
      transform: translateX(0px);
      opacity: 0;
    }
    12% {
      transform: translateX(0px);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(var(--distance) * -1));
      opacity: 0;
    }
  }
  @keyframes float-laser-top {
    0% {
      transform: translateX(0px);
      opacity: 0;
    }
    12% {
      transform: translateX(0px);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(var(--distance));
      opacity: 0;
    }
  }
  @keyframes float-laser-left {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    12% {
      transform: translateY(0px);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(calc(var(--distance) * -1));
      opacity: 0;
    }
  }
  @keyframes float-laser-right {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    12% {
      transform: translateY(0px);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(var(--distance));
      opacity: 0;
    }
  }
  .float-item-wrap.animate {
    animation: float-item-bounce 2s ease;
    animation-iteration-count: 1;
  }
  @keyframes float-item-bounce {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.85);
    }
    15% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
  .on-chain-icon-wrap:hover .on-chain-icon-inner {
    background-color: #424448;
  }
  .section-card-wrap--sticky {
    bottom: calc((100vh - 700px) / 2);
  }
  @media only screen and (min-width: 992px) {
    .on-off-ramps-trigger {
      bottom: calc((((100vh - 600px) / 2) + 600px) * (-1));
    }
  }
  .on-off-ramps-trigger,
  .cards-bg,
  .circuit-overlay,
  .use-cases-bg {
    pointer-events: none;
  }
  .faq-header {
    -webkit-tap-highlight-color: transparent;
  }
  .cta-banner-blur {
    background: linear-gradient(
      312.23deg,
      #fabe65 -3.97%,
      rgba(251, 131, 160, 0) 125.5%
    );
  }
  .home-hero-img-blur {
    background: linear-gradient(
      91.57deg,
      rgba(250, 190, 101, 0.5) -15.63%,
      rgba(190, 127, 107, 0.5) 16.07%,
      rgba(131, 155, 251, 0.5) 108.52%
    );
  }
  .use-cases-bg-blur {
    background: linear-gradient(
      267.56deg,
      #232428 22.11%,
      #5e7cf1 40.73%,
      #1e6bff 54.78%,
      #133e04 69.88%,
      #9bcff2 89.56%
    );
  }
  .faq-bg {
    background: linear-gradient(
      91.57deg,
      rgba(250, 190, 101, 0.7) -15.63%,
      rgba(190, 127, 107, 0.7) 35.95%,
      rgba(131, 155, 251, 0.7) 108.52%
    );
  }
  @media only screen and (max-width: 600px) {
    .use-cases-grid {
      margin-right: auto;
      margin-left: auto;
      grid-row-gap: 18px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr !important;
    }
  }
`;

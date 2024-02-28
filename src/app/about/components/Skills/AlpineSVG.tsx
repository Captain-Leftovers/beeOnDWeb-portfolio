export default function AlpineSVG() {
return (
<div className=" " >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="-2 -35 140 140"
  >
    <g filter="url(#a)">
      <path
        fill="#77C1D2"
        d="m105.325.708 30.092 29.96-30.092 29.961-30.093-29.96L105.325.708Z"
        />
      <path
        fill="#2D3441"
        d="M30.093.708 92.479 62.82H32.293L0 30.67 30.093.708Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={143.417}
        height={70.112}
        x={-4}
        y={0.708}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_6" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_112_6"
          result="shape"
          />
      </filter>
    </defs>
  </svg>
    </div>
)

}
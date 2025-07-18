export const NextLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    aria-label="Next.js logomark"
    role="img"
    viewBox="0 0 180 180"
    width="38"
  >
    <mask
      id="a"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
    >
      <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
    </mask>
    <g mask="url(#a)">
      <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
      <path
        d="M149.509 157.52L69.143 54H54v72h12.115v-58.26l68.19 89.78H149.51z"
        fill="hsl(var(--background))"
      ></path>
      <path d="M126 126h-12V54h12v72z" fill="hsl(var(--background))"></path>
    </g>
  </svg>
);

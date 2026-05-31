interface PlaceholderSpeciesImageProps {
  nome: string;
  className?: string;
}

export function PlaceholderSpeciesImage({
  nome,
  className = "h-full w-full",
}: PlaceholderSpeciesImageProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Imagem ilustrativa da espécie ${nome}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pancGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#dcfce7" />
          <stop offset="100%" stopColor="#bbf7d0" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#pancGradient)" rx="24" />
      <circle cx="120" cy="120" r="54" fill="#86efac" opacity="0.55" />
      <circle cx="700" cy="90" r="42" fill="#4ade80" opacity="0.35" />
      <path
        d="M180 360c38-100 95-150 170-150 74 0 122 32 165 110 21 39 40 60 73 60 22 0 42-9 62-30v88H150c5-29 14-55 30-78z"
        fill="#22c55e"
        opacity="0.22"
      />
      <g transform="translate(318,112)">
        <path d="M84 40c-16 32-15 66 3 101 14-34 13-68-3-101z" fill="#15803d" />
        <path
          d="M79 40C43 45 16 64 0 98c36 5 63-14 79-58z"
          fill="#16a34a"
        />
        <path
          d="M90 40c37 4 65 23 83 58-36 6-64-13-83-58z"
          fill="#22c55e"
        />
        <path
          d="M86 70c-27 20-43 45-46 76 31-8 46-33 46-76z"
          fill="#15803d"
          opacity="0.88"
        />
        <path
          d="M88 70c27 20 43 45 46 76-31-8-46-33-46-76z"
          fill="#16a34a"
          opacity="0.88"
        />
      </g>
      <text
        x="400"
        y="410"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="34"
        fill="#14532d"
        fontWeight="700"
      >
        {nome || "Espécie"}
      </text>
      <text
        x="400"
        y="448"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="20"
        fill="#166534"
      >
        Imagem ilustrativa da espécie
      </text>
    </svg>
  );
}

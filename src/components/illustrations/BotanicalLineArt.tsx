interface BotanicalLineArtProps {
  className?: string;
  mirrored?: boolean;
}

export function BotanicalLineArt({
  className = "",
  mirrored = false,
}: BotanicalLineArtProps) {
  return (
    <svg
      viewBox="0 0 220 440"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustração botânica decorativa"
      className={className}
      style={{ transform: mirrored ? "scaleX(-1)" : undefined }}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ── HASTE PRINCIPAL ─────────────────────────────── */}
        <path
          d="M108 430 C106 390 100 355 96 318 C92 282 90 248 94 214 C97 186 103 160 110 132 C115 110 120 88 118 62 C117 48 113 34 108 22"
          strokeWidth="2"
          opacity="0.9"
        />

        {/* ── FLOR ABERTA NO TOPO ──────────────────────────── */}
        {/* pétalas */}
        <path d="M108 22 C104 14 97 6 90 4 C83 2 80 9 84 17 C88 24 99 26 108 22" strokeWidth="1.3" opacity="0.85" />
        <path d="M108 22 C112 14 119 6 126 4 C133 2 136 9 132 17 C128 24 117 26 108 22" strokeWidth="1.3" opacity="0.85" />
        <path d="M108 22 C100 14 96 5 98 -3 C100 -10 108 -10 112 -3 C115 4 112 14 108 22" strokeWidth="1.3" opacity="0.8" />
        <path d="M108 22 C118 18 128 20 134 26 C140 32 137 40 130 41 C122 42 114 34 108 22" strokeWidth="1.3" opacity="0.8" />
        <path d="M108 22 C98 18 88 20 82 26 C76 32 79 40 86 41 C94 42 102 34 108 22" strokeWidth="1.3" opacity="0.8" />
        {/* miolo */}
        <circle cx="108" cy="22" r="5" strokeWidth="1.4" opacity="0.9" />
        <circle cx="108" cy="22" r="2.2" strokeWidth="1" opacity="0.7" />
        {/* estames */}
        <path d="M108 17 C107 13 106 10 107 8" strokeWidth="0.8" opacity="0.55" />
        <circle cx="107" cy="7" r="1" strokeWidth="0.8" opacity="0.55" />
        <path d="M112 19 C115 16 117 13 119 11" strokeWidth="0.8" opacity="0.5" />
        <circle cx="120" cy="10" r="1" strokeWidth="0.8" opacity="0.5" />
        <path d="M104 19 C101 16 99 13 97 11" strokeWidth="0.8" opacity="0.5" />
        <circle cx="96" cy="10" r="1" strokeWidth="0.8" opacity="0.5" />

        {/* ── FOLHA GRANDE ESQUERDA ────────────────────────── */}
        <path
          d="M96 210 C74 196 54 178 46 156 C38 136 46 118 62 120 C78 122 90 142 96 210"
          strokeWidth="1.5"
          opacity="0.88"
        />
        {/* nervura central */}
        <path d="M96 210 C82 186 70 162 66 142" strokeWidth="1" opacity="0.5" />
        {/* nervuras laterais */}
        <path d="M72 160 C64 154 57 152 50 154" strokeWidth="0.75" opacity="0.38" />
        <path d="M76 172 C68 167 61 166 55 168" strokeWidth="0.75" opacity="0.38" />
        <path d="M80 184 C73 180 66 179 61 181" strokeWidth="0.75" opacity="0.38" />
        <path d="M86 196 C80 193 74 193 69 195" strokeWidth="0.75" opacity="0.38" />

        {/* ── BROTO FECHADO ────────────────────────────────── */}
        <path d="M96 175 C88 162 84 148 86 136 C88 126 95 122 100 128 C105 134 103 152 96 175" strokeWidth="1.3" opacity="0.78" />
        <path d="M96 175 C104 162 110 148 108 136 C106 126 99 122 94 128" strokeWidth="1.3" opacity="0.72" />
        {/* sépala */}
        <path d="M96 175 C92 180 90 185 92 190 C94 195 98 195 100 190 C102 185 100 180 96 175" strokeWidth="1.1" opacity="0.65" />

        {/* ── FOLHA DIREITA GRANDE ─────────────────────────── */}
        <path
          d="M100 155 C124 136 148 124 166 118 C182 112 192 118 188 132 C184 146 162 152 100 155"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <path d="M100 155 C124 146 148 136 166 128" strokeWidth="1" opacity="0.48" />
        <path d="M148 124 C156 118 164 116 170 118" strokeWidth="0.75" opacity="0.36" />
        <path d="M136 130 C144 124 152 122 158 124" strokeWidth="0.75" opacity="0.36" />
        <path d="M122 140 C130 134 138 132 144 134" strokeWidth="0.75" opacity="0.36" />

        {/* ── FLOR LATERAL PEQUENA ─────────────────────────── */}
        {/* haste lateral */}
        <path d="M98 120 C88 108 76 100 62 96" strokeWidth="1.2" opacity="0.75" />
        {/* pétalas flor pequena */}
        <path d="M62 96 C56 90 53 82 57 77 C61 72 67 75 68 82 C69 88 66 93 62 96" strokeWidth="1.2" opacity="0.8" />
        <path d="M62 96 C68 90 75 87 80 90 C85 93 84 100 78 101 C72 102 66 100 62 96" strokeWidth="1.2" opacity="0.75" />
        <path d="M62 96 C56 102 54 110 58 115 C62 120 68 118 69 111 C70 105 67 100 62 96" strokeWidth="1.2" opacity="0.75" />
        <path d="M62 96 C58 89 52 84 46 85 C40 86 39 93 44 97 C49 101 57 100 62 96" strokeWidth="1.2" opacity="0.72" />
        <circle cx="62" cy="96" r="3.5" strokeWidth="1.3" opacity="0.85" />

        {/* ── TENDRILHOS ENROLADOS ─────────────────────────── */}
        <path
          d="M102 260 C112 252 122 246 128 248 C134 250 134 258 128 262 C122 266 116 264 114 260 C112 256 116 252 120 254"
          strokeWidth="1.1"
          opacity="0.65"
        />
        <path
          d="M94 300 C84 292 76 286 70 288 C64 290 64 298 70 302 C76 306 82 304 84 300 C86 296 82 292 78 294"
          strokeWidth="1.1"
          opacity="0.6"
        />

        {/* ── FOLHA MÉDIA DIREITA BAIXO ────────────────────── */}
        <path
          d="M97 290 C118 274 138 264 154 262 C168 260 175 268 169 280 C163 292 142 294 97 290"
          strokeWidth="1.4"
          opacity="0.8"
        />
        <path d="M97 290 C118 282 138 274 154 270" strokeWidth="0.9" opacity="0.44" />
        <path d="M134 266 C142 262 150 261 156 263" strokeWidth="0.7" opacity="0.34" />
        <path d="M120 274 C128 270 136 268 142 270" strokeWidth="0.7" opacity="0.34" />

        {/* ── RAMINHOS COM BAGAS ───────────────────────────── */}
        <path d="M95 330 C80 322 66 316 56 318" strokeWidth="1.2" opacity="0.7" />
        <path d="M74 322 C70 314 68 306 72 300 C76 294 82 295 83 302 C84 309 80 318 74 322" strokeWidth="1.1" opacity="0.68" />

        {/* bagas */}
        <path d="M93 350 C88 340 86 330 88 322" strokeWidth="1.1" opacity="0.68" />
        <circle cx="88" cy="320" r="4" strokeWidth="1.2" opacity="0.72" />
        <path d="M98 356 C95 346 95 336 99 329" strokeWidth="1.1" opacity="0.62" />
        <circle cx="99" cy="327" r="3.2" strokeWidth="1.2" opacity="0.65" />
        <path d="M104 352 C103 342 105 332 109 326" strokeWidth="1.1" opacity="0.58" />
        <circle cx="110" cy="324" r="2.6" strokeWidth="1.2" opacity="0.6" />
        {/* linha na baga */}
        <path d="M86 318 C87 316 89 316 90 318" strokeWidth="0.7" opacity="0.45" />
        <path d="M97 325 C98 323 100 323 101 325" strokeWidth="0.7" opacity="0.42" />

        {/* ── FOLHA PEQUENA ESQUERDA BAIXO ─────────────────── */}
        <path
          d="M94 375 C76 362 62 346 60 328 C58 312 68 305 80 310 C90 314 94 332 94 375"
          strokeWidth="1.3"
          opacity="0.75"
        />
        <path d="M94 375 C82 354 74 334 72 318" strokeWidth="0.9" opacity="0.42" />
        <path d="M74 336 C68 330 62 328 58 330" strokeWidth="0.7" opacity="0.33" />
        <path d="M78 350 C72 346 66 345 62 347" strokeWidth="0.7" opacity="0.33" />
        <path d="M84 364 C78 361 72 361 68 363" strokeWidth="0.7" opacity="0.33" />

        {/* ── PONTOS DECORATIVOS ───────────────────────────── */}
        <circle cx="130" cy="210" r="2" strokeWidth="1" opacity="0.35" />
        <circle cx="136" cy="218" r="1.3" strokeWidth="0.9" opacity="0.28" />
        <circle cx="126" cy="222" r="1" strokeWidth="0.9" opacity="0.25" />

        <circle cx="60" cy="240" r="1.8" strokeWidth="1" opacity="0.3" />
        <circle cx="52" cy="248" r="1.2" strokeWidth="0.9" opacity="0.25" />
      </g>
    </svg>
  );
}

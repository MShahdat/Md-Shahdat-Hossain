
export const reactSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
  </svg>
);


export const prismaSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer triangle */}
    <path
      d="M12 2L2 19.5H22L12 2Z"
      stroke="#5A67D8"
      strokeWidth="1.2"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Inner vertical line — center split */}
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="19.5"
      stroke="#5A67D8"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Left face fill */}
    <path
      d="M12 2L2 19.5H12V2Z"
      fill="#5A67D8"
      opacity="0.3"
    />
    {/* Right face fill */}
    <path
      d="M12 2L22 19.5H12V2Z"
      fill="#5A67D8"
      opacity="0.15"
    />
  </svg>
);

export const expressSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
    <rect width="24" height="24" rx="4" fill="#000000" />
    <text
      x="12"
      y="15.5"
      fill="#FFFFFF"
      fontSize="11"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontWeight="300"
      letterSpacing="-0.5"
      textAnchor="middle"
    >
      ex
    </text>
  </svg>
);


export const jsSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C6.9 15 6 14.3 6 12.8c0-1.4 1.1-2.4 2.7-2.4 1.2 0 2 .4 2.6 1.4l-1.4.9c-.3-.5-.6-.7-1.2-.7-.6 0-.9.3-.9.8 0 .5.3.8 1.3 1.2l.6.3c1.6.7 2.5 1.4 2.5 2.9 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.3-1.9l1.2-.9zM14.5 17.3c.3.5.6.9 1.3.9.6 0 1-.3 1-1.3V10.5h1.7v6.5c0 2.1-1.2 3-3 3-1.6 0-2.5-.8-3-1.8l1-.9z" fill="#333" />
  </svg>
);

export const nodeSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" opacity="0.15" />
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#339933" strokeWidth="1.4" fill="none" />
    <path d="M12 8v8M9 10l3-2 3 2" stroke="#339933" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const tsSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="2" fill="#3178C6" />
    <path d="M6 11h6M9 11v7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 15c0-1 .8-1.5 1.8-1.5 1.1 0 2.2.5 2.2 2v2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 17.5c0 1.1 1 1.5 2 1.5s2-.5 2-1.5-1-1.3-2-1.5-2-.5-2-1.5 1-1.5 2-1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const postgresqlSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="7" rx="7" ry="4" fill="#336791" opacity="0.2" stroke="#336791" strokeWidth="1.4" />
    <path d="M5 7v10c0 2.2 3.13 4 7 4s7-1.8 7-4V7" stroke="#336791" strokeWidth="1.4" />
    <path d="M19 12c0 2.2-3.13 4-7 4s-7-1.8-7-4" stroke="#336791" strokeWidth="1.4" />
    <path d="M15 5.5v6" stroke="#336791" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const nextSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 16V8l8 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 8h1.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);



export const pythonSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M11.914 2C7.11 2 7.4 4.08 7.4 4.08l.006 2.152h4.59v.646H5.96S3 6.533 3 11.386s2.616 4.669 2.616 4.669h1.562v-2.247s-.084-2.616 2.574-2.616h4.436s2.49.04 2.49-2.407V4.58S17.065 2 11.914 2zM9.26 3.656a.83.83 0 110 1.662.83.83 0 010-1.662z" fill="#3776AB" />
    <path d="M12.086 22c4.804 0 4.514-2.08 4.514-2.08l-.006-2.152h-4.59v-.646h6.036S21 17.467 21 12.614s-2.616-4.669-2.616-4.669h-1.562v2.247s.084 2.616-2.574 2.616H9.812s-2.49-.04-2.49 2.407v4.205S6.935 22 12.086 22zm2.654-1.656a.83.83 0 110-1.662.83.83 0 010 1.662z" fill="#FFD43B" />
  </svg>
);

export const cppSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M10.5 15.97a5.97 5.97 0 110-7.94" stroke="#00599C" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 12h4M16 10v4" stroke="#00599C" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M20 12h4M22 10v4" stroke="#00599C" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const javaSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M8.851 18.564S7.605 19.31 9.756 19.56c2.6.301 3.929.258 6.797-.29 0 0 .753.472 1.804.881-6.417 2.75-14.52-.16-9.506-1.587z" fill="#E76F00" />
    <path d="M8.165 15.895s-1.42 1.052.749 1.277c2.807.288 5.026.312 8.858-.424 0 0 .524.532 1.349.822-7.847 2.294-16.588.181-10.956-1.675z" fill="#E76F00" />
    <path d="M13.574 10.302c1.6 1.84-.42 3.496-.42 3.496s4.059-2.095 2.196-4.715c-1.737-2.443-3.068-3.659 4.14-7.847 0 .001-11.314 2.826-5.916 9.066z" fill="#E76F00" />
    <path d="M20.563 20.556s1.05.866-.759 1.535c-2.752 1.025-11.456 1.334-13.873.041-1.023-.52 0-1.242.756-1.393.317-.066.498-.054.498-.054-.573-.403-3.703.793-1.59 1.135 5.758.934 10.494-.421 14.968-1.264z" fill="#E76F00" />
    <path d="M9.327 13.276s-3.724.885-1.318 1.206c1.014.137 3.038.106 4.923-.054 1.54-.131 3.086-.41 3.086-.41s-.542.232-.934.5c-3.773 1.002-11.061.535-8.963-.484 1.77-.853 3.206-.758 3.206-.758z" fill="#E76F00" />
    <path d="M17.706 17.417c3.837-1.994 2.062-3.909.824-3.652-.302.063-.437.118-.437.118s.113-.176.327-.252c2.44-.858 4.317 2.527-.79 3.867 0-.001.059-.053.076-.081z" fill="#E76F00" />
    <path d="M14.973 2s2.13 2.131-2.021 5.41c-3.327 2.629-.759 4.128-.001 5.836-1.941-1.751-3.363-3.293-2.408-4.729C11.947 6.408 15.836 5.385 14.973 2z" fill="#E76F00" />
  </svg>
);


export const gitSvg = (
  <svg viewBox="0 0 24 24">
    <path fill="#F05032" d="M23.546 10.93L13.07.454a1.55 1.55 0 00-2.19 0L8.71 2.63l2.76 2.76a1.84 1.84 0 012.33 2.35l2.66 2.66a1.84 1.84 0 11-1.11 1.05l-2.48-2.48v6.53a1.84 1.84 0 11-1.52-.05V8.94a1.84 1.84 0 01-1-2.41L6.74 3.91.454 10.19a1.55 1.55 0 000 2.19l10.48 10.48a1.55 1.55 0 002.19 0l10.42-10.42a1.55 1.55 0 000-2.19z" />
  </svg>
);


export const githubSvg = (
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.61-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0012 .3z" />
  </svg>
);

export const figmaSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M9 3h6a3 3 0 010 6H9V3z" fill="#F24E1E" />
    <path d="M9 9h6a3 3 0 010 6H9V9z" fill="#FF7262" />
    <path d="M9 15h3a3 3 0 010 6 3 3 0 01-3-3v-3z" fill="#0ACF83" />
    <path d="M9 3H6a3 3 0 000 6h3V3z" fill="#A259FF" />
    <circle cx="9" cy="12" r="3" fill="#1ABCFE" />
  </svg>
);


export const daisyUiSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" fill="#FF69B4" />
    <circle cx="12" cy="5" r="2.2" fill="#FFD700" />
    <circle cx="12" cy="19" r="2.2" fill="#FFD700" />
    <circle cx="5" cy="12" r="2.2" fill="#FFD700" />
    <circle cx="19" cy="12" r="2.2" fill="#FFD700" />
    <circle cx="7.05" cy="7.05" r="2.2" fill="#FFD700" />
    <circle cx="16.95" cy="7.05" r="2.2" fill="#FFD700" />
    <circle cx="7.05" cy="16.95" r="2.2" fill="#FFD700" />
    <circle cx="16.95" cy="16.95" r="2.2" fill="#FFD700" />
  </svg>
);

export const firebaseSvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3.89 15.673L6.255 1l4.549 8.67-6.914 6.003z" fill="#FFA000" />
    <path d="M3.89 15.673l2.365-4.64 4.549 4.968-6.914-.328z" fill="#F57F17" />
    <path d="M10.804 9.67l1.96-7.51L20.11 15.67l-9.306-5.999z" fill="#FF6F00" />
    <path d="M3.89 15.673L12.764 2.16l-.96 7.51-7.914 6.003z" fill="#FFA000" />
    <path d="M3.89 15.673l16.22.001-9.346 5.996-6.874-5.997z" fill="#FFCA28" />
    <path d="M10.764 21.67l9.346-5.996-3.18-9.8-6.166 15.796z" fill="#FFE082" />
  </svg>
);


export const netlifySvg = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M14.5 8.5h-5l-2 7h9l-2-7z" fill="#00C7B7" />
    <path d="M9.5 8.5L7 4l-4 11h4l2.5-6.5z" fill="#00AD9F" />
    <path d="M14.5 8.5L17 4l4 11h-4l-2.5-6.5z" fill="#00AD9F" />
    <path d="M7 15l2 5h6l2-5H7z" fill="#00C7B7" />
    <circle cx="12" cy="4" r="1.5" fill="#00C7B7" />
  </svg>
);

export const vercelSvg = (
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2L2 20h20L12 2z" />
  </svg>
);

export const redisSvg = (
  <svg xmlns="http://w3.org" viewBox="0 0 256 224" width="100%" height="100%">
    <g id="top-layer">
      <polygon points="128,0 228,44 128,88 28,44" fill="#A41F12" />
      <polygon points="128,4 219,44 128,84 37,44" fill="#D82C20" />
      <polygon points="28,44 128,88 128,124 28,80" fill="#A41F12" />
      <polygon points="128,88 228,44 228,80 128,124" fill="#7E140A" />
    </g>


    <g id="middle-layer" transform="translate(0, 50)">
      <polygon points="128,0 228,44 128,88 28,44" fill="#A41F12" />
      <polygon points="128,4 219,44 128,84 37,44" fill="#D82C20" />
      <polygon points="28,44 128,88 128,124 28,80" fill="#A41F12" />
      <polygon points="128,88 228,44 228,80 128,124" fill="#7E140A" />
    </g>


    <g id="bottom-layer" transform="translate(0, 100)">
      <polygon points="128,0 228,44 128,88 28,44" fill="#A41F12" />
      <polygon points="128,4 219,44 128,84 37,44" fill="#D82C20" />
      <polygon points="28,44 128,88 128,124 28,80" fill="#A41F12" />
      <polygon points="128,88 228,44 228,80 128,124" fill="#7E140A" />
    </g>


    <polygon points="48,74 128,109 208,74 128,94" fill="#500700" opacity="0.4" />
    <polygon points="48,124 128,159 208,124 128,144" fill="#500700" opacity="0.4" />
  </svg>
)


export const shahdcnSvg = (
  <svg xmlns="http://w3.org" viewBox="0 0 256 256" width="100%" height="100%">

    <rect width="256" height="256" fill="#09090b" rx="52" />

    <g transform="translate(38, 55)" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <line x1="0" y1="146" x2="146" y2="0" />
      <path d="M 60,146 L 180,146 L 180,26" />
    </g>
  </svg>
)



export const passportSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
    <path d="M64 12C36.8 12 18 20.8 18 48c0 36.8 30.4 60 46 68 15.6-8 46-31.2 46-68 0-27.2-18.8-36-46-36z" fill="#34495e" />

    <circle cx="64" cy="54" r="28" fill="#e74c3c" />

    <circle cx="64" cy="54" r="18" fill="#ffffff" />

    <circle cx="64" cy="54" r="10" fill="#e74c3c" />

    <rect x="36" y="90" width="56" height="4" rx="2" fill="#ffffff" opacity="0.3" />
  </svg>
)



export const cloudinarySvg = (
  <svg xmlns="http://w3.org" viewBox="0 0 256 168" width="100%" height="100%">
    <path d="M192.4 60.5C187 26.1 157.1 0 121.2 0c-26.6 0-49.8 14.3-62.4 35.8-5.3-2.1-11.1-3.3-17.2-3.3C18.6 32.5 0 51.1 0 74.1c0 23 18.6 41.6 41.6 41.6h150.8c35.1 0 63.6-28.5 63.6-63.6 0-31.5-22.9-57.7-53.6-62.6" fill="#3448C5" />
    <path d="M121.2 39c18.5 0 33.7 13.7 36 31.6l2 15.6 15.7 1.3c15.1 1.2 26.9 13.9 26.9 29.1 0 16.1-13.1 29.2-29.2 29.2H41.6C27.5 145.8 16 134.3 16 120.2s11.5-25.6 25.6-25.6c4.6 0 9 .1 12.3 2.5l11.7 8.3 4.1-13.7c4.6-15.3 18.7-25.9 34.7-25.9 2.5 0 5 .3 7.5.8l15.3 3.3-1.8-15.4c-1.3-10.3 6.1-19.5 16.4-20.8 1.4-.2 2.9-.3 4.4-.3" fill="#FFFFFF" />
    <path d="M102.5 98.6c0-5.7 4.6-10.3 10.3-10.3h16.5c5.7 0 10.3 4.6 10.3 10.3v16.5c0 5.7-4.6 10.3-10.3 10.3h-16.5c-5.7 0-10.3-4.6-10.3-10.3z" fill="#F44236" />
  </svg>
)



export const nodeMailerSvg = (
  <svg xmlns="http://w3.org" viewBox="0 0 256 220" width="100%" height="100%">
    <path d="M0 24.57v170.86h256V24.57H0zm218.42 20H128L37.58 44.57 128 118.44l90.42-73.87zM20 63.66l52.61 43.14L20 156.45V63.66zm17.58 110.91l55.12-54.74 27.67 22.69c4.43 3.63 10.83 3.63 15.26 0l27.67-22.69 55.12 54.74H37.58zm198.42-18.12l-52.61-49.65 52.61-43.14v92.79z" fill="#22B14C" />
  </svg>
)



export const biomeSvg = (
  <svg xmlns="http://w3.org" viewBox="0 0 256 256" width="100%" height="100%">
    <path d="M128 0C57.305 0 0 57.305 0 128s57.305 128 128 128 128-57.305 128-128S198.695 0 128 0zm61.34 163.633c-14.73 17.512-36.85 28.367-61.34 28.367-44.183 0-80-35.817-80-80s35.817-80 80-80c24.49 0 46.61 10.855 61.34 28.367L152 89.234C145.473 83.562 137.13 80 128 80c-17.673 0-32 14.327-32 32s14.327 32 32 32c9.13 0 17.473-3.562 24-9.234l37.34 28.867z" fill="#33A6FF" />
  </svg>
)
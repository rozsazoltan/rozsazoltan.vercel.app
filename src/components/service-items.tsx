import React from "react";
import clsx from "clsx";
import { CubeIcon } from "@heroicons/react/16/solid";

export interface ServiceItemProps {
  href: string;
  name: string;
  pricing: string;
  description: string;
  extra?: string;
  button?: string;
  gradientStart: string;
  gradientEnd: string;
  type: 'small' | 'medium' | 'large';
  disabled?: boolean
}

function CubeIconSvg ({ name, type }: Pick<ServiceItemProps, "name" | "type">) {

  // LARGE

  if (type === 'large') {
    if (false) {
      return (
        <svg className="w-full" width="57" height="69" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
      )
    }

    return (<></>)
  }

  // MEDIUM
  
  if (type === 'medium') {
    if (name.toLowerCase() === 'tsunamaji') {
      return (
        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* 1.: bal oldali magasság; 4.: jobb oldali magasság; 2.; forgatás fel/le jobb oldalát; 5.-6.: eltolás x-y */}
          <g transform="matrix(0.4, -0.22, 0, 0.54, 240, 190)">
            <g transform="matrix(1, 0, 0, 1, -0.000014, -32.830185)">
              <g transform="matrix(0.990888, 0, 0, 1.144573, 38.500053, -11.348205)">
                <path fill="#86ded7" d="M 0 368.408 C 0 368.408 85.374 362.161 116.609 295.528 C 147.843 228.896 142.637 98.751 294.645 98.751 C 327.974 98.751 364.472 114.515 384.444 128.419 C 484.655 198.181 437.283 341.34 319.632 304.639 C 319.632 304.639 362.32 302.817 362.32 246.594 C 362.32 190.372 291.933 182.043 281.11 228.895 C 273.4 262.272 277.987 363.204 424.789 368.408"></path>
                <path fill="#86ded7" d="M 319.633 304.639 C 356.074 304.639 427.392 248.156 384.123 180.846 C 353.867 133.776 271.221 124.258 212.396 183.083 C 163.803 231.676 179.15 317.927 79.718 353.5 C 58.905 360.946 33.062 366.172 0.552 368.367 C 7.882 367.691 86.842 359.039 116.609 295.528 C 147.844 228.895 142.638 98.751 294.646 98.751 C 327.973 98.751 364.466 114.514 384.445 128.424 C 484.655 198.181 437.284 341.34 319.633 304.639 Z"></path>
                <path fill="#86ded7" d="M 348.65 310.292 C 432.806 304.044 456.555 188.768 369.869 128.423 C 351.034 115.315 317.54 100.562 285.848 98.906 C 288.722 98.801 291.657 98.75 294.646 98.75 C 327.973 98.75 364.466 114.513 384.445 128.423 C 475.952 192.122 444.405 317.018 348.65 310.292 Z"></path>
                <path fill="#86ded7" d="M 424.789 368.408 L 230.16 368.408 C 208.298 359.333 199.652 327.429 211.355 279.91 C 224.358 227.114 249.669 198.659 287.358 192.454 C 310.004 188.727 327.567 196.14 338.78 203.554 C 317.27 192.049 287.795 199.92 281.111 228.896 C 275.517 253.099 276.393 312.819 333.267 345.808 C 350.359 355.722 372.509 363.221 401.062 366.617 C 408.525 367.504 416.426 368.111 424.789 368.408 Z"></path>
              </g>
              <path fill="#55bf89" strokeWidth="1" d="M 465.449 362.767 C 442.179 362.767 442.179 385.306 418.899 385.306 C 395.629 385.306 395.629 362.767 372.353 362.767 C 349.079 362.767 349.079 385.306 325.806 385.306 C 302.533 385.306 302.533 362.767 279.261 362.767 C 255.989 362.767 255.989 385.306 232.716 385.306 C 209.447 385.306 209.447 362.767 186.177 362.767 C 162.905 362.767 162.905 385.306 139.633 385.306 C 116.36 385.306 116.36 362.767 93.088 362.767 C 69.816 362.767 69.816 385.306 46.543 385.306 C 23.272 385.306 23.272 362.767 0.001 362.767 L 0.001 402.169 L 0.001 417.569 L 0.001 454.009 L 511.999 454.009 L 511.999 440.108 L 511.999 402.169 L 511.999 385.306 C 488.729 385.306 488.729 362.767 465.449 362.767 Z"></path>
              <path fill="#55bf89" strokeWidth="1" d="M 512.002 475.982 C 488.726 475.982 488.726 453.443 465.449 453.443 C 442.173 453.443 442.173 475.982 418.896 475.982 C 395.623 475.982 395.623 453.443 372.35 453.443 C 349.076 453.443 349.076 475.982 325.803 475.982 C 302.53 475.982 302.53 453.443 279.258 453.443 C 255.986 453.443 255.986 475.982 232.713 475.982 C 209.444 475.982 209.444 453.443 186.174 453.443 C 162.902 453.443 162.902 475.982 139.63 475.982 C 116.357 475.982 116.357 453.443 93.085 453.443 C 69.813 453.443 69.813 475.982 46.54 475.982 C 23.269 475.982 23.269 453.443 -0.002 453.443 L -0.002 398.641 C 23.269 398.641 23.269 421.18 46.54 421.18 C 69.811 421.18 69.812 398.641 93.085 398.641 C 116.358 398.641 116.358 421.18 139.63 421.18 C 162.902 421.18 162.902 398.641 186.174 398.641 C 209.444 398.641 209.444 421.18 232.713 421.18 C 255.985 421.18 255.985 398.641 279.258 398.641 C 302.531 398.641 302.531 421.18 325.803 421.18 C 349.077 421.18 349.077 398.641 372.35 398.641 C 395.623 398.641 395.623 421.18 418.896 421.18 C 442.172 421.18 442.172 398.641 465.449 398.641 C 488.725 398.641 488.725 421.18 512.001 421.18 L 512.002 475.982 Z"></path>
            </g>
          </g>
        </svg>
      )
    }

    return (<></>)
  }

  // SMALL

  if (false) {
    return (
      <svg className="w-full" width="36" height="57" viewBox="0 0 36 57" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
    )
  }

  return (<></>)
}

function CubeBottomSvg ({ type }: Pick<ServiceItemProps, "type">) {
  if (type === 'large') {
    return (
      <svg className="w-full aspect-[57/66] absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.7119 69.0001L56.4226 52.9985L28.7107 36.999L1 53.0006L28.7119 69.0001Z" className="fill-sand-light-12 dark:fill-sand-dark-6"></path>
      </svg>
    )
  }
  
  if (type === 'medium') {
    return (
      <svg className="w-full aspect-[127/181] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 127 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.5692 181.002L125.701 132.997L84.1321 108.997L1 157.002L42.5692 181.002Z" className="fill-sand-light-12 dark:fill-sand-dark-6"></path>
      </svg>
    )
  }

  return (
    <svg className="w-full aspect-[36/57] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 36 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.9282 57.0006L35.6389 40.999L28.7107 36.999L1 53.0006L7.9282 57.0006Z" className="fill-sand-light-12 dark:fill-sand-dark-6"></path>
    </svg>
  )
}

function CubeSvg ({
  name,
  gradientStart,
  gradientEnd,
  type,
}: Pick<ServiceItemProps, "name" | "gradientStart" | "gradientEnd" | "type">) {
  if (type === 'large') {
    return (
      <svg className="w-full aspect-[57/66]" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.7119 65.0001L56.4226 48.9985L28.7107 32.999L1 49.0006L28.7119 65.0001Z" className="fill-sand-light-1 dark:fill-sand-dark-1"></path>
        <path d="M28.5857 32.9268L1.125 48.784L1.125 17.0737L28.5857 1.21652L28.5857 32.9268Z" stroke="#001642" strokeWidth="0.25"></path>
        <path d="M28.7119 65.0001L56.4226 48.9985L28.7107 32.999L1 49.0006L28.7119 65.0001Z" stroke="#001642" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path d="M56.4228 48.9984L56.4228 16.9995L28.7109 1L28.7109 32.999L56.4228 48.9984Z" stroke="#001642" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path opacity="0.8" d="M28.3907 32.9278L6.125 45.7852L6.125 20.0739L28.3907 7.21652L28.3907 32.9278Z" stroke="black" strokeWidth="0.25"></path>
        <path d="M28.5167 59.0017L51.0323 46L28.5157 33L6 46.0017L28.5167 59.0017Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path d="M51.0323 46L51.0323 20L28.5156 7L28.5156 33L51.0323 46Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path opacity="0.8" d="M6 20.0017L28.5157 7L51.0323 20L51.0333 46.0003L28.5167 59.002L6 46.002V20.0017Z" fill={`url(#cube_large_linear_${name})`}></path>
        
        <path d="M28.5167 33.002V59.002L6 46.002V20.002L28.5167 33.002Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path d="M51.0323 20L28.5167 33.0017L6 20.0017L28.5157 7L51.0323 20Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"></path>
        <rect opacity="0.8" x="0.108248" y="-0.187508" width="25.75" height="25.75" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 28.7863 58.8289)" stroke="black" strokeWidth="0.25"></rect>
        
        <path opacity="0.8" d="M28.7119 33.0014L28.7119 65.0004L1 49.0009V17.002L28.7119 33.0014Z" className="fill-[#C8C7C1] dark:fill-sand-dark-2"></path>
        <path opacity="0.9" d="M56.4226 16.9995L28.7119 33.001L1 17.0016L28.7107 1L56.4226 16.9995Z" className="fill-sand-light-1 dark:fill-sand-dark-1"></path>
        <rect opacity="0.8" x="0.108248" y="-0.187508" width="31.749" height="31.749" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 28.9816 64.828)" stroke="#001642" strokeWidth="0.25"></rect>
        <path d="M28.7119 33.0014L28.7119 65.0004L1 49.0009V17.002L28.7119 33.0014Z" stroke="#001642" strokeWidth="0.5" strokeLinejoin="round"></path>
        <path d="M56.4226 16.9995L28.7119 33.001L1 17.0016L28.7107 1L56.4226 16.9995Z" stroke="#001642" strokeWidth="0.5" strokeLinejoin="round"></path>
        <defs>
          <linearGradient id={`cube_large_linear_${name}`} x1="6" y1="7" x2="51" y2="59" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientStart} />
            <stop offset="1" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  
  if (type === 'medium') {
    return (
      <svg className="w-full aspect-[127/181]" viewBox="0 0 127 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M42.5692 169.002L125.701 120.997L84.1321 96.9971L1 145.002L42.5692 169.002Z" className="fill-sand-light-6-1 dark:fill-sand-dark-6"></path>
        <path d="M125.702 120.997L125.702 25L84.1328 1L84.1328 96.9969L125.702 120.997Z" className="fill-[#F3F3F2] dark:fill-sand-dark-6"></path>
        <path d="M83.7571 96.7804L1.375 144.352L1.375 49.2212L83.7571 1.64957L83.7571 96.7804Z" stroke="#2E0012" strokeWidth="0.75"></path>
        <path d="M42.5692 169.002L125.701 120.997L84.1321 96.9971L1 145.002L42.5692 169.002Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <path d="M125.702 120.997L125.702 25L84.1328 1L84.1328 96.9969L125.702 120.997Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <path d="M77.172 92.8841L10.375 131.456L10.375 54.3222L77.172 15.7502L77.172 92.8841Z" stroke="#2E0012" strokeWidth="0.75"></path>
        <g opacity="0.9">
          <path d="M51.5692 156.106L119.116 117.101L77.547 93.1006L10 132.106L51.5692 156.106Z" fill={gradientEnd}></path>
        </g>
        <g opacity="0.9">
          <path d="M119.116 117.101L119.116 39.1006L77.5469 15.1006L77.5469 93.1006L119.116 117.101Z" fill={`url(#cube_flat_front_linear_0_${name})`}></path>
        </g>
        <path d="M77.172 92.8841L10.375 131.456L10.375 54.3222L77.172 15.7502L77.172 92.8841Z" stroke="#2E0012" strokeWidth="0.75"></path>
        <path d="M51.5692 156.106L119.116 117.101L77.547 93.1006L10 132.106L51.5692 156.106Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <path d="M119.116 117.101L119.116 39.1006L77.5469 15.1006L77.5469 93.1006L119.116 117.101Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <g opacity="0.9">
          <path d="M51.5692 78.1064L51.5692 156.106L10 132.106L10 54.1064L51.5692 78.1064Z" fill={`url(#cube_flat_front_linear_1_${name})`}></path>
        </g>
        <g opacity="0.9">
          <path d="M119.116 39.1006L51.5692 78.1057L10 54.1057L77.547 15.1006L119.116 39.1006Z" fill={`url(#cube_flat_front_linear_2_${name})`}></path>
        </g>
        <rect opacity="0.9" width="78" height="78" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 51.5781 156.106)" className="fill-sand-light-1 dark:fill-sand-dark-1"></rect>
        <path d="M51.5692 78.1064L51.5692 156.106L10 132.106L10 54.1064L51.5692 78.1064Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <path d="M119.116 39.1006L51.5692 78.1057L10 54.1057L77.547 15.1006L119.116 39.1006Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <rect x="0.324745" y="-0.562524" width="77.25" height="77.25" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 52.39 155.587)" stroke="#2E0012" strokeWidth="0.75"></rect>
        <path opacity="0.8" d="M42.5692 73.0059L42.5692 169.003L1 145.003L1 49.0059L42.5692 73.0059Z" className="fill-[#C8C7C1] dark:fill-sand-dark-5"></path>
        <path opacity="0.8" d="M125.701 25L42.5692 73.0047L1 49.0047L84.1321 1L125.701 25Z" className="fill-sand-light-2 dark:fill-sand-dark-2"></path>
        <path d="M42.5692 73.0059L42.5692 169.003L1 145.003L1 49.0059L42.5692 73.0059Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <path d="M125.701 25L42.5692 73.0047L1 49.0047L84.1321 1L125.701 25Z" stroke="#2E0012" strokeWidth="1.5" strokeLinejoin="round"></path>
        <rect x="0.324745" y="-0.562524" width="95.2469" height="95.2469" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 43.39 168.484)" stroke="#2E0012" strokeWidth="0.75"></rect>
        <defs>
          <linearGradient id={`cube_flat_front_linear_0_${name}`} x1="98.3315" y1="15.1006" x2="98.3315" y2="117.101" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientStart}></stop>
            <stop offset="1" stopColor={gradientEnd}></stop>
          </linearGradient>
          <linearGradient id={`cube_flat_front_linear_1_${name}`} x1="30.7846" y1="54.1064" x2="30.7846" y2="156.106" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientStart}></stop>
            <stop offset="1" stopColor={gradientStart}></stop>
          </linearGradient>
          <linearGradient id={`cube_flat_front_linear_2_${name}`}  x1="118" y1="38.5" x2="52" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientStart}></stop>
            <stop offset="1" stopColor={gradientStart}></stop>
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return (
    <svg className="w-full aspect-[36/57]" viewBox="0 0 36 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M3.73438 50.5787L7.92932 53.0006L35.64 36.999L31.5035 34.6108L3.73438 50.5787Z" className="fill-sand-dark-12 dark:fill-sand-light-12"></path>
      <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M31.5 34.6093L35.6391 36.999L35.6391 5.00009L31.5 2.61035V34.6093Z" className="fill-sand-light-2 dark:fill-sand-dark-2"></path>
      <path opacity="0.8" d="M28.5857 32.9268L1.125 48.784L1.125 17.0737L28.5857 1.21652L28.5857 32.9268Z" stroke="#270300" strokeWidth="0.25"></path>
      <path d="M7.9282 53.0006L35.6389 36.999L28.7107 32.999L1 49.0006L7.9282 53.0006Z" stroke="#270300" strokeWidth="0.5" strokeLinejoin="round"></path>
      <path d="M35.6391 36.999L35.6391 5L28.7109 1L28.7109 32.999L35.6391 36.999Z" stroke="#270300" strokeWidth="0.5" strokeLinejoin="round"></path>
      <rect opacity="0.8" width="27.3216" height="27.3216" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 7.92969 48.3232)" className="fill-sand-light-1 dark:fill-sand-dark-1"></rect>
      <rect opacity="0.8" width="31.999" height="31.999" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 4 50.751)" fill={`url(#cube_sm_linear_${name})`}></rect>
      <rect style={{ mixBlendMode: "soft-light", opacity: 0.8, width: 31.999, height: 31.999 }} transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 4 50.751)" fill={`url(#cube_sm_pattern_${name})`}></rect>
      <rect x="0.216497" y="-0.375016" width="31.499" height="31.499" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 4.54126 50.4044)" stroke="#550000" strokeWidth="0.5"></rect>
      <path opacity="0.8" d="M7.9282 21.0015L7.9282 53.0004L1 49.0004V17.0015L7.9282 21.0015Z" className="fill-[#C8C7C1] dark:fill-sand-dark-6"></path>
      <path opacity="0.8" d="M35.6389 5L7.9282 21.0016L1 17.0016L28.7107 1L35.6389 5Z" className="fill-sand-light-1 dark:fill-sand-dark-1"></path>
      <path d="M7.9282 21.0015L7.9282 53.0004L1 49.0004V17.0015L7.9282 21.0015Z" stroke="#270300" strokeWidth="0.5" strokeLinejoin="round"></path>
      <path d="M35.6389 5L7.9282 21.0016L1 17.0016L28.7107 1L35.6389 5Z" stroke="#270300" strokeWidth="0.5" strokeLinejoin="round"></path>
      <rect opacity="0.8" x="0.108248" y="-0.187508" width="31.749" height="31.749" transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 8.20032 52.8275)" stroke="#270300" strokeWidth="0.25"></rect>
      <defs>
        <linearGradient id={`cube_sm_linear_${name}`}  x1="29.8548" y1="15.9995" x2="2.14413" y2="15.9995" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStart}></stop>
          <stop offset="1" stopColor={gradientEnd}></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

/**
 * Single service item component
 * - Cube SVG is fixed
 * - `icon` is provided externally (img or svg)
 * - `color` fills the cube front gradient
 */
export function ServiceItem({
  href,
  name,
  pricing,
  description,
  extra,
  button,
  gradientStart,
  gradientEnd,
  type,
  disabled,
}: ServiceItemProps) {
  const ContainerClass = {
    small: 'gap-4 p-2.5 pt-4',
    medium: 'gap-4 p-2.5 pt-3',
    large: 'gap-4 p-2.5 pt-3',
  }
  const IconClass = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-14 h-14',
  }

  const id = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");

  return (
    <a
      href={href}
      className={clsx(
        "flex h-full items-start group rounded-xs transition-colors",
        ContainerClass[type],
        "min-h-20",
        "text-sand-light-12 hover:bg-sand-light-3",
        "dark:text-sand-dark-12 dark:hover:bg-sand-dark-3",
        disabled ? "cursor-not-allowed grayscale-50 hover:grayscale-100" : "",
      )}
    >
      <div className="shrink w-16">
        <div className={clsx("mx-auto", IconClass[type])}>
          <div className="relative w-full">
            <CubeBottomSvg type={type} />

            <div className="relative transition-transform duration-300 translate-y-[0.2rem] group-hover:translate-y-0">
              <div className="absolute inset-0 flex items-center justify-center pt-[0.1rem]">
                <CubeIconSvg type={type} name={id} />
              </div>

              <CubeSvg name={id} type={type} gradientStart={gradientStart} gradientEnd={gradientEnd} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="flex items-center space-x-3 mb-0.5">
          <h4 className="font-medium text-sand-light-12 dark:text-sand-dark-12">
            {name}
          </h4>
          <span className="px-1 font-medium leading-normal rounded-xs text-sand-light-11 bg-sand-light-3 dark:bg-[#282826] dark:text-[#EDEDEC] text-sm group-hover:bg-sand-light-5 dark:group-hover:bg-[#3A3A3A]">
            {pricing}
          </span>
        </span>
        <div className="space-y-1 text-sm leading-normal text-pretty text-sand-light-11">
          <p>
            {description}
          </p>
        </div>
        {extra && (
          <p className="mt-2 text-sm leading-normal text-pretty">
            {extra}
          </p>
        )}
        {button && (
          <p className="font-medium rounded-xs transition inline-flex duration-100 border-1 shadow text-sand-light-11 dark:shadow-none dark:text-sand-dark-11 group-hover:text-sand-light-12 dark:group-hover:text-sand-dark-12 dark:bg-sand-dark-2 dark:border-sand-dark-7 px-4 py-1 bg-white pr-1 items-center gap-2 mt-5">
            {button}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></path></svg>
          </p>
        )}
      </div>
    </a>
  );
}

/**
 * Default export: render multiple service items without wrapper
 */
export default function ServiceItems({ items }: { items: ServiceItemProps[] }) {
  return (
    <>
      {items.map((props, i) => (
        <ServiceItem key={i} {...props} />
      ))}
    </>
  );
}

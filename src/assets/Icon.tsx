//#046639

function Icon({ color }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke={color ?? "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1m10 10c0-5.523-4.477-10-10-10m10 10A10 10 0 0011 1m10 10H11V1"
      ></path>
    </svg>
  )
}

export default Icon

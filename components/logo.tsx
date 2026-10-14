import Image from "next/image";

type LogoProps = {
  variant?: "default" | "light";
  size?: "md" | "lg";
  preload?: boolean;
};

const frame = {
  md: "h-11 w-auto",
  lg: "h-[4.5rem] w-auto",
};

export function Logo({ variant = "default", size = "md", preload = false }: LogoProps) {
  const light = variant === "light";

  return (
    <span className={light ? "inline-flex rounded-xl bg-white px-2.5 py-1" : "inline-flex"}>
      <Image
        src="/logo.jpeg"
        alt=""
        width={1400}
        height={378}
        preload={preload}
        className={frame[size]}
      />
    </span>
  );
}

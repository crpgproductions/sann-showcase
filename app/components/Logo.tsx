import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    width?: number;
    href?: string;
}

export default function Logo({ width = 150, href }: LogoProps) {
    const image = (
        <>
            <Image
                className="block dark:hidden"
                src="/logo.svg"
                alt="Sann showcase"
                width={width}
                height={0}
                /*priority*/
                style={{ width: `${width}px`, height: "auto" }}
            />
            <Image
                className="hidden dark:block"
                src="/logo-dark.svg"
                alt="Sann showcase"
                width={width}
                height={0}
                /*priority*/
                style={{ width: `${width}px`, height: "auto" }}
            />
        </>
    );

    if (href) {
        return <Link href={href}>{image}</Link>;
    }

    return <>{image}</>;
}
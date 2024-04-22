import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
    return (
        <article className="block px-56 text-left">{children}</article>
    )
}
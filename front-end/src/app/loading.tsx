"use client";
import { useEffect, useState } from "react";

interface Props {
    show: boolean;
}

export default function Loading({ show }: Props) {

    const [visible, setVisible] = useState(show);
    const [zIndex, setZIndex] = useState(99999);

    useEffect(() => {

        if (!show) {

            const timeout = setTimeout(() => {
                setVisible(false)
                setZIndex(-1);

            }, 5500)

            return () => clearTimeout(timeout);

        }
    }, [show])

    if (!visible) return null;

    return (
        <div className={`
            fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-1500 h-full
            ${show ? "opacity-100" : "opacity-0 z-0!"}
            `} style={{ zIndex: zIndex }}>

            <video autoPlay muted className="w-full max-w-md h-full">
                <source src="/loading.mp4" type="video/mp4" />
            </video>
        </div>
    )


}

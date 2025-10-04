"use client";

import { useEffect, useState } from "react";

export default function Loading() {


    const [visible, setVisible] = useState(true);
    const [showLoading, setShowLoading] = useState(true);
    const [zIndex, setZIndex] = useState(9999999999999);

    useEffect(() => {

        setVisible(true);
        setShowLoading(true);

        const t2 = setTimeout(() => {
            setShowLoading(false);

        }, 5250);

        const timeout = setTimeout(() => {
            setVisible(false)
            setZIndex(-1);

        }, 5750)

        return () => {clearTimeout(timeout); clearTimeout(t2)};

    }, [])

    if (!visible) return null;

    return (
        <div className={`
            fixed inset-0 flex items-center justify-center bg-[#fefefe] transition-opacity duration-1250 h-full
            ${showLoading ? "opacity-100" : "opacity-0 z-0!"}
            `} style={{ zIndex: zIndex }}>

            <video autoPlay muted className="w-full max-w-md h-full">
                <source src="/loading.mp4" type="video/mp4" />
            </video>
        </div>
    )


}

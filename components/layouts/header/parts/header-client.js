"use client"

// React
import { useState } from "react"

// Components
import HeaderContainer from "@/components/layouts/header/parts/header-container"
import HeaderMenu from "@/components/layouts/header/parts/header-menu"

export default function HeaderClient() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (

        <div style={{ width: "100%" }}>

            <HeaderContainer toggleMenu={toggleMenu} />

            <HeaderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        </div>

    )

}
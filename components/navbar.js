import React from "react";
import { useState } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";
import { VscPerson } from "react-icons/vsc";
import { ImOffice } from "react-icons/im";
import { GiMailbox } from "react-icons/gi";

export default function Navbar() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav className=' fixed bg-color-brown py-3 px-6 z-10  w-max rounded-lg left-1/2 translate-x-1/2 bottom-4 flex gap-4 '>
            <a
                href='#top'
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineArrowUp />
            </a>
            <a
                href='#about'
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <VscPerson />
            </a>
            <a
                href='#work'
                onClick={() => setActiveNav("#work")}
                className={activeNav === "#work" ? "active" : ""}
            >
                <ImOffice />
            </a>
            <a
                href='#contact'
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <GiMailbox />
            </a>
        </nav>
    );
}

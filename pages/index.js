import Head from "next/head";
import Image from "next/image";
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

import Andreas from "../public/Andreas.png";

export default function Home() {
    return (
        <div className='mx-auto w-4/5 text-color-text'>
            <Head>
                <title>Andreas Takvam</title>
                <meta
                    name='description'
                    content='
                    Jobber som Frontend Utvikler, har god kunnskap med HTML, CSS og JavaScript'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className=' '>
                <h1 className=' text-center text-4xl py-8'>
                    Velkommen til min portfolio
                </h1>
                <section className='px-2 grid grid-rows-3 grid-flow-col gap-2 '>
                    <div className=' row-start-4 row-span-2 bg-color-light'>
                        <ul>
                            <li>1 år erfaring innen frontend</li>
                            <li>15 år erfaring med salg</li>
                            <li>Publisert 4 nettsider for kunder</li>
                            <li>10+ Egne prosjekter</li>
                        </ul>
                    </div>
                    <div className=' row-end-2 row-span-3 bg-color-light w-[9rem] rounded-full flex flex-col h-[10rem]'>
                        <Image
                            className=' self-center'
                            src={Andreas}
                            width={100}
                            alt='Profilbilde av meg'
                        />
                    </div>
                    <div className=' row-start-2 row-end-4 bg-color-light italic w-64 mt-9 content-end '>
                        <p>
                            Jeg er en 36 år ung mann med stor lidenskap for kode
                            og utvikling. Jeg er problemløser av natur, og gir
                            meg ikke før jeg har oppnådd resultat.Ved å ha meg
                            med på laget, får dere en dedikert, energisk person
                            som aldri sier nei for å ta i et tak. Jeg ser på en
                            hver utfordring til å tilegne meg ny kunnskap.
                        </p>
                    </div>
                </section>
                <section className='mt-4 '>
                    <h2 className=' text-center'>Min Erfaring</h2>
                    <div className='flex flex-col gap-2'>
                        <div className=' flex flex-row items-center gap-1  '>
                            <TiHtml5 />
                            <p>God erfaring med HTML</p>
                        </div>
                        <div className=' flex flex-row items-center gap-1'>
                            <TiCss3 />
                            <p>God kjennskap til både CSS og SASS</p>
                        </div>
                        <div className='gap-1 flex flex-row items-center'>
                            <SiTailwindcss />
                            <p>
                                Benytter stort sett Tailwind for å style mine
                                sider
                            </p>
                        </div>
                        <div className='gap-1 flex flex-row items-center'>
                            <IoLogoJavascript />
                            <p>Har god forstålse med JavaScript</p>
                        </div>
                        <div className='gap-1 flex flex-row items-center'>
                            <TbBrandNextjs />
                            <p>Men liker aller helst å bruke Next.JS</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

"use client";
import { Github, Instagram, Linkedin, Menu, SquareMenu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CountryLanguage() {
    return (
        <div className="absolute bottom-0 left-40 py-10 font-exo-2 uppercase font-medium text-xs flex gap-5 items-center justify-end">
            <button className="p-1 shadow bg-stone-900 flex gap-2 items-center">
                <Image src={`/logo/uk.jpg`} width={30} height={30} alt="UK"/>
                <span className="text-xs font-bold">UK</span>
            </button>
        </div>
    );
}

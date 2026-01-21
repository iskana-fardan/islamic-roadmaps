import type { IconKey } from "../../assets/icons/icon"

interface Field {
    id: string;
    slug: string;
    name: string;
    nameArabic: string;
    description: string;
    icon: IconKey;
    order: number;
}



import fiqhsyafii from "./fiqh-syafii.json"
import usulfiqh from "./usul-fiqh.json"
import nahwu from "./nahwu.json"
import sharaf from "./sharaf.json"
import balaghah from "./balaghah.json"
import hadits from "./hadits.json"
import aqidah from "./aqidah.json"
import tafsir from "./tafsir.json"
import ulumulquran from "./ulumul-quran.json"
import others from "./others.json"



export const fields: Field[] = [ 
                        fiqhsyafii as Field, 
                        usulfiqh as Field, 
                        nahwu as Field, 
                        sharaf as Field, 
                        balaghah as Field, 
                        hadits as Field, 
                        aqidah as Field, 
                        tafsir as Field, 
                        ulumulquran as Field, 
                        others as Field
                    ]

// as Field = type assertion (paksaan ke TypeScript)
// Artinya lo bilang ke TS:
// “Gue yakin data ini bentuknya sesuai interface Field. Percaya aja.”
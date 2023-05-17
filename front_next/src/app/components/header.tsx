import Image from "next/image";
import { Typo } from '@/design-system/typography'
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className="bg-black w-full p-nav" >
        <nav>
          <ul className= "flex justify-between items-center">
            <li>
              <Image
                src="../assets/logo.svg"
                alt="my logo image"
                className="w-logo h-logo"
                width={150}
                height={40}
              />
            </li>
            <Link href="/"><Typo variant="nav" balise="li" color="white">Accueil</Typo></Link>
            <Typo variant="nav" balise="li" color="white">Profil</Typo>
            <Typo variant="nav" color="white">Réglage</Typo>
            <Typo variant="nav" color="white">Communauté</Typo>
          </ul>
        </nav>
      </header>
    </>
  );
};

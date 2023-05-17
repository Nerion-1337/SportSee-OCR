import { Main } from "./components/main";
import { Button } from "./components/button";
import Link from 'next/link';

export default function Home() {
  return <>
<Main className="flex items-center justify-center gap-20">
<Link href="/dashbord/12"><Button>Karl</Button></Link>
<Link href="/dashbord/18"><Button>Cecilia</Button></Link>
</Main>
  </>;
}

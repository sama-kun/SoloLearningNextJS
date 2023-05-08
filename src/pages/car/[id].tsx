import Home from "@/components/screens/home/Home"
import { useRouter } from "next/router";

export default function HomePage() {
  const {push, replace} = useRouter();
  return ( 
    <div>
        <button onClick={()=>push('/')}>Go home </button>
        <br/>
        <button onClick={()=>replace('/')}>Co home clear history</button>

    </div>
  );
}

import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Link from 'next/link';

export default function Navbar() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
          createClient();
          return true;
        } catch (e) {
          return false;
        }
      };
    
      const isSupabaseConnected = canInitSupabaseClient();
    
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                {/* <DeployButton />
                {isSupabaseConnected && <AuthButton />} */}
                <Link href="/">Home</Link>
                <p>Hello!</p>
                <p>Meow!</p>
                <p>Nyaaaa!</p>
            </div>
        </nav>
    )
};
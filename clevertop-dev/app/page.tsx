import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Test from "@/app/blog/posts/index.mdx"
//import { CustomMDX } from 'app/components/mdx'

export default async function Index() {
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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        {/* <Header /> */}
        <br></br>
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Clevertop's Site</h2>
          <p>Welcome to my really cool website, please check out my blog and projects page</p>
        </main>
      
      </div>
        {/* <Test /> */}
        {/* <CustomMDX /> */}
      <div>


      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Site made with ♥ by Tom
        </p>
      </footer>
    </div>
  );
}

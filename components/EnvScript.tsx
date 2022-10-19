import { IS_BROWSER } from "$fresh/runtime.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

config({ export: true });
export function EnvScript({ keys }: { keys: string[] }) {
  if (IS_BROWSER) return null;
  const vars: Record<string, string | undefined> = {};
  for (const k of keys) {
    vars[k] = Deno.env.get(k);
  }
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `ENV = ${JSON.stringify(vars)}`,
      }}
    />
  );
}

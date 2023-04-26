import { config  } from "https://deno.land/x/dotenv/mod.ts"

export const env = config({ safe: true })

export const TEST_VAR = Deno.env.get("TEST_VAR") || "";

import type { RequestHandler } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import { WebsiteBaseUrl } from "../../../config"

export const prerender = true

export const GET: RequestHandler = async ({ locals }) => {
  const supabase = locals.supabaseServiceRole

  const { data, error } = await supabase
    .from("foerderdatenbank_processed")
    .select("permalink")
    .not("permalink", "is", null) // Filter out null permalinks at the DB level

  if (error) {
    console.error("Error fetching permalinks for sitemap:", error)
    // Depending on how critical the sitemap is, you might want to return an error response
    // or just generate a sitemap without the dynamic routes. For now, we'll proceed
    // without the dynamic routes if there's an error.
    return await sitemap.response({
      origin: WebsiteBaseUrl,
      excludeRoutePatterns: [
        ".*\\(admin\\).*", // i.e. exclude routes within admin group
      ],
    })
  }

  // Now data should only contain items with non-null permalinks
  const permalinkValues = data.map((item) => item.permalink) as string[] // Assert type as string[] since nulls are filtered by DB

  return await sitemap.response({
    origin: WebsiteBaseUrl,
    excludeRoutePatterns: [
      ".*\\(admin\\).*", // i.e. exclude routes within admin group
    ],
    paramValues: {
      "/funding/[permalink]": permalinkValues,
    },
  })
}

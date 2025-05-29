import { error, type ServerLoadEvent } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import type { Tables } from "../../../../DatabaseDefinitions" // Adjust path as needed

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
  const {
    params,
    locals: { supabaseServiceRole },
  } = event

  const targetPermalink = params.permalink!

  // Fetch the full details for the program using the permalink
  const { data: program, error: dbError } = await supabaseServiceRole
    .from("foerderdatenbank_processed")
    .select("*")
    .eq("permalink", targetPermalink) // Query by the new 'permalink' column
    .single()

  if (dbError || !program) {
    console.error(
      `Error fetching program details for permalink "${targetPermalink}":`,
      dbError,
    )
    throw error(404, {
      message: `Funding program with permalink "${targetPermalink}" not found.`,
    })
  }

  // Prepare SEO data
  const meta = {
    title: program.title || "Funding Program Details",
    description:
      program.introduction_short ||
      `Learn more about the ${program.title || "funding program"}.`,
  }

  return {
    program: program as Tables<"foerderdatenbank_processed">, // Cast to ensure type
    meta,
    session: event.locals.session, // Include session from locals
  }
}

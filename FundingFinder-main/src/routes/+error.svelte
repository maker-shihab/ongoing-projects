<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { localizeHref } from "$lib/paraglide/runtime"
</script>

<div class="hero min-h-[100vh]">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">This is embarrassing...</h1>
      <p class="py-6 text-2xl">There was an error: {$page?.error?.message}</p>
      <div>
        <a href={localizeHref("/")} class="btn btn-primary btn-wide"
          >Return Home</a
        >
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  interface Props {
    textContent: string // This one is required
    readMoreLabel?: string // Optional, as it has a default
    readLessLabel?: string // Optional, as it has a default
    maxChars?: number // Optional, no default in destructuring, so it can be undefined
    maxWords?: number // Optional, no default in destructuring, so it can be undefined
    dotDotDot?: string // Optional, as it has a default
  }

  let {
    textContent,
    readMoreLabel = "Read more",
    readLessLabel = "Read less",
    maxChars, // Will be `number | undefined`
    maxWords, // Will be `number | undefined`
    dotDotDot = "...",
  }: Props = $props()

  let isOpen = $state(false)

  const cleanText = $derived.by(() => textContent.replace(/\s+/g, " ").trim())

  const getMaxCharacters = $derived.by(() => {
    if (maxChars) {
      if (isOpen) {
        return cleanText
      } else {
        return cleanText.substring(0, maxChars)
      }
    } else {
      return cleanText
    }
  })

  const maxCharsText = $derived.by(() => getMaxCharacters)

  const getMaxWords = $derived.by(() => {
    if (maxWords) {
      if (isOpen) {
        return maxCharsText
      } else {
        const words = maxCharsText.split(" ").filter((c: string) => c !== "")
        return words.slice(0, maxWords).join(" ")
      }
    } else {
      return maxCharsText
    }
  })

  const finalText = $derived.by(() => getMaxWords)

  const isFullText = $derived.by(() => {
    return (
      finalText.length > 0 &&
      finalText.split("").filter((c: string) => c !== " ").length ===
        cleanText.split("").filter((c: string) => c !== " ").length
    )
  })

  const finalLabel = $derived.by(() => (isOpen ? readLessLabel : readMoreLabel))
  const finalSymbol = $derived.by(() => (isOpen ? "" : dotDotDot))
  const showButton = $derived.by(() => (!isOpen && isFullText ? false : true))

  const handleClick = () => {
    isOpen = !isOpen
  }
</script>

<div data-testid="wrapper">
  {finalText}{!isOpen ? finalSymbol : ""}
  <span
    data-testid="button-wrapper"
    data-visible={`${showButton}`}
    class="button-wrapper"
  >
    <button data-testid="button" onclick={handleClick} class="button">
      {finalLabel}
    </button>
  </span>
</div>

<style>
  /* custom styles */
  .button-wrapper {
    white-space: nowrap;
    margin-left: 4px;
  }
  span[data-visible="false"] {
    visibility: hidden;
  }
  .button {
    border: 0;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
    color: #22c55e; /* Green color */
  }
  .button::first-letter {
    text-transform: uppercase;
  }
  .button:hover {
    text-decoration: none;
  }
</style>

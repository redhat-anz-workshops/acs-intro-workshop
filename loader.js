export default function imgixLoader({ src, width, quality }) {
    const url = new URL(`https://workshop-936810110.imgix.net${src}`)
    if(!src.includes("gif")) {
        const params = url.searchParams
        params.set("auto", params.getAll("auto").join(",") || "format")
        params.set("fit", params.get("fit") || "max")
        params.set("w", params.get("w") || width.toString())
        return url.href
    }
    return url.href
  }
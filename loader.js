export default function imgixLoader = ({ src, width, quality }) => {
    const url = new URL(`https://workshop-936810110.imgix.net${src}`)
    const params = url.searchParams
    if(!src.includes("gif")) {
        params.set("auto", params.getAll("auto").join(",") || "format")
        params.set("fit", params.get("fit") || "max")
        params.set("w", params.get("w") || width.toString())
    }
    return url.href
  }
function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function downloadPhoto(url: string, filename?: string) {
  // Provide a default filename if it's not provided
  const defaultFilename =
    url.split("\\").pop()?.split("/").pop() || "downloaded-file";

  // Use the provided filename or fallback to the default
  const safeFilename = filename ?? defaultFilename;

  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, safeFilename);
    })
    .catch((e) => console.error(e));
}

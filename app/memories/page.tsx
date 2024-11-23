"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Caveat } from "next/font/google";
import Contact from "@/components/Contact";
const caveat = Caveat({ subsets: ["latin"] });

const fetchImages = async () => {
  console.log(
    "supabaseURL",
    JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_URL)
  );
  console.log(
    "supabaseKey",
    JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );

  const { data, error } = await supabaseAdmin
    .from("images")
    .select("*")
    .order("id");

  if (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }

  return data;
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number;
  imageSrc: string;
};

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);

  // Fetch images on component mount
  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    loadImages();
  }, []);

  return (
    <div>
      <div className={`${caveat.className} max-w-[90%] mx-auto py-16 sm:py-24`}>
        <h2 className="text-6xl font-bold mb-4">Memories</h2>
        <p className="text-3xl mb-8">
          "We take photos as a return ticket to a moment otherwise gone."
          <br></br>These are mine, enjoy.
        </p>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.imageSrc} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-black-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="image"
          src={image.imageSrc}
          className={cn(
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
          fill
          objectFit="cover"
        />
      </div>
    </a>
  );
}

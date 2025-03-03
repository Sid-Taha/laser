// blogArticle.tsx
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getData(slug: string) {
  const query = `*[_type == "blogs" && slug.current == $slug]{
        "currentslug": slug.current,
        title,
        content,
        image
    }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function blogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getData(slug);

  if (!data) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1>Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Blog Container with Prose Styling */}
      <div className="prose prose-lg sm:prose-xl max-w-none prose-headings:underline prose-li:marker:text-[#7c5ca3] prose-a:text-[#839f86] prose-headings:text-[#6d8bb7] text-gray-800 dark:text-gray-100">

        {/* Blog Title */}
        <h1 className="text-center">
          <span className="block text-base text-primary font-semibold tracking-wide uppercase text-[#cf845b]">
          </span>
          <span className="mt-4 block text-3xl sm:text-4xl leading-8 font-bold font-serif text-[#284870]">
            {data.title}
          </span>
        </h1>

        {/* Centered Image */}
       {/* Centered Image with Hover Effect */}
<div className="flex justify-center mt-8 group">
  <Image
    src={urlFor(data.image).url()}
    alt="titleimage"
    width={700}
    height={700}
    className="rounded-md border shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
    priority
  />
</div>


        {/* Blog Content */}
        <PortableText value={data.content} />

      </div>
    </div>
  );
}
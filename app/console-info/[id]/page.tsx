"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Console } from "../../lib/interface/Consoles";
import { getConsolesById } from "@/app/lib/gamesApi";

const ConsoleDetailPage = () => {
  const [consoleData, setConsoleData] = useState<Console | null>(null);
  const params = useParams();
  const consoleId = params.id;

  const stripHtmlTags = (html: string): string => {
    let cleaned = html.replace(/<br\s*\/?>/gi, "\n");
    cleaned = cleaned.replace(/<[^>]*>/g, "");
    cleaned = cleaned.replace(/&amp;/g, "&");
    cleaned = cleaned.replace(/&lt;/g, "<");
    cleaned = cleaned.replace(/&gt;/g, ">");
    cleaned = cleaned.replace(/&quot;/g, '"');
    cleaned = cleaned.replace(/&#39;/g, "'");
    return cleaned.trim();
  };

  useEffect(() => {
    getConsolesById(consoleId).then((result) => {
      console.log(result);
      setConsoleData(result);
    });
  }, [consoleId]);

  return (
    <div className="consoleDetailWrapper h-full px-4 lg:ml-16 lg:mr-4 grid lg:grid-cols-2 grid-rows-2 gap-2 md:gap-8">
      <div className="row-span-2 mx-auto pt-8">
        <div className="bg-(--background) text-(--foreground) rounded-lg  overflow-hidden">
          <div className="p-6 text-(--foreground)">
            <h1 className="text-3xl font-bold mb-4 ">{consoleData?.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="space-y-2">
                  {consoleData?.games_count && (
                    <p className="">
                      <span className="font-medium">Games Available:</span>{" "}
                      {consoleData.games_count}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {consoleData?.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <div className=" leading-relaxed whitespace-pre-line">
                  {stripHtmlTags(consoleData.description)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:pt-8">
        {consoleData?.image_background && (
          <div
            className="h-112  bg-cover row-span-2 bg-center"
            style={{
              backgroundImage: `url(${consoleData.image_background})`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ConsoleDetailPage;

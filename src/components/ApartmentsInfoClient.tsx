"use client";

import { useTranslations } from "next-intl";
import AmenityIcon from "./AmenityIcon";
import { CategoryTabKey } from "@/types/categories";

export default function ApartmentsInfoClient({
  activeTab = "all",
}: {
  activeTab: CategoryTabKey;
}) {
  const tGroundLevel = useTranslations("home.apartments.groundLevel");
  const tUpperLevel = useTranslations("home.apartments.upperLevel");

  return (
    <section className="bg-gray-50">
      <div
        className={`container mx-auto ${activeTab === "all" ? "grid grid-cols-1" : "flex"} gap-4 px-0 md:grid-cols-2 md:gap-8`}
      >
        {/* Ground Level Apartment */}
        {["all", "groundLevel"].includes(activeTab) ? (
          <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-primary mb-2 text-2xl font-bold">
              {tGroundLevel("title")}
            </h2>
            <p className="mb-4 text-gray-700">{tGroundLevel("description")}</p>
            <ul className="mb-2 text-sm text-gray-600">
              {Object.values(tGroundLevel.raw("rooms")).map((r: string) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Upper Level Apartment */}
        {["all", "upperLevel"].includes(activeTab) ? (
          <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-primary mb-2 text-2xl font-bold">
              {tUpperLevel("title")}
            </h2>
            <p className="mb-4 text-gray-700">{tUpperLevel("description")}</p>
            <ul className="mb-2 text-sm text-gray-600">
              {Object.values(tUpperLevel.raw("rooms")).map((r: string) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

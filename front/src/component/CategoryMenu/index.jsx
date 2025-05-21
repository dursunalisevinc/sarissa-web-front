import {
  IconChevronCompactRight,
  IconChevronRight,
} from "@tabler/icons-react";
import { useState } from "react";

const Index = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const maxItemsPerColumn = 6; // 1 sütunda max 5 kategori göster

  // Aktif kategorinin alt kategorilerini maxItemsPerColumn parçalarına böl
  const chunks = [];
  if (activeCategory?.categories?.length) {
    for (
      let i = 0;
      i < activeCategory.categories.length;
      i += maxItemsPerColumn
    ) {
      chunks.push(activeCategory.categories.slice(i, i + maxItemsPerColumn));
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[28rem] rounded-lg overflow-hidden border border-slate-200 shadow-lg shadow-slate-100 bg-white">
      {/* Sol Ana Kategori Listesi */}
      <nav className="w-full md:w-1/5  border-b md:border-b-0 md:border-r border-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
        {data.map((mainCat) => (
          <div
            key={mainCat.id}
            onMouseEnter={() => setActiveCategory(mainCat)}
            className={`px-4 py-3 cursor-pointer select-none transition-all duration-300
              ${
                activeCategory?.id === mainCat.id
                  ? "bg-white font-bold text-orange-400 hover:shadow-sm border-l-4 border-orange-400"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {mainCat.name}
          </div>
        ))}
      </nav>

      {/* Sağ Alt Kategoriler */}
      <section className="w-full md:w-4/5 p-3 md:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
        <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 text-sm p-4">
          {activeCategory?.categories?.map((subCat) => (
            <li key={subCat.id} className="break-inside-avoid mb-4">
              {/* Turuncu başlık */}
              <div className="text-orange-500 hover:text-orange-700 hover:underline font-bold mb-2">
                {subCat.name}
              </div>

              {/* Altında alt kategori varsa onları listele */}
              {subCat.categories?.length > 0 ? (
                <ul className="ml-1 list-disc text-slate-500 space-y-1">
                  {subCat.categories.map((subSubCat) => (
                    <li
                      key={subSubCat.id}
                      className=" hover:text-slate-900 flex items-center gap-1"
                      onClick={() =>
                        alert(`Alt kategori seçildi: ${subSubCat.name}`)
                      }
                    >
                      <IconChevronRight
                        size={"0.8rem"}
                        className="text-orange-400 underline"
                      />
                      {subSubCat.name}
                    </li>
                  ))}
                </ul>
              ) : (
                // Eğer subCat’in altında başka kategori yoksa kendisini clickable yap
                <div
                  className="ml-4 text-slate-500 hover:underline"
                  onClick={() => alert(`Kategori seçildi: ${subCat.name}`)}
                >
                  {subCat.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Index;

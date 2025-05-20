import { IconCircleFilled } from "@tabler/icons-react";
import { useState } from "react";

const Index = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[28rem] border border-gray-300 rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* Sol Ana Kategori Listesi */}
      <nav className="w-full md:w-1/5 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
        {data.map((mainCat) => (
          <div
            key={mainCat.id}
            onMouseEnter={() => setActiveCategory(mainCat)}
            className={`px-6 py-4 cursor-pointer select-none transition-all duration-300 rounded-r-xl
              ${
                activeCategory?.id === mainCat.id
                  ? "bg-white font-bold text-blue-700 shadow-inner border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {mainCat.name}
          </div>
        ))}
      </nav>

      {/* Sağ Alt Kategoriler */}
      <section className="w-full md:w-4/5 p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 bg-gray-50">
        {activeCategory?.categories?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeCategory.categories.map((subCat) => (
              <div
                key={subCat.id}
                className="relative rounded-2xl px-6 py-5 cursor-pointer group transition-shadow duration-300 hover:shadow-lg bg-white border border-transparent hover:border-blue-300"
                onClick={() => alert(`Kategori seçildi: ${subCat.name}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    alert(`Kategori seçildi: ${subCat.name}`);
                  }
                }}
              >
                <h4 className="flex items-center justify-between text-blue-800 font-semibold mb-4 border-b border-blue-300 pb-3 tracking-wide text-lg">
                  {subCat.name}
                  <IconCircleFilled
                    size={"1.1rem"}
                    className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity"
                  />
                </h4>

                {subCat.categories?.length > 0 ? (
                  <ul className="ml-5 list-disc text-blue-700 text-sm space-y-2">
                    {subCat.categories.map((subSubCat) => (
                      <li
                        key={subSubCat.id}
                        className="hover:text-blue-900 cursor-pointer transition-colors flex items-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Alt kategori seçildi: ${subSubCat.name}`);
                        }}
                        tabIndex={0}
                        role="button"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.stopPropagation();
                            alert(`Alt kategori seçildi: ${subSubCat.name}`);
                          }
                        }}
                      >
                        <IconCircleFilled size={"0.8rem"} className="text-blue-400" />
                        {subSubCat.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="italic text-blue-400 text-sm mt-2 select-none">
                    Alt kategori yok
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic text-center mt-16 select-none">
            Bir ana kategori seçiniz
          </p>
        )}
      </section>
    </div>
  );
};

export default Index;

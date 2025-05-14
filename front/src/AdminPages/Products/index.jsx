import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { IconX, IconPlus } from "@tabler/icons-react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Table from "../../component/Table";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const categories = [{ name: "Ürün" }, { name: "Varyant" }];

const Index = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-md mb-4 h-[62px]">
        <span className="font-semibold text-xl text-orange-500">Ürünler</span>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-md border border-orange-300 bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-md transition cursor-pointer"
        >
          <IconPlus size={16} />
          Ürün Ekle
        </button>
      </nav>

      <div className="h-[calc(100vh-7.5rem)]">
        <Table />
      </div>

      <Dialog
        sx={{ ".MuiPaper-root": { borderRadius: "1rem" } }}
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <div className="h-full px-6 pt-6  ">
          <div className="flex items-center justify-between mb-4">
            <TabGroup>
              <div className="flex items-center justify-center w-full">
                <TabList className=" flex gap-2 w-full ">
                  {categories.map(({ name }) => (
                    <Tab
                      key={name}
                      className={({ selected }) =>
                        `rounded-md px-4 py-2 text-sm font-medium w-1/2 cursor-pointer ${
                          selected
                            ? "bg-orange-100 text-orange-600"
                            : "text-orange-500 hover:bg-orange-50"
                        } transition`
                      }
                    >
                      {name}
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels className="mt-4">
                <TabPanel>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Resim Ekle
                    </label>
                    <input
                      type="file"
                      className="px-4 py-2 mb-3 rounded-md border border-gray-200 bg-white file:text-orange-500 file:border-0 file:bg-orange-100 file:px-3 file:py-1 hover:file:bg-orange-200 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Ürün Adı", type: "text" },
                      { label: "Barkod", type: "text" },
                      { label: "Fiyat", type: "text" },
                      { label: "Vergi", type: "text" },
                      { label: "Stok", type: "text" },
                      { label: "Marka", type: "text" },
                      { label: "Açıklama", type: "text" },
                    ].map(({ label, type }, i) => (
                      <div className="flex flex-col gap-2" key={i}>
                        <label className="text-sm font-medium text-gray-700">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={`örn. ${label}`}
                          className="w-[17rem] px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                      </div>
                    ))}

                    {["Ana Kategori", "Kategori", "Alt Kategori"].map(
                      (label, i) => (
                        <div className="flex flex-col gap-2" key={i}>
                          <label className="text-sm font-medium text-gray-700">
                            {label}
                          </label>
                          <select className="px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition">
                            <option>Volvo</option>
                            <option>Saab</option>
                            <option>Mercedes</option>
                            <option>Audi</option>
                          </select>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-3">
                    <button
                      onClick={() => {
                        setOpen(false);
                      }}
                      className=" border border-green-500 text-green-500 hover:text-white font-medium !px-4 !py-1.5 rounded-xl hover:bg-green-500 duration-300 cursor-pointer"
                    >
                      Vazgeç
                    </button>
                    <button className=" bg-green-500 text-white font-medium !px-4 !py-1.5 rounded-xl border border-green-200 hover:bg-green-600 duration-300 cursor-pointer">
                      Kategori Ekle
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Ürün Adı", type: "text" },
                      { label: "Barkod", type: "text" },
                      { label: "Fiyat", type: "text" },
                      { label: "Vergi", type: "text" },
                      { label: "Stok", type: "text" },
                      { label: "Marka", type: "text" },
                      { label: "Açıklama", type: "text" },
                    ].map(({ label, type }, i) => (
                      <div className="flex flex-col gap-2" key={i}>
                        <label className="text-sm font-medium text-gray-700">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={`örn. ${label}`}
                          className="w-[17rem] px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                      </div>
                    ))}

                    {["Ana Kategori", "Kategori", "Alt Kategori"].map(
                      (label, i) => (
                        <div className="flex flex-col gap-2" key={i}>
                          <label className="text-sm font-medium text-gray-700">
                            {label}
                          </label>
                          <select className="px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition">
                            <option>Volvo</option>
                            <option>Saab</option>
                            <option>Mercedes</option>
                            <option>Audi</option>
                          </select>
                        </div>
                      )
                    )}

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">
                        Resim Ekle
                      </label>
                      <input
                        type="file"
                        className="px-4 py-2 rounded-md border border-gray-200 bg-white file:text-orange-500 file:border-0 file:bg-orange-100 file:px-3 file:py-1 hover:file:bg-orange-200 transition"
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Index;

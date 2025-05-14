import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { IconX, IconPlus } from "@tabler/icons-react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const categories = [
  {
    name: "Ürün",
  },
  {
    name: "Varyant",
  },
];
const Index = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between">
        <span className="font-medium text-orange-300 text-xl">Ürünler</span>

        <button
          onClick={handleClickOpen}
          class="flex items-center rounded-md border border-orange-200 !py-2 !px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-orange-400 hover:text-white hover:bg-orange-500 hover:border-orange-500  focus:border-orange-500 active:border-orange-500 active:text-white active:bg-orange-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
          type="button"
        >
          <IconPlus className="!mr-2" size={"1rem"} /> Ürün Ekle
        </button>
      </nav>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="flex h-screen w-full !px-4 !mt-4">
          <div className="w-full">
            <TabGroup>
              <div className="w-full flex items-center justify-between">
                <TabList className="flex gap-4">
                  {categories.map(({ name }) => (
                    <Tab
                      key={name}
                      className="rounded-lg !px-3 !py-1 text-sm/6 font-semibold text-orange-400 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-orange-500 data-hover:bg-orange-500/5 data-selected:bg-orange-500/10 data-selected:data-hover:bg-orange-500/10 cursor-pointer"
                    >
                      {name}
                    </Tab>
                  ))}
                </TabList>
                <button
                  onClick={handleClose}
                  className="rounded-full hover:bg-orange-100 !p-1.5 text-orange-400 hover:text-orange-500 cursor-pointer"
                >
                  <IconX size={"1.25rem"} stroke={2} />
                </button>
              </div>
              <TabPanels className="!mt-3">
                {/* Ürün Adı - Barkod - Ana Katagori:selected - Katagori:select - Alt Katagori - Fiyat - Vergi - Stok:number - marka - Açıklama - resim ekleme*/}
                <TabPanel key={"Ürün"} className="rounded-xl !p-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Ürün Adı
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Barkod
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-slate-700 font-medium" for="cars">
                        Ana Katagori
                      </label>
                      <select
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-slate-700 font-medium" for="cars">
                        Katagori
                      </label>
                      <select
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-slate-700 font-medium" for="cars">
                        Alt Katagori
                      </label>
                      <select
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Fiyat
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Vergi{" "}
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Stok{" "}
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Marka{" "}
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Açıklama{" "}
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="text"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-slate-700 font-medium" for="html">
                        Resim ekle
                      </label>
                      <input
                        className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                        placeholder="örn. Çocuk & Giyim"
                        type="file"
                        id="html"
                        name="fav_language"
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel key={"Varyant"} className="rounded-xl !p-3">
                  <ul>Varyant</ul>
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

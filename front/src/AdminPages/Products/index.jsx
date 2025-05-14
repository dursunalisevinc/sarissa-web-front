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
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Varyant",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
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
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        class="flex items-center rounded-md border border-orange-200 !py-2 !px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-orange-400 hover:text-white hover:bg-orange-500 hover:border-orange-500  focus:border-orange-500 active:border-orange-500 active:text-white active:bg-orange-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
        type="button"
      >
        <IconPlus className="!mr-2" size={"1rem"} /> Ürün Ekle
      </button>

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
                {categories.map(({ name, posts }) => (
                  <TabPanel key={name} className="rounded-xl bg-black/5 !p-3">
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md !p-3 text-sm/6 transition hover:bg-black/5"
                        >
                          <a href="#" className="font-semibold text-slate-600">
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                          <ul
                            className="flex gap-2 text-slate-600/50"
                            aria-hidden="true"
                          >
                            <li>{post.date}</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
export default Index;

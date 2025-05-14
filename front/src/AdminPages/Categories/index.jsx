import * as React from "react";
import { styled } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import {
  IconFolder,
  IconFolderOpen,
  IconPlus,
  IconPencil,
  IconTrash,
  IconPaperclip,
} from "@tabler/icons-react";
import Box from "@mui/material/Box";
import { useMessageBox } from "../../context/MessageBox";
import { useModal } from "../../hooks/useModal";
import Modal from "../../component/Modal";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// Stil verilmiş özel TreeItem
const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0.5, 0),
    borderRadius: "0.6rem",
    transition: "background-color 0.3s ease",
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "oklch(90.1% 0.076 70.697)",
    },
    ".MuiTreeItem-label > div .button-group": {
      opacity: 0,
    },
    "&:hover .MuiTreeItem-label > div .button-group": {
      opacity: 1,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 20,
    paddingLeft: 22,
    borderLeft: `1px solid #eee`,
  },
}));

// İkon bileşenleri
const ExpandIcon = () => (
  <IconFolder className="text-orange-500" style={{ opacity: 0.7 }} />
);
const CollapseIcon = () => (
  <IconFolderOpen className="text-orange-500" style={{ opacity: 0.7 }} />
);
const EndIcon = () => (
  <IconPaperclip className="text-orange-500" style={{ opacity: 0.4 }} />
);

const treeData = [
  {
    id: "1",
    label: "Main",
    children: [
      {
        id: "2",
        label: "Hello",
      },
      {
        id: "3",
        label: "Sub-subtree with children",
        children: [
          {
            id: "4",
            label: "Hello",
          },
          {
            id: "5",
            label: "Sub-subtree with children",
            children: [
              { id: "6", label: "Child 1" },
              { id: "7", label: "Child 2" },
              { id: "8", label: "Child 3" },
            ],
          },
        ],
      },
      {
        id: "9",
        label: "Sub-subtree with children",
        children: [
          {
            id: "11",
            label: "Sub-subtree with children",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    label: "Main",
    children: [
      {
        id: "21",
        label: "Hello",
      },
      {
        id: "31",
        label: "Sub-subtree with children",
        children: [
          {
            id: "41",
            label: "Hello",
          },
          {
            id: "51",
            label: "Sub-subtree with children",
            children: [
              { id: "61", label: "Child 1" },
              { id: "71", label: "Child 2" },
              { id: "81", label: "Child 3" },
            ],
          },
        ],
      },
      {
        id: "91",
        label: "Sub-subtree with children",
        children: [
          {
            id: "111",
            label: "Sub-subtree with children",
          },
        ],
      },
    ],
  },
];

// Ana bileşen
const Index = () => {
  const { openMessageBox } = useMessageBox();
  const addModal = useModal();
  const mainAddModal = useModal();
  const editModal = useModal();
  const [activeCategori, setActiveCategori] = React.useState(null);

  // Label bileşeni (tekrarı önlemek için)
  const TreeLabel = ({ node }) => {
    const handleOpenMessageBox = (deleteItem) => {
      openMessageBox(
        `Dikkat`,
        <>
          <b>{deleteItem.label}</b>
          {` adlı grubu silmek üzeresiniz silmek istediğinize emin misiniz.`}
        </>,
        () => {
          alert(`${node.id} idli kategoriyi sil`);
        },
        () => {
          return; // vazgeçince çalışacak fonksiyon.
        }
      );
    };

    return (
      <div className="w-full flex items-center justify-between">
        {node?.label}
        <div className="flex items-center gap-1 button-group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveCategori(node);
              addModal.openModal();
            }}
            className="rounded-lg bg-orange-50 !p-1 hover:bg-orange-100 border border-orange-200 text-orange-400 hover:text-orange-600 cursor-pointer"
          >
            <IconPlus size="1rem" stroke={1.25} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveCategori(node);
              editModal.openModal();
            }}
            className="rounded-lg bg-orange-50 !p-1 hover:bg-orange-100 border border-orange-200 text-orange-400 hover:text-orange-600 cursor-pointer"
          >
            <IconPencil size="1rem" stroke={1.25} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenMessageBox(node);
            }}
            className="rounded-lg bg-rose-50 !p-1 hover:bg-rose-100 border border-rose-200 text-rose-400 hover:text-rose-600 cursor-pointer"
          >
            <IconTrash size="1rem" stroke={1.25} />
          </button>
        </div>
      </div>
    );
  };

  const renderTree = (nodes) =>
    nodes.map((node) => (
      <CustomTreeItem
        key={node.id}
        itemId={node.id}
        label={<TreeLabel node={node} />}
      >
        {node.children ? renderTree(node.children) : null}
      </CustomTreeItem>
    ));

  return (
    <>
      <nav className="flex items-center justify-between">
        <span className="font-medium text-orange-300 text-xl">Katagoriler</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            mainAddModal.openModal();
          }}
          className="rounded-lg bg-orange-50 !py-1 !px-3 hover:bg-orange-100 border border-orange-200 text-orange-400 hover:text-orange-600 cursor-pointer flex items-center"
        >
          <IconPlus className="!mr-2" size="1rem" stroke={1.25} /> Main kategori
          ekle
        </button>
      </nav>
      <Box
        display="flex"
        alignItems="flex-start"
        height="100%"
        sx={{ pt: 2, height: "calc(100vh - 4.2rem)" }}
      >
        <SimpleTreeView
          defaultExpandedItems={["1", "3"]}
          slots={{
            expandIcon: ExpandIcon,
            collapseIcon: CollapseIcon,
            endIcon: EndIcon,
          }}
          sx={{
            overflow: "auto",
            minHeight: 300,
            maxHeight: "calc(100vh - 6.2rem)",
            flexGrow: 1,
            backgroundColor: "#fff",
            borderRadius: "0.8rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            border: "1px solid #eee",
            padding: 2,
          }}
        >
          {renderTree(treeData)}
        </SimpleTreeView>
      </Box>

      <Modal
        isOpen={addModal.isModalOpen}
        title={"Kategori Ekle"}
        onConfirm={() => {}}
        onCancel={() => {
          addModal.closeModal();
        }}
      >
        <div>{activeCategori?.label}</div>
      </Modal>

      <Modal
        isOpen={editModal.isModalOpen}
        title={"Kategoriyi Düzenle"}
        onConfirm={() => {}}
        onCancel={() => {
          editModal.closeModal();
        }}
      >
        <div>{activeCategori?.label}</div>
      </Modal>
      <Modal
        isOpen={mainAddModal.isModalOpen}
        title={"Kategori Ekle"}
        onConfirm={() => {}}
        onCancel={() => {
          mainAddModal.closeModal();
        }}
      >
        <TabGroup>
          <TabList className="flex gap-2">
            <Tab className="bg-slate-100 text-slate-700 !px-4 !py-2 rounded-full font-medium border border-slate-200 hover:bg-slate-200 data-selected:bg-slate-700 data-selected:text-white cursor-pointer">
              Ana Kategori
            </Tab>
            <Tab className="bg-slate-100 text-slate-700 !px-4 !py-2 rounded-full font-medium border border-slate-200 hover:bg-slate-200 data-selected:bg-slate-700 data-selected:text-white cursor-pointer">
              Kategori
            </Tab>
            <Tab className="bg-slate-100 text-slate-700 !px-4 !py-2 rounded-full font-medium border border-slate-200 hover:bg-slate-200 data-selected:bg-slate-700 data-selected:text-white cursor-pointer">
              Alt Kategori
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="flex flex-col gap-1.5 !p-[1.5rem]">
                <label className="text-slate-700 font-medium" for="html">
                  Ana Kategori
                </label>
                <input
                  className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                  placeholder="örn. Erkek"
                  type="text"
                  id="html"
                  name="fav_language"
                />
                <div className="flex justify-end !pt-2">
                  <button className="bg-green-500 text-white font-medium !px-4 !py-1.5 rounded-xl border border-green-200 hover:bg-green-600 duration-300 cursor-pointer">
                    Kategori Ekle
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-1.5 !p-[1.5rem]">
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
                  <label className="text-slate-700 font-medium" for="html">
                    Kategori
                  </label>
                  <input
                    className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                    placeholder="örn. Çocuk & Giyim"
                    type="text"
                    id="html"
                    name="fav_language"
                  />
                </div>
                <div className="flex justify-end !pt-2">
                  <button className="bg-green-500 text-white font-medium !px-4 !py-1.5 rounded-xl border border-green-200 hover:bg-green-600 duration-300 cursor-pointer">
                    Kategori Ekle
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-1.5 !p-[1.5rem]">
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
                  <label className="text-slate-700 font-medium" for="html">
                    Kategori
                  </label>
                  <input
                    className="bg-slate-50 !px-4 !py-2 rounded-lg border border-slate-100 outline-none focus:bg-slate-200 duration-300"
                    placeholder="örn. Çocuk & Giyim"
                    type="text"
                    id="html"
                    name="fav_language"
                  />
                </div>
                <div className="flex justify-end !pt-2">
                  <button className="bg-green-500 text-white font-medium !px-4 !py-1.5 rounded-xl border border-green-200 hover:bg-green-600 duration-300 cursor-pointer">
                    Kategori Ekle
                  </button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Modal>
    </>
  );
};

export default Index;

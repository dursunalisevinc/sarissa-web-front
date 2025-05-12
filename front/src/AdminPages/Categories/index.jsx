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

// Label bileşeni (tekrarı önlemek için)
const TreeLabel = ({ node }) => {
  const { openMessageBox } = useMessageBox();

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
          onClick={(e) => e.stopPropagation()}
          className="rounded-lg bg-orange-50 !p-1 hover:bg-orange-100 border border-orange-200 text-orange-400 hover:text-orange-600 cursor-pointer"
        >
          <IconPlus size="1rem" stroke={1.25} />
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
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

// Ana bileşen
const Index = () => {
  return (
    <>
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
    </>
  );
};

export default Index;

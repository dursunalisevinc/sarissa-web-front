import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import CategoryMenu from "../../component/CategoryMenu";

import {
  IconMenu,
  IconMenu2,
  IconMenu3,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { useCardData } from "../../context/CartContext";

export const data = [
  // ... Mevcut 3 kategori (Elektronik, Moda, Ev & Yaşam) burada yer alıyor.

  {
    id: 4,
    name: "Spor & Outdoor",
    createdAt: "2025-01-15T09:00:00Z",
    updatedAt: "2025-05-01T10:00:00Z",
    categories: [
      {
        id: 401,
        name: "Fitness",
        main_category_id: 4,
        parent_category_id: null,
        createdAt: "2025-01-16T09:30:00Z",
        updatedAt: "2025-05-01T10:00:00Z",
        categories: [
          {
            id: 4011,
            name: "Ağırlık Aletleri",
            main_category_id: 4,
            parent_category_id: 401,
            createdAt: "2025-01-17T09:30:00Z",
            updatedAt: "2025-05-01T10:00:00Z",
          },
          {
            id: 4012,
            name: "Yoga Ekipmanları",
            main_category_id: 4,
            parent_category_id: 401,
            createdAt: "2025-01-17T10:00:00Z",
            updatedAt: "2025-05-01T10:00:00Z",
          },
        ],
      },
      {
        id: 402,
        name: "Outdoor",
        main_category_id: 4,
        parent_category_id: null,
        createdAt: "2025-01-16T11:00:00Z",
        updatedAt: "2025-05-01T10:00:00Z",
        categories: [
          {
            id: 4021,
            name: "Kamp Malzemeleri",
            main_category_id: 4,
            parent_category_id: 402,
            createdAt: "2025-01-17T11:30:00Z",
            updatedAt: "2025-05-01T10:00:00Z",
          },
          {
            id: 4022,
            name: "Trekking Ekipmanları",
            main_category_id: 4,
            parent_category_id: 402,
            createdAt: "2025-01-17T12:00:00Z",
            updatedAt: "2025-05-01T10:00:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Anne & Bebek",
    createdAt: "2025-01-18T08:30:00Z",
    updatedAt: "2025-05-03T12:00:00Z",
    categories: [
      {
        id: 501,
        name: "Bebek Bezi",
        main_category_id: 5,
        parent_category_id: null,
        createdAt: "2025-01-19T09:00:00Z",
        updatedAt: "2025-05-03T12:00:00Z",
        categories: [
          {
            id: 5011,
            name: "Yenidoğan",
            main_category_id: 5,
            parent_category_id: 501,
            createdAt: "2025-01-20T09:30:00Z",
            updatedAt: "2025-05-03T12:00:00Z",
          },
          {
            id: 5012,
            name: "Büyük Boy",
            main_category_id: 5,
            parent_category_id: 501,
            createdAt: "2025-01-20T10:00:00Z",
            updatedAt: "2025-05-03T12:00:00Z",
          },
        ],
      },
      {
        id: 502,
        name: "Bebek Arabaları",
        main_category_id: 5,
        parent_category_id: null,
        createdAt: "2025-01-19T11:00:00Z",
        updatedAt: "2025-05-03T12:00:00Z",
        categories: [
          {
            id: 5021,
            name: "Çift Yönlü Arabalar",
            main_category_id: 5,
            parent_category_id: 502,
            createdAt: "2025-01-20T11:30:00Z",
            updatedAt: "2025-05-03T12:00:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Kozmetik & Kişisel Bakım",
    createdAt: "2025-01-21T07:00:00Z",
    updatedAt: "2025-05-05T15:00:00Z",
    categories: [
      {
        id: 601,
        name: "Makyaj",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T08:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6011,
            name: "Fondöten",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T08:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
          {
            id: 6012,
            name: "Ruj",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T09:00:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 602,
        name: "Cilt Bakımı",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T10:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6021,
            name: "Yüz Temizleyiciler",
            main_category_id: 6,
            parent_category_id: 602,
            createdAt: "2025-01-23T10:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 701,
        name: "Kitaplar",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T08:30:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7011,
            name: "Roman",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 7012,
            name: "Kişisel Gelişim",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
        ],
      },
      {
        id: 702,
        name: "Ofis & Kırtasiye",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T10:00:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7021,
            name: "Defterler",
            main_category_id: 7,
            parent_category_id: 702,
            createdAt: "2025-01-26T10:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 701,
            name: "Kitaplar",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T08:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7011,
                name: "Roman",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:00:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
              {
                id: 7012,
                name: "Kişisel Gelişim",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 702,
            name: "Ofis & Kırtasiye",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T10:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7021,
                name: "Defterler",
                main_category_id: 7,
                parent_category_id: 702,
                createdAt: "2025-01-26T10:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 8011,
            name: "PlayStation",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T08:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8012,
            name: "Xbox",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T09:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8021,
            name: "Aksiyon",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T10:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8022,
            name: "Spor",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T11:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
        ],
      },
      {
        id: 601,
        name: "Makyaj",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T08:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6011,
            name: "Fondöten",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T08:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
          {
            id: 6012,
            name: "Ruj",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T09:00:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 602,
        name: "Cilt Bakımı",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T10:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6021,
            name: "Yüz Temizleyiciler",
            main_category_id: 6,
            parent_category_id: 602,
            createdAt: "2025-01-23T10:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 701,
        name: "Kitaplar",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T08:30:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7011,
            name: "Roman",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 7012,
            name: "Kişisel Gelişim",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
        ],
      },
      {
        id: 702,
        name: "Ofis & Kırtasiye",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T10:00:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7021,
            name: "Defterler",
            main_category_id: 7,
            parent_category_id: 702,
            createdAt: "2025-01-26T10:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 701,
            name: "Kitaplar",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T08:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7011,
                name: "Roman",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:00:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
              {
                id: 7012,
                name: "Kişisel Gelişim",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 702,
            name: "Ofis & Kırtasiye",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T10:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7021,
                name: "Defterler",
                main_category_id: 7,
                parent_category_id: 702,
                createdAt: "2025-01-26T10:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 8011,
            name: "PlayStation",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T08:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8012,
            name: "Xbox",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T09:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8021,
            name: "Aksiyon",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T10:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8022,
            name: "Spor",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T11:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
        ],
      },
      {
        id: 601,
        name: "Makyaj",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T08:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6011,
            name: "Fondöten",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T08:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
          {
            id: 6012,
            name: "Ruj",
            main_category_id: 6,
            parent_category_id: 601,
            createdAt: "2025-01-23T09:00:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 602,
        name: "Cilt Bakımı",
        main_category_id: 6,
        parent_category_id: null,
        createdAt: "2025-01-22T10:00:00Z",
        updatedAt: "2025-05-05T15:00:00Z",
        categories: [
          {
            id: 6021,
            name: "Yüz Temizleyiciler",
            main_category_id: 6,
            parent_category_id: 602,
            createdAt: "2025-01-23T10:30:00Z",
            updatedAt: "2025-05-05T15:00:00Z",
          },
        ],
      },
      {
        id: 701,
        name: "Kitaplar",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T08:30:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7011,
            name: "Roman",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 7012,
            name: "Kişisel Gelişim",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
        ],
      },
      {
        id: 702,
        name: "Ofis & Kırtasiye",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T10:00:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7021,
            name: "Defterler",
            main_category_id: 7,
            parent_category_id: 702,
            createdAt: "2025-01-26T10:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 701,
            name: "Kitaplar",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T08:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7011,
                name: "Roman",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:00:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
              {
                id: 7012,
                name: "Kişisel Gelişim",
                main_category_id: 7,
                parent_category_id: 701,
                createdAt: "2025-01-26T09:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 702,
            name: "Ofis & Kırtasiye",
            main_category_id: 7,
            parent_category_id: null,
            createdAt: "2025-01-25T10:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
            categories: [
              {
                id: 7021,
                name: "Defterler",
                main_category_id: 7,
                parent_category_id: 702,
                createdAt: "2025-01-26T10:30:00Z",
                updatedAt: "2025-05-06T16:00:00Z",
              },
            ],
          },
          {
            id: 8011,
            name: "PlayStation",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T08:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8012,
            name: "Xbox",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T09:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8021,
            name: "Aksiyon",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T10:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8022,
            name: "Spor",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T11:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Kitap & Kırtasiye",
    createdAt: "2025-01-24T08:00:00Z",
    updatedAt: "2025-05-06T16:00:00Z",
    categories: [
      {
        id: 701,
        name: "Kitaplar",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T08:30:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7011,
            name: "Roman",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:00:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
          {
            id: 7012,
            name: "Kişisel Gelişim",
            main_category_id: 7,
            parent_category_id: 701,
            createdAt: "2025-01-26T09:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
        ],
      },
      {
        id: 702,
        name: "Ofis & Kırtasiye",
        main_category_id: 7,
        parent_category_id: null,
        createdAt: "2025-01-25T10:00:00Z",
        updatedAt: "2025-05-06T16:00:00Z",
        categories: [
          {
            id: 7021,
            name: "Defterler",
            main_category_id: 7,
            parent_category_id: 702,
            createdAt: "2025-01-26T10:30:00Z",
            updatedAt: "2025-05-06T16:00:00Z",
          },
        ],
      },
      {
        id: 8011,
        name: "PlayStation",
        main_category_id: 8,
        parent_category_id: 801,
        createdAt: "2025-01-29T08:30:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
      },
      {
        id: 8012,
        name: "Xbox",
        main_category_id: 8,
        parent_category_id: 801,
        createdAt: "2025-01-29T09:00:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
      },
      {
        id: 8021,
        name: "Aksiyon",
        main_category_id: 8,
        parent_category_id: 802,
        createdAt: "2025-01-29T10:30:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
      },
      {
        id: 8022,
        name: "Spor",
        main_category_id: 8,
        parent_category_id: 802,
        createdAt: "2025-01-29T11:00:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
      },
    ],
  },
  {
    id: 8,
    name: "Oyun & Konsol",
    createdAt: "2025-01-27T07:00:00Z",
    updatedAt: "2025-05-07T18:00:00Z",
    categories: [
      {
        id: 801,
        name: "Oyun Konsolları",
        main_category_id: 8,
        parent_category_id: null,
        createdAt: "2025-01-28T08:00:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
        categories: [
          {
            id: 8011,
            name: "PlayStation",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T08:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8012,
            name: "Xbox",
            main_category_id: 8,
            parent_category_id: 801,
            createdAt: "2025-01-29T09:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8021,
            name: "Aksiyon",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T10:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8022,
            name: "Spor",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T11:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
        ],
      },
      {
        id: 802,
        name: "Oyunlar",
        main_category_id: 8,
        parent_category_id: null,
        createdAt: "2025-01-28T10:00:00Z",
        updatedAt: "2025-05-07T18:00:00Z",
        categories: [
          {
            id: 8021,
            name: "Aksiyon",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T10:30:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
          {
            id: 8022,
            name: "Spor",
            main_category_id: 8,
            parent_category_id: 802,
            createdAt: "2025-01-29T11:00:00Z",
            updatedAt: "2025-05-07T18:00:00Z",
          },
        ],
      },
    ],
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { cardItems, setCardItems } = useCardData();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElShopp, setAnchorElShopp] = React.useState(null);
  // const [cartData, setCartData] = useState([]);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickShopp = (event) => {
    setAnchorElShopp(event.currentTarget);
  };
  const openShopp = Boolean(anchorElShopp);
  const idShopp = openShopp ? "simple-popover" : undefined;

  const handleCloseShopp = () => {
    setAnchorElShopp(null);
  };

  console.log({ cardItems });

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const stored = localStorage?.getItem("cardItem");
    if (stored) {
      try {
        setCardItems(JSON.parse(stored));
      } catch (err) {
        console.error("JSON parse hatası:", err);
      }
    }
  }, []);

  const deleteCartItem = (id) => {
    const updatedItems = cardItems?.filter((item) => item.cardId !== id);
    localStorage?.setItem("cardItem", updatedItems);
    setCardItems(updatedItems);
  };

  const editCardItem = (id, isIncrease) => {
    const updatedCart = cardItems.map((item) => {
      if (item.cardId === id) {
        let newQuantity = isIncrease ? item.quantity + 1 : item.quantity - 1;
        newQuantity = Math.max(newQuantity, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCardItems(updatedCart);
    localStorage.setItem("cardItem", JSON.stringify(updatedCart));
  };

  const resetCardItems = () => {
    setCardItems([]);
    localStorage.setItem("cardItem", []);
  };

  return (
    <div className="flex items-center">
      <div className="w-full flex flex-col gap-2">
        <div className="!p-4 w-full flex justify-between max-w-[1280px] !mx-auto">
          <Link to="/" className="flex items-center text-3xl font-medium">
            Sarissa Bisiklet
          </Link>
          <div className="flex gap-1">
            <div>
              <button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                className="flex items-center !px-4 !py-2 rounded-xl cursor-pointer gap-1 outline-none group"
              >
                <IconUser className="h-5 group-hover:text-orange-500 duration-300" />{" "}
                <span className="text-md group-hover:text-orange-500 duration-300">
                  Giriş Yap
                </span>
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <div className="flex flex-col gap-2 !p-4">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setAnchorEl(null);
                    }}
                    className="!py-2 !px-10 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-600 duration-300"
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setAnchorEl(null);
                    }}
                    className="!py-2 !px-10 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 duration-300"
                  >
                    Üye Ol
                  </button>
                </div>
              </Popover>
            </div>
            <div>
              <button
                aria-describedby={idShopp}
                variant="contained"
                onClick={handleClickShopp}
                className="flex items-center !px-4 !py-2 rounded-xl cursor-pointer gap-1 outline-none group"
              >
                <IconShoppingBag className="h-5 group-hover:text-orange-500 duration-300" />{" "}
                <span className="text-md group-hover:text-orange-500 duration-300">
                  Sepetim{" "}
                  <span className="text-rose-500">({cardItems.length})</span>
                </span>
              </button>
              <Popover
                id={idShopp}
                open={openShopp}
                anchorEl={anchorElShopp}
                onClose={handleCloseShopp}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  sx: {
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)", // hafif gölge
                    border: "1px solid #e0e0e0", // açık gri border
                    borderRadius: 2, // köşeleri biraz yumuşat
                  },
                }}
              >
                <div className="w-[30rem]">
                  {cardItems && cardItems.length > 0 ? (
                    <div className="relative flex flex-col gap-4 max-h-[30rem] overflow-auto">
                      <div className="sticky top-0 font-medium text-xl bg-white p-[1rem] border-b border-slate-200">
                        {" "}
                        Sepetim{" "}
                        <span className="text-rose-400">
                          ({cardItems.length})
                        </span>
                      </div>
                      {cardItems &&
                        cardItems.length > 0 &&
                        cardItems.map((oItem, oIndex) => {
                          return (
                            <div
                              key={oIndex}
                              className="flex justify-between gap-4 bg-slate-50 border border-slate-100 shadow-sm rounded-xl p-4 mx-[1rem]"
                            >
                              <div className="flex gap-2">
                                <img
                                  src={oItem.Image1}
                                  className="h-[5rem]"
                                  alt=""
                                />
                                <div className="text-sm font-medium uppercase">
                                  {oItem.Brand}{" "}
                                  <span className="font-normal normal-case">
                                    {oItem.Name}
                                  </span>{" "}
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <button
                                  onClick={() => deleteCartItem(oItem.cardId)}
                                  className="flex justify-end"
                                >
                                  <IconTrash className="h-[1.2rem] text-rose-600 hover:bg-rose-200 rounded-full duration-300 cursor-pointer" />
                                </button>
                                <div className="font-medium text-orange-500 text-end">
                                  {" "}
                                  {parseInt(oItem.trendyol_salePrice) *
                                    oItem.quantity}{" "}
                                  TL{" "}
                                </div>
                                <div className="flex justify-between items-center bg-white w-[6rem] px-2 py-1 rounded-full">
                                  <button
                                    onClick={() =>
                                      editCardItem(oItem.cardId, false)
                                    }
                                    className="flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[1.2rem] h-[1.2rem] hover:bg-rose-100 duration-300 cursor-pointer"
                                  >
                                    {" "}
                                    <IconMinus className="text-slate-600 h-[1.2rem]" />{" "}
                                  </button>
                                  <input
                                    type="text"
                                    className="w-[1.5rem] outline-none font-semibold text-center py-1"
                                    value={cardItems[oIndex].quantity}
                                  />
                                  <button
                                    onClick={() =>
                                      editCardItem(oItem.cardId, true)
                                    }
                                    className="flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[1.2rem] h-[1.2rem] hover:bg-green-100 duration-300 cursor-pointer"
                                  >
                                    {" "}
                                    <IconPlus className="text-slate-600 h-[1.2rem]" />{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      <div className="sticky bottom-0 flex justify-end p-[1rem] bg-white">
                        <button
                          onClick={() => resetCardItems()}
                          className="bg-white text-rose-500 px-4 py-2 rounded-full border border-rose-500 hover:bg-rose-50 duration-300 cursor-pointer mx-2"
                        >
                          Sepeti Kaldır
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 duration-300 cursor-pointer">
                          Sepeti Onayla
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-between gap-4 bg-slate-50 border border-slate-100 shadow-sm rounded-xl p-4">
                      <div className="text-xl font-medium text-center text-slate-800">
                        Sepetinizde Ürün Bulunmamaktadır
                      </div>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300">
                        Alışverişe Git
                      </button>
                    </div>
                  )}
                </div>
              </Popover>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1280px] mx-auto py-2 px-4 cursor-pointer">
          <div className="grid grid-cols-12">
            {/* Tüm Kategoriler */}
            <div
              className="col-span-2 flex gap-2 hover:text-orange-500 duration-300 relative"
              onMouseEnter={handleMouseEnter}
            >
              <IconMenu2 />
              <span className="uppercase">Tüm Kategoriler</span>
            </div>
            {/* Diğer sabit kategoriler */}
            {data &&
              data.length > 0 &&
              data.map((oItem, oIndex) => {
                if (oIndex < 5) {
                  return (
                    <div
                      key={oIndex}
                      className="col-span-2 hover:text-orange-500 duration-300 truncate"
                    >
                      {oItem.name}
                    </div>
                  );
                }
                return null;
              })}
          </div>
          {/* Dropdown ekran genişliği kadar ve mouseLeave ile kapanıyor */}
          {showDropdown && (
            <div
              className="absolute top-[2.6rem] right-0 left-0  bg-white shadow-md z-50 rounded-b-xl"
              onMouseLeave={handleMouseLeave}
            >
              <CategoryMenu data={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

export const menu = {
  data: [
    {
      //item
      value: "적용분야", // item.value
      url: "/applications",
      depth: [
        //이거를 또 맵 돌려야함 (depth1-menu)
        {
          value: "Automotive",
          url: "/applications/automotive",
          depth: [
            //이거를 또 맵 돌려야함 (depth2-menu)
            {
              value: "Exterior",
              url: "/applications/automotive/exterior",
              depth: null,
            },
            {
              value: "Interior",
              url: "/applications/automotive/interior",
              depth: null,
            },
          ],
        },
        {
          value: "Display",
          url: "/applications/display",
          depth: [
            {
              value: "TV",
              url: "/applications/display/#ap0101",
              depth: null,
            },
            {
              value: "MNT",
              url: "/applications/display/#ap0102",
              depth: null,
            },
            {
              value: "Automotive",
              url: "/applications/display/#ap0103",
              depth: null,
            },
            {
              value: "NPC/TPC",
              url: "/applications/display/#ap0104",
              depth: null,
            },
            {
              value: "Mobile",
              url: "/applications/display/#ap0105",
              depth: null,
            },
          ],
        },
        {
          value: "Lighting",
          url: "/applications/lighting",
          depth: [
            {
              value: "Indoor",
              url: "/applications/lighting/indoor",
              depth: null,
            },
            {
              value: "Outdoor",
              url: "/applications/lighting/outdoor",
              depth: null,
            },
            {
              value: "Horticulture",
              url: "/applications/lighting/horticulture",
              depth: null,
            },
            {
              value: "Others",
              url: "/applications/lighting/others",
              depth: null,
            },
          ],
        },
      ],
    },
    {
      value: "기술",
      url: "/technology",
      depth: [
        {
          value: "WICOP",
          url: "/technology/wicop",
          depth: null,
        },
        {
          value: "WICOP Pixel",
          url: "/technology/wicoppixel",
          depth: null,
        },
        {
          value: "Acrich",
          url: "/technology/acrich",
          depth: null,
        },
        {
          value: "SunLike",
          url: "/technology/sunlike",
          depth: null,
        },
        {
          value: "Violeds",
          url: "/technology/violeds",
          depth: null,
        },
      ],
    },
    {
      value: "제품",
      url: "/product",
      depth: [
        {
          value: "Display",
          url: "/product/display",
          depth: [
            {
              value: "Top view",
              url: "/product/display/topview",
              depth: null,
            },
            {
              value: "Side view",
              url: "/product/display/sideview",
              depth: null,
            },
            {
              value: "Module",
              url: "/product/display",
              depth: null,
            },
          ],
        },
        {
          value: "Automotive",
          url: "/product/automotive",
          depth: [
            {
              value: "WICOP",
              url: "/product/automotive/wicop",
              depth: null,
            },
            {
              value: "Z-Power",
              url: "/product/automotive",
              depth: null,
            },
            {
              value: "Top view",
              url: "/product/automotive/top",
              depth: null,
            },
            {
              value: "Full color",
              url: "/product/automotive/fullcolor",
              depth: null,
            },
            {
              value: "Violeds",
              url: "/product/automotive/violeds",
              depth: null,
            },
          ],
        },
        {
          value: "Lighting",
          url: "/product/lighting",
          depth: [
            {
              value: "WICOP",
              url: "/product/lighting/wicop",
              depth: null,
            },
            {
              value: "Lateral",
              url: "/product/lighting/lateral",
              depth: null,
            },
            {
              value: "Color",
              url: "/product/lighting/color",
              depth: null,
            },
            {
              value: "Module",
              url: "/product/lighting/module",
              depth: null,
            },
          ],
        },
      ],
    },
    {
      value: "지원",
      url: "/support",
      depth: [
        {
          value: "지원",
          url: "/support",
          depth: null,
        },
        {
          value: "제품문서",
          url: "/support/documentlibrary",
          depth: null,
        },
        {
          value: "문의하기",
          url: "/support/contactus",
          depth: null,
        },
        {
          value: "단종제품",
          url: "/support/discontinuedproducts",
          depth: null,
        },
      ],
    },
    {
      value: "회사",
      url: "/company",
      depth: [
        {
          value: "기업정보",
          url: "/company",
          depth: [
            {
              value: "회사소개",
              url: "/company",
              depth: null,
            },
            {
              value: "글로벌 네트워크",
              url: "/company/information/globalnetwork",
              depth: null,
            },
            {
              value: "연혁",
              url: "/company/information/history",
              depth: null,
            },
            {
              value: "창업자 메시지",
              url: "/company/information/message",
              depth: null,
            },
            {
              value: "서울반도체 브랜드",
              url: "/company/information/brand",
              depth: null,
            },
          ],
        },
        {
          value: "특허/인증",
          url: "/company/parent/certificates",
          depth: [
            {
              value: "Patent Portfolio",
              url: "/company/parent/certificates/patentportfolio",
              depth: null,
            },
            {
              value: "인증서",
              url: "/company/parent/certificates/certificates",
              depth: null,
            },
          ],
        },
        {
          value: "지속가능경영",
          url: "/company/sustainable",
          depth: [
            {
              value: "Sustainability",
              url: "/company/sustainable?tab=sustainability",
              depth: null,
            },
            {
              value: "Environmental",
              url: "/company/sustainable?tab=environmental",
              depth: null,
            },
            {
              value: "Social",
              url: "/company/sustainable?tab=social",
              depth: null,
            },
            {
              value: "Governance",
              url: "/company/sustainable?tab=governance",
              depth: null,
            },
          ],
        },
        {
          value: "인사",
          url: "/company/career",
          depth: [
            {
              value: "인재상",
              url: "/company/career/talent",
              depth: null,
            },
            {
              value: "복리후생",
              url: "/company/career/welfare",
              depth: null,
            },
          ],
        },
      ],
    },
    {
      value: "투자",
      url: "/ir",
      depth: [
        {
          value: "투자개요",
          url: "/ir",
          depth: null,
        },
        {
          value: "경영정보",
          url: "/ir/investment",
          depth: [
            {
              value: "이사회",
              url: "/ir/investment?tab=bod",
              depth: null,
            },
            {
              value: "감사기구",
              url: "/ir/investment?tab=audit",
              depth: null,
            },
          ],
        },
        {
          value: "재무정보",
          url: "/ir/finance",
          depth: [
            {
              value: "재무하이라이트",
              url: "/ir/finance?tab=main",
              depth: null,
            },
            {
              value: "주요재무비율",
              url: "/ir/finance?tab=ratio",
              depth: null,
            },
          ],
        },
        {
          value: "주식정보",
          url: "/ir/stock",
          depth: [
            {
              value: "주가정보",
              url: "/ir/stock?tab=stockprice",
              depth: null,
            },
            {
              value: "배당 및 지분현황",
              url: "/ir/stock?tab=share",
              depth: null,
            },
            {
              value: "내부정보관리규정",
              url: "/ir/stock?tab=policy",
              depth: null,
            },
          ],
        },
        {
          value: "IR 자료",
          url: "/ir/data",
          depth: [
            {
              value: "실적발표자료",
              url: "/ir/data?tab=performance",
              depth: null,
            },
            {
              value: "주요보고서",
              url: "/ir/data?tab=audit",
              depth: null,
            },
            {
              value: "기타자료",
              url: "/ir/data?tab=etc",
              depth: null,
            },
          ],
        },
        {
          value: "공시정보",
          url: "https://dart.fss.or.kr/html/search/SearchCompanyIR_M.html?textCrpNM=046890",
          depth: null,
        },
      ],
    },
    {
      value: "미디어센터",
      url: "/media",
      depth: [
        {
          value: "미디어센터",
          url: "/media",
          depth: null,
        },
        {
          value: "뉴스룸",
          url: "/media/newsroom",
          depth: null,
        },
        {
          value: "이벤트",
          url: "/media/event",
          depth: null,
        },
        {
          value: "빛의 과학",
          url: "/media/science",
          depth: null,
        },
        {
          value: "SunLike",
          url: "/media/sun",
          depth: null,
        },
      ],
    },
  ],
};

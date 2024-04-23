// module.exports = {
//   masterSidebar: [
//     "home",
//     {
//       type: "category",
//       label: "Introduction",
//       collapsed: false,
//       items: [
//         "what-is-a-validator",
//         "what-is-an-rpc-node",
//         "faq",
//         "backwards-compatibility",
//       ],
//     },
//     {
//       type: "category",
//       label: "Nexis dApps",
//       collapsed: false,
//       items: [
//         {
//           type: "category",
//           label: "Nexis Bridge",
//           collapsed: true,
//           items: [
//             "nexis-bridge-overview",
//           ],
//         },
//         {
//           type: "category",
//           label: "Nexis Web Wallet",
//           collapsed: true,
//           items: [
//             "ns-overview",
//             "ns-glossary",
//           ],
//         },
//         {
//           type: "category",
//           label: "Nexis Swap",
//           collapsed: true,
//           items: [
//             "ns-overview",
//             "nexis-swap-smart-contracts",
//             "ns-glossary",
//           ],
//         },
//         {
//           type: "category",
//           label: "Nexis Names Service",
//           collapsed: false,
//           items: [
//             "graph-node",
//             "subgraph"
//           ],
//         },
//         {
//           type: "category",
//           label: "Nexis Safe",
//           collapsed: false,
//           items: [
//             "graph-node",
//             "subgraph"
//           ],
//         },
//         {
//           type: "category",
//           label: "Nexis Testnet Faucet",
//           collapsed: false,
//           items: [
//             "graph-node",
//             "subgraph"
//           ],
//         },
//       ],
//     },
//     {
//       type: "category",
//       label: "Command Line Tools",
//       // collapsed: false,
//       items: [
//         {
//           type: "autogenerated",
//           dirName: "cli",
//         },
//       ],
//     },
//     {
//       type: "category",
//       label: "Architecture",
//       // collapsed: false,
//       items: [
//         "architecture",
//         {
//           type: "category",
//           label: "Clusters",
//           // collapsed: false,
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "clusters",
//             },
//           ],
//         },
//         {
//           type: "category",
//           label: "Consensus",
//           // collapsed: false,
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "consensus",
//             },
//           ],
//         },
//         {
//           type: "category",
//           label: "Runtime",
//           // collapsed: false,
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "runtime",
//             },
//           ],
//         },
//         {
//           type: "category",
//           label: "Validators",
//           // collapsed: false,
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "validator",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "category",
//       label: "Operating a Validator",
//       // collapsed: false,
//       items: [
//         {
//           type: "autogenerated",
//           dirName: "operations",
//         },
//       ],
//     },
//   ],
//   proposalsSidebar: [
//     {
//       type: "category",
//       label: "System Design Proposals",
//       collapsed: false,
//       items: [
//         "proposals",
//         {
//           type: "category",
//           label: "Accepted Proposals",
//           collapsed: true,
//           link: {
//             type: "doc",
//             id: "proposals/accepted-design-proposals",
//           },
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "proposals",
//             },
//           ],
//         },
//         {
//           type: "category",
//           label: "Implemented Proposals",
//           collapsed: true,
//           link: {
//             type: "doc",
//             id: "implemented-proposals/index",
//           },
//           items: [
//             {
//               type: "autogenerated",
//               dirName: "implemented-proposals",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
module.exports = {
  masterSidebar: [
    "home",
    {
      type: "category",
      label: "Wallets",
      collapsed: false,
      items: [
        'wallet',
        {
          type: "category",
          label: "Web Wallets",
          collapsed: false,
          items: [
            'web-wallet',
            'safe-web-wallet'
          ],
        },
        {
          type: "category",
          label: "Wallet Extensions",
          collapsed: false,
          items: [
            'metamask',
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Bridges",
      collapsed: false,
      items: [
        'bridges',
       'bridge'
      ],
    },
    {
      type: "category",
      label: "DEXs",
      collapsed: false,
      items: [
        'dexs',
        'swap'
      ],
    },
    {
      type: "category",
      label: "Name Services",
      collapsed: false,
      items: [
        'names',
        'nameservice'
      ],
    },
    {
      type: "category",
      label: "Faucets",
      collapsed: false,
      items: [
        'faucets',
        'faucet'
      ],
    },
  ],
};

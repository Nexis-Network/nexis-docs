const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Nexis Network Docs",
  tagline:
    "Nexis Network is an open source project implementing a new, high-performance, permissionless blockchain.",
  url: "https://docs.solanalabs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nexis-labs", // Usually your GitHub org/user name.
  projectName: "nexis", // Usually your repo name.
  onBrokenLinks: "log",
  themeConfig: {
    prism: {
      additionalLanguages: ["rust"],
    },
    navbar: {
      logo: {
        alt: "Nexis Network Logo",
        src: "https://raw.githubusercontent.com/Nexis-Network/Nexis-Brand-Kit/9c5784319e7dc0f145050f800c0fbb6f0b9aca42/Group%20(3).svg",
        srcDark: "https://raw.githubusercontent.com/Nexis-Network/Nexis-Brand-Kit/9c5784319e7dc0f145050f800c0fbb6f0b9aca42/Group%20(3).svg",
      },
      items: [
        {
          to: "bridge",
          label: "Bridge",
          position: "left",
        },
        {
          to: "swap",
          label: "Swap",
          position: "left",
        },
        {
          to: "nameservice",
          label: "Names",
          position: "left",
        },
        {
          label: "More",
          position: "left",
          items: [
            { label: "Web Wallets", to: "wallet" },
            { label: "Faucet", to: "faucet" },
            // {
            //   href: "https://spl.nexis.network",
            //   label: "Nexis Network Program Library",
            // },
          ],
        },

        {
          href: "https://github.com/nexis-labs/nexis",
          // label: "GitHub",
          className: "header-link-icon header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    algolia: {
      // This API key is "search-only" and safe to be published
      apiKey: "011e01358301f5023b02da5db6af7f4d",
      appId: "FQ12ISJR4B",
      indexName: "nexis",
      contextualSearch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Developers »",
              href: "https://nexis.network/developers",
            },
            {
              label: "Running a Validator",
              to: "architecture",
            },
            {
              label: "Command Line",
              to: "cli",
            },
            {
              label: "Architecture",
              to: "architecture",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Exchange »",
              href: "https://nexis.stackexchange.com/",
            },
            {
              label: "GitHub »",
              href: "https://github.com/nexis-labs/nexis",
            },
            {
              label: "Discord »",
              href: "https://nexis.network/discord",
            },
            {
              label: "Twitter »",
              href: "https://nexis.network/twitter",
            },
            {
              label: "Forum »",
              href: "https://forum.nexis.network",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Terminology »",
              href: "https://nexis.network/docs/terminology",
            },
            {
              label: "Proposals",
              to: "proposals",
            },
            {
              href: "https://spl.nexis.network",
              label: "Nexis Network Program Library »",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nexis Network Labs`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "src",
          breadcrumbs: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // Google Analytics are only active in prod
        // gtag: {
        // this GA code is safe to be published
        // trackingID: "",
        // anonymizeIP: true,
        // },
      },
    ],
  ],
};

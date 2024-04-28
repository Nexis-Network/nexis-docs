module.exports = {
  masterSidebar: [
    "home",
    {
      type:"category",
      label:"Infrastructure",
      collapsed:false,
      items:[
        'architecture',
        'clusters',
        'command-line',
        'create-metamask-wallet',
        'developing_native_exzo',
        'disclaimer',
        'grants',
        'indexx',
        'industry_use_cases',
        'integrating',
        'performance_reports',
        'setup_metamask_mainnet',
        'setup_metamask_testnet',
        'solidity_tutorials',
        'staking',
        'validating',
        'wallet_metamask',
        'wallets',
        
      ]
    },
    {
      type:"category",
      label:"Products",
      collapsed:false,
      items:[
        {
          type: "category",
          label: "Wallets",
          collapsed:false,
          items: [
            'wallet',
            {
              type: "category",
              label: "Web Wallets",
              collapsed:false,
              items: [
                'web-wallet',
                'safe-web-wallet'
              ],
            },
            {
              type: "category",
              label: "Wallet Extensions",
              collapsed:false,
              items: [
                'metamask',
              ],
            }
          ],
        },
        {
          type: "category",
          label: "Bridges",
          collapsed:false,
          items: [
            'bridges',
           'bridge'
          ],
        },
        {
          type: "category",
          label: "DEXs",
          collapsed:false,
          items: [
            'dexs',
            'swap'
          ],
        },
        {
          type: "category",
          label: "Name Services",
          collapsed:false,
          items: [
            'names',
            'nameservice'
          ],
        },
        {
          type: "category",
          label: "Faucets",
          collapsed:false,
          items: [
            'faucets',
            'faucet'
          ],
        },
      ]
    }, 
  ],
};

window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "lilmermaid-16v3",
    chainName: "E_MONEY",
    rpc: "http://161.97.147.107:26557", // replace with your rpc url
    rest: "http://161.97.147.107:1517", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "emoney",
        bech32PrefixAccPub: "emoney" + "pub",
        bech32PrefixValAddr: "emoney" + "valoper",
        bech32PrefixValPub: "emoney" + "valoperpub",
        bech32PrefixConsAddr: "emoney" + "valcons",
        bech32PrefixConsPub: "emoney" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "NGM", 
            coinMinimalDenom: "ungm", 
            coinDecimals: 6, 
            coinGeckoId: "ungm", 
           }, 
        {
            coinDenom: "SEK", 
            coinMinimalDenom: "esek", 
            coinDecimals: 6, 
            coinGeckoId: "esek",
        },
        {
            coinDenom: "NOK", 
            coinMinimalDenom: "enok", 
            coinDecimals: 6, 
            coinGeckoId: "enok", 
        },
        {
            coinDenom: "EUR", 
            coinMinimalDenom: "eeur", 
            coinDecimals: 6, 
            coinGeckoId: "enok",
        },
        {
            coinDenom: "DKK", 
            coinMinimalDenom: "edkk", 
            coinDecimals: 6, 
            coinGeckoId: "edkk",
        },
        {
            coinDenom: "CHF", 
            coinMinimalDenom: "echf", 
            coinDecimals: 6, 
            coinGeckoId: "echf",
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "NGM",
            coinMinimalDenom: "ungm",
            coinDecimals: 6,
            coinGeckoId: "ungm",
        },
    ],
    stakeCurrency: {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "ungm",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
   features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}

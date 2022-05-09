## E-money lilmermaid-16v1 keplr wallet integration
<!--
#### Requirements 
[keplr wallet extension](https://google.com)
-->
### Auto installation
1) Just visit this link. Once the keplr window popup press the approve button.  
2) In the network section choose E-money network  
3) That's it. Have fun:)  

### Manual installation

Open the developer console:

- Chromium based browsers: View> Developer>Developer Tools(ctrl-shift-j)

- Copy paste the code and press enter. Do not forget to edit rpc and rest api urls in the code! :


```markdown
window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "lilmermaid-16v1",
    chainName: "E-Money",
    rpc: "http://195.3.221.131:26757", // replace with your rpc url
    rest: "http://195.3.221.131:1717", // replace with your rest api url
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
});
}
```

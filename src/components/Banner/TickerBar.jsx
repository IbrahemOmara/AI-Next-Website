import { useEffect } from "react";

export default function TickerBar() {
useEffect(() => {
    const script = document.createElement("script");
    script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = `
    {
    "symbols": [
        { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
        { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
        { "proName": "BINANCE:BNBUSDT", "title": "BNB" },
        { "proName": "OANDA:EURUSD", "title": "EUR/USD" },
        { "proName": "OANDA:XAUUSD", "title": "Gold" }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "ar"
    }
    `;

    document
    .getElementById("tradingview-ticker")
    .appendChild(script);
}, []);

return (
    <div
    id="tradingview-ticker"
    className="w-full fixed bottom-0 left-0 z-50"
    ></div>
);
}

const ForexCrossRates = () => {
return (
    <div className="forex-cross-wrapper">
        <span>Our Core Pillares of</span>
        <h1>AI Next Trading Academy</h1>
    <iframe
        title="Forex Cross Rates"
        src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A300%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%5D%2C%22colorTheme%22%3A%22dark%22%2C%22backgroundColor%22%3A%22%23000000%22%7D"
        style={{
        width: "100%",
        height: "75%",
        border: "none",
        }}
        allowTransparency={true}
        loading="lazy"
    />
    </div>
);
};

export default ForexCrossRates;

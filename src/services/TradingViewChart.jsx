import { useEffect, useRef, useCallback } from "react";

export default function TradingViewChart({ 
  symbol = `${'BTC'}USDT`, 
  interval = "60", 
  theme = "white",
  height = 200
}) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  const createWidget = useCallback(() => {
    if (!window.TradingView || !containerRef.current) {
      console.warn("TradingView script not loaded or container not available");
      return;
    }

    // Clean up existing widget
    if (widgetRef.current) {
      try {
        widgetRef.current.remove();
      } catch (error) {
        console.warn("Error removing existing widget:", error);
      }
    }

    // Clear container
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    try {
      widgetRef.current = new window.TradingView.widget({
        autosize: true,
        symbol: `BINANCE:${symbol}`,
        interval: interval,
        timezone: "Etc/UTC",
        theme: theme,
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: containerRef.current.id,
        // Additional options that might help
        studies: [],
        show_popup_button: false,
        popup_width: "1000",
        popup_height: "650",
        width: "100%",
        height: "100%"
      });
    } catch (error) {
      console.error("Error creating TradingView widget:", error);
    }
  }, [symbol, interval, theme]);

  const loadWidget = useCallback(() => {
    if (!window.TradingView) {
      // Check if script is still loading
      const checkScript = () => {
        if (window.TradingView) {
          createWidget();
        } else {
          // Retry up to 50 times (5 seconds total)
          const retryCount = (checkScript.retryCount || 0) + 1;
          if (retryCount < 50) {
            checkScript.retryCount = retryCount;
            setTimeout(checkScript, 100);
          } else {
            console.error("TradingView script failed to load after 5 seconds");
          }
        }
      };
      checkScript();
    } else {
      createWidget();
    }
  }, [createWidget]);

  useEffect(() => {
    // Generate unique container ID to avoid conflicts
    if (containerRef.current) {
      containerRef.current.id = `tradingview_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadWidget, 50);

    return () => {
      clearTimeout(timer);
      // Cleanup widget on unmount
      if (widgetRef.current) {
        try {
          widgetRef.current.remove();
        } catch (error) {
          console.warn("Error cleaning up widget:", error);
        }
      }
    };
  }, [loadWidget]);

  return (
    <div className="w-full rounded-8" style={{ height: `${height}px` }}>
      <div 
        ref={containerRef}
        className="w-full h-full"
        style={{ minHeight: `${height}px` }}
      />
    </div>
  );
}
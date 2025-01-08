(async function () {
  const currentUrl = window.location.href;

  try {
    const response = await fetch(currentUrl);
    const text = await response.text();

    // Extract url from html structure
    const actualUrlMatch = text.match(/window\.location\.replace\('(.*?)'\)/);

    if (actualUrlMatch && actualUrlMatch[1]) {
      const actualUrl = actualUrlMatch[1];
      window.location.href = actualUrl;
    } else {
      console.log("[polibatam.id bypass] : Failed to find redirect URL.");
    }
  } catch (error) {
    console.error("[polibatam.id bypass] : Error bypassing shortlink:", error);
  }
})();


// Function to remove any div containing xrayQuickView in its ID or class
function removeXrayQuickView() {
    // Look for divs with id containing xrayQuickView
    document.querySelectorAll('div[id*="xrayQuickView"]').forEach(div => {
        div.remove();
        console.log('Removed div with ID containing xrayQuickView:', div.id);
    });
    
    // Look for divs with class containing xrayQuickView
    document.querySelectorAll('div[class*="xrayQuickView"]').forEach(div => {
        div.remove();
        console.log('Removed div with class containing xrayQuickView:', div.className);
    });
}

// Execute immediately
removeXrayQuickView();

// Also set up a mutation observer to catch dynamically added elements
const observer = new MutationObserver((mutations) => {
    removeXrayQuickView();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

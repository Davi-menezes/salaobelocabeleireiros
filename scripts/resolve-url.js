const url = "https://maps.app.goo.gl/GWSQajxfRwBConW47";

async function resolveUrl() {
  try {
    const response = await fetch(url, { redirect: "follow" });
    console.log("Final URL:", response.url);
    
    // Try to extract coordinates from the URL
    const coordMatch = response.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (coordMatch) {
      console.log("Latitude:", coordMatch[1]);
      console.log("Longitude:", coordMatch[2]);
    }
    
    // Also try !3d and !4d patterns
    const dMatch = response.url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
    if (dMatch) {
      console.log("3d Latitude:", dMatch[1]);
      console.log("4d Longitude:", dMatch[2]);
    }

    // Try place data pattern
    const placeMatch = response.url.match(/data=.*!8m2!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
    if (placeMatch) {
      console.log("Place Latitude:", placeMatch[1]);
      console.log("Place Longitude:", placeMatch[2]);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

resolveUrl();

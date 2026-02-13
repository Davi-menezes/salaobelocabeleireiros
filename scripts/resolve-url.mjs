const url = "https://maps.app.goo.gl/GWSQajxfRwBConW47";

try {
  const res = await fetch(url, { redirect: "manual" });
  const location = res.headers.get("location");
  console.log("Status:", res.status);
  console.log("Redirect location:", location);
  
  if (location) {
    const res2 = await fetch(location, { redirect: "manual" });
    const location2 = res2.headers.get("location");
    console.log("Status 2:", res2.status);
    console.log("Redirect location 2:", location2);
    
    if (location2) {
      const res3 = await fetch(location2, { redirect: "manual" });
      const location3 = res3.headers.get("location");
      console.log("Status 3:", res3.status);
      console.log("Redirect location 3:", location3);
    }
  }
} catch (e) {
  console.error("Error:", e.message);
}

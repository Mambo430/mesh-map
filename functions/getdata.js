export async function onRequest(context) {
  var responseData = {
    samples: [
      { id: 1, lat: 47.7157, lon: -122.0886 }
    ],
    repeaters:[
      { id: 2, pre: "7e", name: "WW7STR/PugetMesh Cougar", lat: 47.54396, lon: -122.10861 },
      { id: 3, pre: "2b", name: "Devils Lake Repeater", lat: 47.80334, lon: -122.04273 },
    ],
    edges: [
      "1,2",
      "3,2"
    ]};
  return new Response(JSON.stringify(responseData));
}
"use server";

export const fetchData = async (domainName: string) => {
  const apiUrl = "https://flasksih.onrender.com/api/string";

  //   const apiUrl = "http://localhost:5000/api/dummy";

  //   const stringInput = "google.com";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ string: domainName }),
  });

  //   const response = await fetch("http://localhost:5000/api/dummy");

  const data = await response.json();
  console.log(data);

  const formattedData = convertStringValuesToObjectArrays(data);

  console.log(formattedData);

  return formattedData;
};

function convertStringValuesToObjectArrays(obj: any) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string") {
        obj[key] = [obj[key]];
      }
    }
  }
  return obj;
}

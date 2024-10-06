"use client";

export function validateDomain(input: string) {
  // Define regular expression patterns for URLs and domains
  const urlPattern = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;
  const domainPattern = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

  // Check if the input matches the URL pattern
  if (urlPattern.test(input)) {
    const domainName = extractDomainName(input);
    console.log("Domain name extracted from URL:", domainName);
    return domainName;
  }

  // Check if the input matches the domain pattern
  if (domainPattern.test(input)) {
    console.log("Domain pattern matched");
    return input;
  }

  // If the input doesn't match either pattern, return "Invalid"
  console.log("Invalid domain name", input);
  return null;
}

function extractDomainName(url: string) {
  // Define a regular expression pattern to extract the domain name
  const domainPattern = /^https?:\/\/([^\/]+)/;

  // Extract the domain name from the URL
  const match = domainPattern.exec(url);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}

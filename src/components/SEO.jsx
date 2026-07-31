import { useEffect } from "react";

export default function SEO({ title, description, path = "" }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, attrName = "name") => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Update Meta Description
    updateMetaTag("description", description);

    // 3. Update Open Graph Tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    const fullUrl = `https://ryetek.com.au${path}`;
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", "website", "property");

    // 4. Update Canonical Link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [title, description, path]);

  return null;
}

export const toggleTheme = () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
};

export const isDarkMode = () => {
  const html = document.querySelector("html");
  return html.classList.contains("dark");
};

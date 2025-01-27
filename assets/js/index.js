const headerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="assets/images/logo.png" alt="Logo" class="img-fluid rounded-circle me-2" width="30" height="30">
        Workshop's Home
      </a>
    </div>
  </nav>
`;

const footerHTML = `
  <footer class="bg-dark text-white text-center py-4">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Siraphop Nonpala. All rights reserved.</p>
    </div>
  </footer>
`;

const updateUIHeaderAndFooter = () => {
  const headerElement = document.getElementById("header");
  const footerElement = document.getElementById("footer");

  if (headerElement && footerElement) {
    headerElement.innerHTML = headerHTML;
    footerElement.innerHTML = footerHTML;
  } else {
    console.error("Header or footer element not found.");
  }
};

updateUIHeaderAndFooter();

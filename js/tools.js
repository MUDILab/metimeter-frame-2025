// --- TOGGLE SIDEBAR ---
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isClosed = sidebar.classList.contains("-translate-x-full");

  if (isClosed) {
    sidebar.classList.remove("-translate-x-full", "opacity-80");
    document.getElementById("arrow").classList.add("rotate-180");
  } else {
    sidebar.classList.add("-translate-x-full", "opacity-80");
    document.getElementById("arrow").classList.remove("rotate-180");
  }
}

// --- ADJUST SIDEBAR HEIGHT ---
function adjustSidebarHeight() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const sidebar = document.getElementById('sidebar');
  const toolsContainer = document.getElementById('tools-container');

  if (!sidebar || !toolsContainer || !header || !footer) return;

  const availableHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight - 32;
  sidebar.style.maxHeight = `${availableHeight}px`;
  toolsContainer.style.maxHeight = `${availableHeight - 110}px`;
}

window.addEventListener('resize', adjustSidebarHeight);
window.addEventListener('load', adjustSidebarHeight);

// --- TOOL SELECTION ---
function selectTool(element, url) {
  const loader = document.getElementById("loaderframe");
  const iframe = document.getElementById("tool-frame");
  const isClosed = sidebar.classList.contains("-translate-x-full");
  if (!isClosed)
    toggleSidebar();

  loader.classList.remove("opacity-0", "pointer-events-none");
  loader.classList.add("opacity-100");

  document.querySelectorAll(".tool-option").forEach(el => el.classList.remove("tool-active"));
  element.classList.add("tool-active");

  iframe.onload = () => {
    loader.classList.remove("opacity-100");
    loader.classList.add("opacity-0", "pointer-events-none");
  };

  iframe.src = url;
}

window.addEventListener("message", (event) => {
  if (event.data?.type === "toolSelected") {
    const url = event.data.url;
    const elements = document.querySelectorAll(".tool-option");
    let matchedElement = null;

    // Trova l'elemento attivo nel parent
    elements.forEach(el => {
      if (el.dataset.url === url) matchedElement = el;
    });

    if (matchedElement) {
      selectTool(matchedElement, url);
    }
  }
});

function iframeLoader(url) {
  const loader = document.getElementById("loaderframe");
  const iframe = document.getElementById("tool-frame");
  const isClosed = sidebar.classList.contains("-translate-x-full");

  loader.classList.remove("opacity-0", "pointer-events-none");
  loader.classList.add("opacity-100");

  iframe.onload = () => {
    loader.classList.remove("opacity-100");
    loader.classList.add("opacity-0", "pointer-events-none");
  };

  iframe.src = url;
  document.querySelectorAll(".tool-option").forEach(el => el.classList.remove("tool-active"));


  if (url === "tutorial.html"  && isClosed) {
     setTimeout(() => {
    const wrapper = document.getElementById("sidebar-wrapper");
    if (wrapper) {
      wrapper.classList.add("sidebar-animate-nudge");
      setTimeout(() => {
        wrapper.classList.remove("sidebar-animate-nudge");
      }, 1200);
    }
    }, 5000);
  }

}

// --- SETTINGS MENU ---
function dropdownMenu() {
  const settingsBtn = document.getElementById("settings");
  const settingsMenu = document.getElementById("settingsMenu");

  if (!settingsBtn || !settingsMenu) return;

  function toggleSettingsMenu() {
    const isHidden = settingsMenu.classList.contains("opacity-0");
    settingsMenu.classList.toggle("opacity-0", !isHidden);
    settingsMenu.classList.toggle("opacity-100", isHidden);
    settingsMenu.classList.toggle("scale-95", !isHidden);
    settingsMenu.classList.toggle("scale-100", isHidden);
    settingsMenu.classList.toggle("pointer-events-none", !isHidden);
  }

  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSettingsMenu();
  });

  document.addEventListener("click", (e) => {
    if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
      settingsMenu.classList.remove("opacity-100", "scale-100");
      settingsMenu.classList.add("opacity-0", "scale-95", "pointer-events-none");
    }
  });
}

// --- CLOSE SIDEBAR ON MOBILE CLICK OUTSIDE ---
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebarButton");
  const isMobile = window.innerWidth < 640;

  if (!sidebar.contains(event.target) &&
      !toggleBtn?.contains(event.target) &&
      !sidebar.classList.contains("-translate-x-full") &&
      isMobile) {
    sidebar.classList.add("-translate-x-full");
    document.getElementById("arrow").classList.remove("rotate-180");
  }
});

window.addEventListener("blur", () => {
  const sidebar = document.getElementById("sidebar");
  const isMobile = window.innerWidth < 640;

  if (isMobile && !sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    document.getElementById("arrow").classList.remove("rotate-180");
  }
});

// --- POPOLA TOOLS ---
function populateTools(field) {
  const tools = toolDataByField[field] || toolDataByField["generic"];
  const titolo = document.getElementById("title-sidebar");

  const map = {
    generic: " ",
    uxdesigner: "(UX DESIGNER)",
    management: "(MANAGEMENT)",
    financial: "(FINANCIAL)",
    medical: "(MEDICAL)",
    datascience: "(DATA SCIENCE)"
  };
  titolo.textContent = map[field] || "";

  tools.forEach((tool, index) => {
    const toolEl = document.getElementById(`tool-${index + 1}`);
    if (toolEl) {
      const dot = toolEl.querySelector(".dot");
      const title = toolEl.querySelector("h3");
      const description = toolEl.querySelector("p");

      dot.className = `dot w-8 h-8 flex-shrink-0 rounded-full transition-colors ${tool.dotColor}`;
      toolEl.dataset.color = tool.dotColor;
      dot.innerHTML = tool.dotIcon;
      title.textContent = tool.title;
      description.textContent = tool.description;
      description.className = "text-xs text-gray-500 leading-tight";

      toolEl.dataset.url = tool.url;
      toolEl.onclick = () => selectTool(toolEl, tool.url);
    }
  });
}

// --- OVERLAY OPEN/CLOSE ---
function openOverlay(url) {
  const overlay = document.getElementById('overlayPage');
  const iframe = document.getElementById('overlayIframe');
  iframe.src = url;
  overlay.classList.remove('hidden', 'opacity-0');
  overlay.classList.add('opacity-100', "flex");
  history.pushState({ overlayOpen: true }, "");
}

function closeOverlay() {
  const overlay = document.getElementById('overlayPage');
  const iframe = document.getElementById('overlayIframe');

  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
  }, 300);
  iframe.src = '';
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});

window.addEventListener("popstate", () => {
  closeOverlay();
});

window.addEventListener("message", (event) => {
  if (event.data.action === "closeOverlay") {
    closeOverlay();
  }
});

// --- DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
  const field = localStorage.getItem("selectedField") || "generic";
  const icon = document.getElementById("settings");
  const iframe = document.getElementById("tool-frame");
  let iframeReady = false;
   
  populateTools(field);
  dropdownMenu();

  const colorClasses = {
    medical: "text-red-700",
    financial: "text-green-700",
    datascience: "text-purple-700",
    generic: "text-grey-500",
    management: "text-yellow-700",
    uxdesigner: "text-cyan-700"
  };

  if (icon && colorClasses[field]) {
    icon.className += " " + colorClasses[field];
  }

  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("opacity-0");
    setTimeout(() => loader.remove(), 300);
  }

  function sendFieldToIframe() {
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: "setField", field }, "*");
    } else {    }
  }


  window.addEventListener("message", (event) => {
    if (event.data?.type === "readyForField") {
      iframeReady = true;
      sendFieldToIframe();
    }
  });

  iframe.addEventListener("load", () => {
  setTimeout(() => {
    if (!iframeReady) {
      sendFieldToIframe();
    }
  }, 1000);
  });

    if (!localStorage.getItem("hasVisited")) {
    localStorage.setItem("hasVisited", "true");
    // Mostra tutorial al primo accesso
    iframeLoader("tutorial.html");
  }

  const scrollBtn = document.getElementById("scroll-down-button");
    const toolsContainer = document.getElementById("tools-container");

    function checkScrollButtonVisibility() {
      const shouldShow = toolsContainer.scrollHeight > toolsContainer.clientHeight + 20;
      scrollBtn.classList.toggle("hidden", !shouldShow);
    }

    scrollBtn.addEventListener("click", () => {
      toolsContainer.scrollBy({ top: 100, behavior: "smooth" });
    });

    window.addEventListener("resize", checkScrollButtonVisibility);
    window.addEventListener("load", checkScrollButtonVisibility);
    new ResizeObserver(checkScrollButtonVisibility).observe(toolsContainer);

});



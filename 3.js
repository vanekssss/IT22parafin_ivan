function setTheme(theme) {
    localStorage.setItem("theme", theme);

    if (theme === "light") {
        applyCustomTheme({ bg: "#ffffff", text: "#000000", accent: "#4CAF50" });
    }

    if (theme === "dark") {
        applyCustomTheme({ bg: "#1e1e1e", text: "#ffffff", accent: "#ff9800" });
    }

    if (theme === "custom") {
        const custom = JSON.parse(localStorage.getItem("customTheme"));
        if (custom) applyCustomTheme(custom);
    }
}

function saveCustomTheme() {
    const bg = document.getElementById("bgColor").value;
    const text = document.getElementById("textColor").value;
    const accent = document.getElementById("accentColor").value;

    if (!bg || !text || !accent) {
        alert("Оберіть всі кольори!");
        return;
    }

    const customTheme = { bg, text, accent };

    localStorage.setItem("customTheme", JSON.stringify(customTheme));
    localStorage.setItem("theme", "custom");

    applyCustomTheme(customTheme);
}

function applyCustomTheme(theme) {
    document.documentElement.style.setProperty("--bg", theme.bg);
    document.documentElement.style.setProperty("--text", theme.text);
    document.documentElement.style.setProperty("--accent", theme.accent);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const custom = JSON.parse(localStorage.getItem("customTheme"));

    if (savedTheme === "custom" && custom) {
        applyCustomTheme(custom);
    } else if (savedTheme === "dark") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

function resetTheme() {
    localStorage.removeItem("theme");
    localStorage.removeItem("customTheme");
    setTheme("light");
}

document.addEventListener("DOMContentLoaded", loadTheme);
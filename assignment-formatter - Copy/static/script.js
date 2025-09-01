// This file will contain JavaScript for frontend interactivity.

// Elements
const ta = document.getElementById("assignmentText");
const charCountEl = document.getElementById("charCount");
const wordCountEl = document.getElementById("wordCount");
const previewBtn = document.getElementById("previewBtn");
const clearBtn = document.getElementById("clearBtn");
const detectHeadingsEl = document.getElementById("detectHeadings");
const notification = document.getElementById("notification");

const STORAGE_KEY = "af:draft_v1";

// Load from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) ta.value = saved;
  updateCounts();
});

// Update counts
function updateCounts(){
  const text = ta.value || "";
  charCountEl.textContent = text.length;
  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCountEl.textContent = words.length;
}

// Autosave every 2s after changes
let saveTimer;
ta.addEventListener("input", () => {
  updateCounts();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=> {
    localStorage.setItem(STORAGE_KEY, ta.value);
    showNote("Draft saved locally");
  }, 1200);
});

// Clear
clearBtn.addEventListener("click", () => {
  if (confirm("Clear the editor? This removes local draft.")){
    ta.value = "";
    localStorage.removeItem(STORAGE_KEY);
    updateCounts();
  }
});

// Preview — call backend and open new tab with returned HTML
previewBtn.addEventListener("click", async () => {
  previewBtn.disabled = true;
  previewBtn.textContent = "Preparing preview…";
  const payload = {
    text: ta.value || "",
    detect: detectHeadingsEl.checked
  };
  try {
    const res = await fetch("/api/doc/preview", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.html) {
      const newWindow = window.open("", "_blank");
      newWindow.document.write(data.html);
      newWindow.document.close();
                } else {
      showNote("No preview returned", true);
                }
  } catch (err){
    showNote("Preview failed. Check server.", true);
            } finally {
    previewBtn.disabled = false;
    previewBtn.textContent = "Preview";
  }
});

function showNote(msg, isError=false){
  notification.style.display = "block";
  notification.textContent = msg;
  notification.style.backgroundColor = isError ? "#fdecea" : "#EAF7EE";
  notification.style.color = isError ? "#b23c17" : "#0f5132";
  setTimeout(()=> notification.style.display = "none", 2800);
}

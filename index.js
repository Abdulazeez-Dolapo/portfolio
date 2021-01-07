const currentYear = new Date().getFullYear()
const copyright = document.querySelector("#copyright-date")
copyright.innerHTML = `&copy;${currentYear}`

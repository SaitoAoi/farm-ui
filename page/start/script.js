function runCode() {
    const code = document.getElementById('code-input').value;
    const iframe = document.getElementById('preview-frame');
    iframe.srcdoc = code;
  }
  
  function showHint() {
    const hintBox = document.getElementById('hint-box');
    hintBox.classList.toggle('hidden');
  }
const now = new Date();
document.getElementById('y').textContent = now.getFullYear();
document.getElementById('d').textContent = now.toLocaleDateString('cs-CZ');

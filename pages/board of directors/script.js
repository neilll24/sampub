
// Toggle the sidebar collapse state
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('menu-toggle');
const patientsBtn = document.getElementById('patients-btn');
const patientsDropdown = document.getElementById('patients-dropdown');

// Toggle sidebar visibility on menu button click
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  // Ensure the dropdown is hidden when the sidebar is collapsed
  if (sidebar.classList.contains('collapsed')) {
    patientsDropdown.style.display = 'none';
  }
});

// Show/hide the dropdown when "My Patients" is clicked
patientsBtn.addEventListener('click', () => {
  if (!sidebar.classList.contains('collapsed')) {
    if (patientsDropdown.style.display === "block") {
      patientsDropdown.style.display = "none";
    } else {
      patientsDropdown.style.display = "block";
    }
  }
});
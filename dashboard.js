// Dashboard toggler
const sidebarToggler = document.querySelector('.sidebar-toggler');
const sidebar = document.querySelector('.sidebar');

const toggle = () => {
    sidebar.classList.toggle('sidebar-toggle')
};

sidebarToggler.addEventListener('click', toggle)
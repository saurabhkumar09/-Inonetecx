// Function to load navbar and footer
function loadIncludes() {
    // Load Navbar
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            setActiveNavLink();
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load Footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Function to set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index-1.html';
    const navLinks = document.querySelectorAll('.nav-item.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Handle dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
            // Also highlight parent dropdown
            const dropdown = item.closest('.nav-item.dropdown');
            if (dropdown) {
                dropdown.querySelector('.nav-link').classList.add('active');
            }
        }
    });
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);

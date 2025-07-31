document.addEventListener('DOMContentLoaded', function() {
    
    const sidebar = document.querySelector('#scroll-sidebar');
    
    if (document.body.classList.contains('no-scroll')) {
        sidebar.classList.add('visible');
    } else {
        const scrollTriggerPoint = 200;
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollTriggerPoint) {
                sidebar.classList.add('visible');
            } else {
                sidebar.classList.remove('visible');
            }
        });
    }

    const homeButton = document.querySelector('#home-button');
    if (homeButton.href.endsWith('index.html')) {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    } else {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { location.reload(); }, 700);
        });
    }

    const copyButton = document.querySelector('#copy-button');
    const githubLink = document.querySelector('#github-link');
    if (copyButton && githubLink) {
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(githubLink.textContent).then(() => {
                copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fa-solid fa-copy"></i>';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    const feedbackModal = document.querySelector('#feedback-modal');
    const openFeedbackButton = document.querySelector('#open-feedback-button');
    const closeFeedbackButton = document.querySelector('.modal-close-button');

    if (openFeedbackButton && feedbackModal && closeFeedbackButton) {
        openFeedbackButton.addEventListener('click', function(event) {
            event.preventDefault();
            feedbackModal.classList.add('visible');
        });
    
        closeFeedbackButton.addEventListener('click', function() {
            feedbackModal.classList.remove('visible');
        });
    
        feedbackModal.addEventListener('click', function(event) {
            if (event.target === feedbackModal) {
                feedbackModal.classList.remove('visible');
            }
        });
    }

    const menuButton = document.querySelector('#menu-button');
    const menuItems = document.querySelectorAll('.menu-item');
    const sidebarContainer = document.querySelector('#scroll-sidebar');

    menuButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        menuItems.forEach(item => {
            item.classList.toggle('visible');
        });
    });

    document.addEventListener('click', function(event) {
        if (!sidebarContainer.contains(event.target)) {
            menuItems.forEach(item => {
                item.classList.remove('visible');
            });
        }
    });
});


/* Made by Chrs */
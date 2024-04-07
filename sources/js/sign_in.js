/* function handleLinkClick(event) {
    // Prevent default navigation behavior
    event.preventDefault();
    
    // Create transition overlay element
    const transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('transition-overlay');
    document.body.appendChild(transitionOverlay);
    
    // Add loading spinner container
    const loadingSpinnerContainer = document.createElement('div');
    loadingSpinnerContainer.classList.add('loading-spinner-container');
    document.body.appendChild(loadingSpinnerContainer);

    // Add loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loading-spinner');
    loadingSpinnerContainer.appendChild(loadingSpinner);

    // Add loading text
    const loadingText = document.createElement('p');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'Loading...';
    loadingSpinnerContainer.appendChild(loadingText);
    
    // Add transition effect
    setTimeout(() => {
        transitionOverlay.style.opacity = '1';
        // Navigate to the new page after a delay
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 300); // Adjust delay time to match transition duration
    }, 40); // Add a slight delay before transitioning to ensure the overlay is displayed
    
}

function mainForm() {
    window.location.href = 'userDashboard.html'
} */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('case-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');

    // Search input live filtering
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            caseCards.forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(term) ? 'block' : 'none';
            });
        });
    }

    // Category button filtering
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            caseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

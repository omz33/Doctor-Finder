document.addEventListener('DOMContentLoaded', () => {
    const specialtyButtons = document.querySelectorAll('.specialty-button');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    specialtyButtons.forEach(button => {
        observer.observe(button);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('location');
    const areaSelect = document.getElementById('area');

    const areas = {
        riyadh: ['Al Olaya', 'Al Malaz', 'Al Murabba'],
        jeddah: ['Al Hamra', 'Al Naseem', 'Al Rawdah'],
        dammam: ['Al Faisaliyah', 'Al Khalidiyah', 'Al Noor'],
        mecca: ['Al Aziziyah', 'Al Hada', 'Al Rusaifah']
    };

    locationSelect.addEventListener('change', (event) => {
        const selectedLocation = event.target.value;
        const selectedAreas = areas[selectedLocation] || [];

        areaSelect.innerHTML = selectedAreas.map(area => `<option value="${area.toLowerCase()}">${area}</option>`).join('');
    });

    // Initialize the areas dropdown based on the initial location selection
    const event = new Event('change');
    locationSelect.dispatchEvent(event);
});
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// This handles all the movements so that the sliders can create a more "live" feel.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
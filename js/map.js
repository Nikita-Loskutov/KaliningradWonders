let map_container = document.getElementById('map_container');
let options_map = {
    once: true, // Trigger only once and remove observer
    passive: true,
    capture: true
};

function start_lazy_map() {
    let map_block = document.getElementById('ymap_lazy');
    if (!map_block.getAttribute('src')) {
        map_block.setAttribute('src', map_block.getAttribute('data-src'));
        map_container.classList.add('loaded'); // Add class to hide the old image
        console.log('YMAP LOADED');
    }
}

map_container.addEventListener('click', start_lazy_map, options_map);
map_container.addEventListener('touchstart', start_lazy_map, options_map);
map_container.addEventListener('touchmove', start_lazy_map, options_map);
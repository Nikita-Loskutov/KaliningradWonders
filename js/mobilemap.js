const singleMap = {
    id: "bigmap",
    src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1ab8ff9d301fb063290d0dc8106b295a4c484d9ecc4c5e11f0e3de3a71e84127&amp;width=800&amp;height=400&amp;lang=ru_RU&amp;scroll=true",
    image: "image/bigmap.jpg"
};

const boxCartContainer = document.querySelector('.boxcart');

function isMobile() {
    return window.innerWidth <= 768;
}

function loadMap(map, container) {
    console.log("Загрузка карты:", map.id);
    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = map.src;
    script.async = true;
    script.charset = 'utf-8';

    script.onload = () => {
        console.log("Карта загружена:", map.id);
        const iframe = container.querySelector('iframe');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
        }
    };

    container.appendChild(script);
}

function createPlaceholder(map, container, useWebP) {
    console.log("Создаем заглушку для карты:", map.id, "Формат:", useWebP ? "WebP" : "JPG");
    const placeholder = document.createElement('img');
    const imageExtension = useWebP ? '.webp' : '.jpg';
    placeholder.src = map.image.replace(/\.jpg|\.webp$/, imageExtension);
    placeholder.alt = "Карта";
    placeholder.style = "width: 100%; height: 100%; cursor: pointer;";

    placeholder.addEventListener('click', () => {
        console.log("Клик по карте:", map.id);
        boxCartContainer.style.display = 'block';
        loadMap(map, container);
    });

    container.appendChild(placeholder);
}

supportsWebP((isSupported) => {
    const useWebP = isSupported;

    if (!isMobile()) {
        console.log("Не мобильное устройство: карта не будет загружена.");
        return;
    }

    if (boxCartContainer) {
        createPlaceholder(singleMap, boxCartContainer, useWebP);
    } else {
        console.warn("Контейнер .boxcart не найден!");
    }
});

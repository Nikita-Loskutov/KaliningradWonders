const maps = [
    {
        id: "map1",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8c16655e4c2798cdb8246bee71b9ed73db769517233c9000a7257f847148fd3e&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map1.jpg"
    },
    {
        id: "map2",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1b85d7ee7ad16716793a97b30c2145e02ab9eb9b83ed0c75107383e84793c84b&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map2.jpg"
    },
    {
        id: "map3",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A978fcf53f0df75d694304b4dcbd75c903fd22b8cc87f61a2be6eac6f51452cfb&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map3.jpg"
    },
    {
        id: "map4",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adc640c5ab7cd703210b3c9bf5cf002794537c9f3f2a32c61dad367eda806ddcc&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map4.jpg"
    },
    {
        id: "map5",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8a32e0972bc774f70ce6e9476c1cc88d169a730266e805d4ee9869d298f7ecc9&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map5.jpg"
    },
    {
        id: "map6",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51c31085092ee09d743c8f5a144132df78e0bc58b0f2a176246fde637694eaf6&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map6.jpg"
    },
    {
        id: "map7",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A139de8d8c6f4a7ee9e8d137a9ea652a58772f0f682e405e26aa45969994c98d8&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map7.jpg"
    },
    {
        id: "map8",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2466fd5219f060d1b24f3edbd0a18b9068ba727522a28fb149c6f67d0499930e&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map8.jpg"
    },
    {
        id: "map9",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A104c6f17526507d6288fd7073d23ad6c25ca575a32f606242afccb88151f2c6f&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map9.jpg"
    },
    {
        id: "map10",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aeaa981aac7dc6f8c88b24afe4bb326a5bab1aeebac21fb8eca72728a1eb77ad3&width=100%&height=50%&lang=ru_RU&scroll=true",
        image: "image/map10.jpg"
    }

];


const box1Containers = document.querySelectorAll('.box1');
const box4Containers = document.querySelectorAll('.box4');

function supportsWebP(callback) {
    // Используем современный метод для проверки поддержки WebP
    const canvas = document.createElement('canvas');
    if (!!(canvas.getContext && canvas.getContext('2d'))) {
        // Проверяем поддержку WebP через `toDataURL`
        callback(canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0);
    } else {
        callback(false); // Если canvas недоступен
    }
}

// Проверка, является ли устройство мобильным
function isMobile() {
    return window.innerWidth <= 768; // Условие для мобильных устройств
}

// Загрузка карты
function loadMap(map, container) {
    console.log("Загрузка карты:", map.id); // Логируем, что карта загружается
    container.innerHTML = ''; // Очищаем контейнер перед добавлением карты
    const script = document.createElement('script');
    script.src = map.src;
    script.async = true;
    script.charset = 'utf-8';
    container.appendChild(script);
}

// Создание заглушки с выбором формата
function createPlaceholder(map, container, useWebP) {
    console.log("Создаем заглушку для карты:", map.id, "Формат:", useWebP ? "WebP" : "JPG");
    const placeholder = document.createElement('img');
    const imageExtension = useWebP ? '.webp' : '.jpg'; // Выбираем формат
    placeholder.src = map.image.replace(/\.jpg|\.webp$/, imageExtension); // Заменяем расширение
    placeholder.alt = "Карта";
    placeholder.style = "width: 100%; height: 50%; cursor: pointer;";
    placeholder.addEventListener('click', () => {
        console.log("Клик по карте:", map.id); // Логируем, что кликнули на карту
        loadMap(map, container);
    });
    container.appendChild(placeholder);
}

// Инициализация карт
supportsWebP((isSupported) => {
    const useWebP = isSupported;

    // Если устройство мобильное, не инициализируем карты
    if (isMobile()) {
        console.log("Мобильное устройство: карты не будут загружены.");
        return;
    }

    maps.forEach((map, index) => {
        if (index % 2 === 0) { // Четные индексы — для .box1
            if (box1Containers[index / 2]) {
                createPlaceholder(map, box1Containers[index / 2], useWebP);
            } else {
                console.warn("Контейнер .box1 для карты", map.id, "не найден!");
            }
        } else { // Нечетные индексы — для .box4
            if (box4Containers[Math.floor(index / 2)]) {
                createPlaceholder(map, box4Containers[Math.floor(index / 2)], useWebP);
            } else {
                console.warn("Контейнер .box4 для карты", map.id, "не найден!");
            }
        }
    });
});

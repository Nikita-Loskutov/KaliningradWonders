const maps = [
    {
        id: "map1",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8c16655e4c2798cdb8246bee71b9ed73db769517233c9000a7257f847148fd3e&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map2",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1b85d7ee7ad16716793a97b30c2145e02ab9eb9b83ed0c75107383e84793c84b&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map3",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A978fcf53f0df75d694304b4dcbd75c903fd22b8cc87f61a2be6eac6f51452cfb&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map4",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adc640c5ab7cd703210b3c9bf5cf002794537c9f3f2a32c61dad367eda806ddcc&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map5",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8a32e0972bc774f70ce6e9476c1cc88d169a730266e805d4ee9869d298f7ecc9&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map6",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51c31085092ee09d743c8f5a144132df78e0bc58b0f2a176246fde637694eaf6&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map7",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A139de8d8c6f4a7ee9e8d137a9ea652a58772f0f682e405e26aa45969994c98d8&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map8",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2466fd5219f060d1b24f3edbd0a18b9068ba727522a28fb149c6f67d0499930e&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map9",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A104c6f17526507d6288fd7073d23ad6c25ca575a32f606242afccb88151f2c6f&width=100%&height=60%&lang=ru_RU&scroll=true"
    },
    {
        id: "map10",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aeaa981aac7dc6f8c88b24afe4bb326a5bab1aeebac21fb8eca72728a1eb77ad3&width=100%&height=60%&lang=ru_RU&scroll=true"
    }

];

// Контейнеры для карт (через чередование .box1 и .box4)
const box1Containers = document.querySelectorAll('.box1');
const box4Containers = document.querySelectorAll('.box4');

// Функция для создания карты
function createMap(map, container) {
    const script = document.createElement('script');
    script.src = map.src;
    script.async = true;
    script.charset = 'utf-8';
    container.appendChild(script);
}

// Чередуем карты между .box1 и .box4
maps.forEach((map, index) => {
    if (index % 2 === 0) { // Четные индексы (0, 2, 4, 6, 8) — для .box1
        if (box1Containers[index / 2]) { // Проверяем, есть ли соответствующий контейнер
            createMap(map, box1Containers[index / 2]);
        }
    } else { // Нечетные индексы (1, 3, 5, 7, 9) — для .box4
        if (box4Containers[Math.floor(index / 2)]) { // Проверяем, есть ли соответствующий контейнер
            createMap(map, box4Containers[Math.floor(index / 2)]);
        }
    }
});

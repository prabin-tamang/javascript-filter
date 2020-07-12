
const hamburger = document.querySelector('.bars');
const filter = document.querySelector('.filter');
const closeFilter = document.querySelector('.filter button');

hamburger.addEventListener('click', () => {
    filter.classList.add('filter-open');
})

closeFilter.addEventListener('click', () => {
    filter.classList.remove('filter-open');
})

// 


const menu = [

    {
        id: 1,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'laptop',
        price: `£379.00`,
        img: './images/laptop-2.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 2,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'desktop',
        price: `£379.00`,
        img: './images/desktop-3.jpg',
        type: `Intel® Core™ i5-10400F Processor`,
        ram: `RAM: 16 GB / Storage: 1 TB HDD & 256 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2060 6 GB`,
    },
    {
        id: 3,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'desktop',
        price: `£379.00`,
        img: './images/desktop-2.jpg',
        type: `Unlocked Intel® Core™ i7-10700K Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 4,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'laptop',
        price: `£379.00`,
        img: './images/laptop-1.jpg',
        type: `PC SPECIALIST Tornado R5 Gaming PC - AMD Ryzen 5, GTX 1660, 1 TB HDD & 256 GB SSD`,
        ram: `RAM: 8 GB / Storage: 1 TB HDD & 256 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce GTX 1660 6 GB`,
    },
    {
        id: 5,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'desktop',
        price: `£379.00`,
        img: './images/desktop-4.jpg',
        type: `AMD Ryzen 5 3600 Processor`,
        ram: `RAM: 8 GB / Storage: 1 TB HDD & 256 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce GTX 1660 6 GB`,
    },
    {
        id: 6,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'desktop',
        price: `£379.00`,
        img: './images/desktop-1.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },

    {
        id: 7,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'laptop',
        price: `£379.00`,
        img: './images/laptop-3.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 8,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'laptop',
        price: `£379.00`,
        img: './images/laptop-4.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 9,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'monitor',
        price: `£379.00`,
        img: './images/monitor-1.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 10,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'monitor',
        price: `£379.00`,
        img: './images/monitor-2.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 11,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'monitor',
        price: `£379.00`,
        img: './images/monitor-3.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
    {
        id: 12,
        title: 'PC SPECIALIST Vortex ST-S Gaming PC - Intel® Core™ i7, RTX 2070 Super, 2 TB HDD & 512 GB SSD',
        category: 'monitor',
        price: `£379.00`,
        img: './images/monitor-4.jpg',
        type: `Intel® Core™ i7-10700 Processor`,
        ram: `RAM: 16 GB / Storage: 2 TB HDD & 512 GB SSD`,
        graphics: `Graphics: NVIDIA GeForce RTX 2070 Super 8 GB`,
    },
];

const container = document.querySelector('.container');
const filterBtns = document.querySelectorAll('.filter-btn');



// load items 
window.addEventListener('DOMContentLoaded' , () => {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach((btn)=> {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) =>{
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === 'all') {
            displayMenuItems(menu);
        } else{
            displayMenuItems(menuCategory);
        }
    });
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item)=>{
        

        return `<div class="product">
        <img src=${item.img}>
        <div class="product-info">
            <h3>${item.title}</h3>
            <ul>
                <li>${item.type}</li>
                <li>${item.ram}</li>
                <li>${item.graphics}</li>
            </ul>
            <div class="price">
                <strong>${item.price}</strong>
            </div>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("")
    container.innerHTML = displayMenu;
}


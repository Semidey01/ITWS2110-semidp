// Fetch menu data using AJAX
fetch('data/menu.json')
    .then(response => response.json())
    .then(data => {
        displayMenu(data);
        document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
        console.error('Error loading menu:', error);
        document.getElementById('loading').textContent = 'Error loading menu. Please try again.';
    });

function displayMenu(dishes) {
    const menuBody = document.getElementById('menuBody');
    
    dishes.forEach(dish => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="image-cell"><img src="${dish.imageUrl}" alt="${dish.name}"></td>
            <td>${dish.name}</td>
            <td>${dish.description}</td>
            <td><span class="category-badge ${dish.category}">${dish.category}</span></td>
            <td>${dish.cuisine}</td>
            <td>${dish.ingredients.join(', ')}</td>
            <td class="price">$${dish.price.toFixed(2)}</td>
        `;
        
        menuBody.appendChild(row);
    });
}
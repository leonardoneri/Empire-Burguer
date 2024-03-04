const API_URL = 'https://api.brchallenges.com/api/empire-burger'

const loadMenu = () => {
    fetch(`${API_URL}/menu`)
        .then((response) => response.json())
        .then((data) => {
            const listProduct = document.getElementById("list-product")
            data.forEach((product) => {
                const productItem = document.createElement('li')
                listProduct.appendChild(productItem)

                const titleItem = document.createElement('div')

                const h2 = document.createElement('h2')
                h2.classList.add("title-item")
                h2.innerText = `${product.plate}`
                h2.style.textTransform = 'uppercase'

                const price = document.createElement('h2')
                price.classList.add('title-item')

                const formatPrice = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(product.price)

                price.innerText = formatPrice

                const itemIngredients = document.createElement('p')
                itemIngredients.classList.add("item-ingredients")
                itemIngredients.innerText = product.ingredients

                titleItem.append(h2, price)
                productItem.append(titleItem, itemIngredients)

                const availableWidth = titleItem.offsetWidth - h2.offsetWidth - price.offsetWidth;

                const numberOfDots = Math.floor(availableWidth / 5);

                const dots = document.createElement('h2');
                dots.innerText = '.'.repeat(numberOfDots);
                titleItem.insertBefore(dots, price);

            })
        })
}



loadMenu()
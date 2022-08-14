import dataList from './data';

export const customFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataList);
        }, 500);
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataList.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataList.filter(prod => prod.category === category))
        }, 500)
    })
}
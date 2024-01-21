import { useEffect, useState } from 'react'
import { ProductList } from './ProductList'

export function FilterByCategory() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [fileredProductList, setFilteredProductList] = useState([]);

  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories(prev => ([...prev, category]))
    }
  }

  const removeCategory = (category) => {
    if (selectedCategories.includes(category)) {
      console.log(selectedCategories)
      const removedList = selectedCategories.filter((item) => (item !== category));
      setSelectedCategories(removedList);
    }
  }

  const resetCategory = () => {
    setSelectedCategories([]);
  }

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProductList(productList);
    } else {
      setFilteredProductList(productList.filter((item) => (selectedCategories.includes(item.category))));
    }
  }, [selectedCategories, productList])

  const getCategories = async () => {
    setLoading(true);

    await fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const arr = data.slice(0, 6);
        setCategories(arr);
      })
      .catch(err => alert(err))
      .finally(() => {
        setLoading(false);
      })
  }

  const getProducts = async () => {
    setLoading(true);

    await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductList(data.products);
        setFilteredProductList(data.products);
        getCategories(); // get the categories list
      })
      .catch(err => alert(err))
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div >
      <div >
        <div >
          <span > Categories: </span>
          {
            categories.map((category, index) => (
              <div
                key={index}
                onClick={() => {
                  if (selectedCategories.includes(category)) {
                    removeCategory(category);
                  } else {
                    addCategory(category);
                  }
                }}
              >
                {category.split("-").join(" ")}
              </div>
            ))
          }
          <div
            onClick={() => resetCategory()}
          >
            clear
          </div>
        </div>
        <ProductList filteredProductList={fileredProductList} loading={loading} />
      </div>
    </div>
  )
}




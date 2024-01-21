
export function ProductList({ filteredProductList, loading }) {

  if (loading)
    return <>Loading</> // use your loading state or component

  return (
    <div>
      <div>Products: </div>
      <div >
        {
          filteredProductList.map((product) => (
            <div key={product.id}>
              <img
                src={product.thumbnail}
                alt='product'

              />
              <div>
                <div >
                  {(product.title.length > 25) ? product.title.substring(0, 22) + '...' : product.title}
                </div>
                <div >
                  {product.category}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


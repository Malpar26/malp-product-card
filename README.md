# malp-product-card

Paquete de pruebas de despliegue en NPM

### Juan Luis Malpartida

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from malp-product-card'
````

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10
        }}
      >
        {
          ({isMaxCountReached, reset, increaseBy, count, maxCount}) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard> 
```
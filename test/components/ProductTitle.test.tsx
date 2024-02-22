import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from '../data/products';

describe('ProductTile', () => {
  test('should show the component with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' className='custom-class' />  
      )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should show the component with product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>  
      )

      expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

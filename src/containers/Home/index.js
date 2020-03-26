import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList, ColorSelector} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, filterColor, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);
    const productsFilteredByColor = filterColor !== 'none' ? 
      compareProducts.filter(product => product.colors.includes(filterColor)) : compareProducts;

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList products={products} compare={actions.compare}/>
        <ColorSelector filterColor={filterColor} changeFilterColor={actions.changeFilterColor} />
        {compareProducts.length >= 2 &&
          <Compare products={productsFilteredByColor}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products,
    filterColor: state.product.filterColor,
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch),
  })
)(Home)

import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Laptop = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img  src = {props.products[1].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[1].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[1].PRICE}</p>
                    <p>Description: {props.products[1].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[2].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[2].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[2].PRICE}</p>
                    <p>Description: {props.products[2].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(2)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[3].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[3].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[3].PRICE}</p>
                    <p>Description: {props.products[3].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(3)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Dell</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[4].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[4].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[4].PRICE}</p>
                    <p>Description: {props.products[4].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(4)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[5].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[5].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[5].PRICE}</p>
                    <p>Description: {props.products[5].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(5)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >HP</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[6].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[6].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[6].PRICE}</p>
                    <p>Description: {props.products[6].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(6)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[7].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[7].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[7].PRICE}</p>
                    <p>Description: {props.products[7].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(7)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[8].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[8].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[8].IMAGE}</p>
                    <p>Description: {props.products[8].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(8)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {
  addToCart: data => {
    return { payload: data, type: 'ADD_TO_CART',}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Laptop)

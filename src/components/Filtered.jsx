import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import Categories from "./Categories";
import ColorCheck from "./ColorCheck";
import PriceComp from "./PriceComp";
import ProductsToShow from "./ProductsToShow";

class Filtered extends Component {
   products = [
      { name: "product-K1", price: 10, type: "category K", color: "color K" },
      { name: "product-K2", price: 15, type: "category K", color: "color Y" },
      { name: "product-L1", price: 20, type: "category L", color: "color X" },
      { name: "product-L2", price: 25, type: "category L", color: "color L" },
      { name: "product-X1", price: 30, type: "category X", color: "color Z" },
      { name: "product-X2", price: 35, type: "category X", color: "color X" },
      { name: "product-Y1", price: 40, type: "category Y", color: "color Y" },
      { name: "product-Y2", price: 45, type: "category Y", color: "color K" },
      { name: "product-Z1", price: 50, type: "category Z", color: "color L" },
      { name: "product-Z2", price: 55, type: "category Z", color: "color Z" },
   ];

   colors = [];
   newProducts = [];

   state = {
      productsToShow: [],
      choosenCategory: "",
      value: { min: 10, max: 55 },
      //   priceValue: 10,
      choosenColors: "",
   };

   categoryHandler = (category) => {
      this.setState({ choosenCategory: category.type });
      console.log(this.state.choosenCategory);
   };

   priceHandler = (value) => {
      this.setState({ value });
   };

   colorHandler = async (e) => {
      if (e.currentTarget.checked) {
         await this.setState({
            choosenColors: e.currentTarget.value,
         });
      } else if (!e.currentTarget.checked) {
         await this.setState({
            choosenColors: "",
         });
      }
      // console.log(this.state.choosenColors);
   };

   getUniqueListBy = (arr, key) => {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
   };

   filterHandler = async () => {
      console.log("before ", this.newProducts);
      let products = JSON.parse(JSON.stringify(this.products));
      this.state.choosenCategory &&
         (this.newProducts = products.filter(
            (p) => p.type === this.state.choosenCategory
         ));
      if (this.state.value.min > 10 || this.state.value.max < 55) {
         this.newProducts = (
            this.newProducts.length > 0 ? this.newProducts : products
         ).filter((p) => {
            if (
               p.price >= this.state.value.min &&
               p.price <= this.state.value.max
            ) {
               return p;
            }
            return null;
         });
      }
      if (this.state.choosenColors) {
         this.newProducts = (
            this.newProducts.length > 0 ? this.newProducts : products
         ).filter((p) => p.color === this.state.choosenColors);
      }

      await this.setState({
         productsToShow: this.getUniqueListBy(this.newProducts, "name"),
      });
   };

   resetHandler = async () => {
      await this.setState({
         productsToShow: [],
         choosenCategory: "",
         value: { min: 10, max: 55 },
         choosenColors: [],
      });
      document.querySelector("#color").reset();
   };

   resetColorsHandler = async () => {
      this.colors.length = 0;
      await this.setState({
         choosenColors: JSON.parse(JSON.stringify(this.colors)),
      });
      this.filterHandler();
   };

   render() {
      return (
         <>
            <h3 className="text-center lead mb-5">
               Choose one from our categories below
            </h3>
            <Categories
               products={this.products}
               categoryHandler={this.categoryHandler}
               filterHandler={this.filterHandler}
            />
            <Row className="my-4">
               <Col xs={4}>
                  <h3 className="text-center">Filters</h3>
                  <PriceComp
                     priceValue={this.state.priceValue}
                     priceHandler={this.priceHandler}
                     filterHandler={this.filterHandler}
                     value={this.state.value}
                  />
                  <ColorCheck
                     colorHandler={this.colorHandler}
                     filterHandler={this.filterHandler}
                     resetColorsHandler={this.resetColorsHandler}
                  />
                  <button
                     className="btn btn-outline-dark"
                     onClick={this.resetHandler}
                  >
                     Reset All
                  </button>
               </Col>
               <Col xs={8}>
                  <ProductsToShow
                     products={
                        this.state.productsToShow.length ||
                        this.state.choosenCategory
                           ? this.state.productsToShow
                           : this.products
                     }
                  />
               </Col>
            </Row>
         </>
      );
   }
}

export default Filtered;

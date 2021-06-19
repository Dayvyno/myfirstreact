import React from "react";
import ReactDOM from 'react-dom'
import "./index.css"

class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category
        return (
                <tr>
                    <th colSpan="2">{category}</th>
                </tr>

        )
    }
}
class ProductRow extends React.Component{
    render(){
        const product = this.props.product
        const goodsName = product.stocked? product.name: <span>{product.name}</span>
        return (
            <tr>
                <td>{goodsName}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}
class ProductTable extends React.Component{
    render(){
        const filterText = this.props.filterText
        const inStockChange =this.props.inStockChange
        let lastCategory
        const rows = [];
        lastCategory = null;
        this.props.products.forEach((product)=>{
            if (product.name.indexOf(filterText)===-1){
                return ;
            }
            if (inStockChange && !product.stocked){
                return ;
            }
            if (product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            }
            rows.push(<ProductRow product={product} />)
            lastCategory = product.category
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows} </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component{
    handleFilterChange = (event) => this.props.onFilterTextChange(event.target.value)
    handleInStockChange = event => this.props.onHandleInStockChange(event.target.checked)

    render(){
        const filterText = this.props.filterText
        const inStockChange = this.props.inStockChange
        return (
            <div>
                <input type="text" value={filterText} placeholder="Search...." name='searchbar' onChange={this.handleFilterChange} />
                <p><input type="checkbox" checked={inStockChange} onChange={this.handleInStockChange} /> Only show products in stock</p>
            </div>
        )
    }
}

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText:"",
            inStockChange : false
        }
    }
    handleFilterText=(filterText)=>this.setState({filterText: filterText})
    handleInStockChanging = (inStockChange) => this.setState({inStockChange: inStockChange})

    render(){
        return (
            <div>
                <SearchBar 
                filterText={this.state.filterText} 
                onFilterTextChange={this.handleFilterText}
                inStockChange={this.state.inStockChange}
                onHandleInStockChange={this.handleInStockChanging} />
                <ProductTable products={PRODUCTS}
                filterText={this.state.filterText}
                inStockChange={this.state.inStockChange} />
            </div>
        )
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
   
ReactDOM.render(
    <FilterableProductTable />,
    document.getElementById('root')
);
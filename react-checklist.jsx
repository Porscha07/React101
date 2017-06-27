var products = [
	{
		category: 'Sporting Goods',	
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	// {
	// 	category: 'Junk',	
	// 	price: '$49.99',
	// 	name: 'Football',
	// 	inStock: true
	// },	
	{
		category: 'Sporting Goods',	
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',	
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',	
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',	
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function FilterableProductTable(props){
	return(
		<div className="table">
			<SearchBar />
			<ProductTable  products={props.products}/>
		</div>
	)
}
//***********************Search Bar***************
	function SearchBar(props){
		return(
			<div className="row searchBar">
				<div className="col-sm-12">
					<form class="search-bar">
						<input type="text" class="form-control" placeholder="Search......"/>
					</div>
						<div className="col-sm-12">
							<label className="checkbox-text"><input type="checkbox" value="" />Only show products in stock</label>
						</div>
					</form>
				</div>
		)
	}
	//********************Product Table********
	function ProductTable(){
		return(
			<div className="productTable">
				<div className="row table-info">
					<div className="col-sm-4">
						Name
					</div>
					<div className="col-sm-4">
						Price
					</div>
				</div>
				<ProductCategoryRow />
				<ProductRow />
				<ProductRow />
				<ProductRow />
				<ProductCategoryRow />
				<ProductRow />
				<ProductRow />
				<ProductRow />
			</div>
		)
	}
	//**********************Product Row*************
	function ProductCategoryRow (props){
		return(
				<tr>
					<th>{props.category}</th>
				</tr>
		)
	}
	//************************Product Category Row***********	

	function ProductRow (props){
		return(
				<div className="row">
					<div className="col-sm-4 productName">
						Product Name
					</div>
					<div className="col-sm-8 productName">
						Product Price
					</div>
				</div>
		)
	}
function Application(props) {
	//must return a single virtualDOM element
 	return(
	<div className="container">
		<div className="row">
			<div className="col-sm-offset-2 col-sm-8">
				<FilterableProductTable products={products}/>
			</div>
		</div>
	</div>
	)
}

ReactDOM.render(
  <Application products={products} />,
  document.getElementById('container')
  )
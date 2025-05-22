import classes from './adminPage.module.scss'
import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
import ErrorPage from '../ErrorPage/errorPage'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import axios from 'axios'

export default function AdminPage(){

    let token = localStorage.getItem('token').toString()
    const user = jwtDecode(token)

    if(user.role == "USER"){
        console.log('user')
    }
    if(user.role == "ADMIN"){
        console.log('admin')
    }
    
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([])

    const [ProductId, setProductId] = useState()
    const [ProductIMG, setProductIMG] = useState('')
    const [ProductName, setProductName] = useState('')
    const [ProductDesc, setProductDesc] = useState('')
    const [ProductRating, setProductRating] = useState()
    const [ProductPrice, setProductPrice] = useState()
    const [ProductCategory, setProductCategory] = useState(-1)

    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://localhost:5000/product',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        axios({
            method: 'GET',
            url: 'http://localhost:5000/categories',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setCategories(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    function createProduct(){
        let body = new FormData()
        body.append('name', ProductName)
        body.append('img', ProductIMG)
        body.append('desc', ProductDesc)
        body.append('rating', ProductRating)
        body.append('price', ProductPrice)
        body.append('categoryId', ProductCategory)

        axios({
            method: "post",
            url: "http://localhost:5000/product/create",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            alert('Nicely done!')
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    function editProduct(){
        let body = new FormData()
        body.append('id', ProductId)
        body.append('name', ProductName)
        body.append('img', ProductIMG)
        body.append('desc', ProductDesc)
        body.append('rating', ProductRating)
        body.append('price', ProductPrice)
        body.append('categoryId', ProductCategory)

        axios({
            method: "post",
            url: "http://localhost:5000/product/edit",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            alert('Nicely done!')
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    function deleteProduct(){
        let body = new URLSearchParams()
        body.append('id', ProductId)

        axios({
            method: "delete",
            url: "http://localhost:5000/product/delete",
            data: body,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
            console.log(response);
            alert('Nicely done!')
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    if(user.role == 'ADMIN'){return(
        <>
            <Header color={'red'} title_top={'Admin Page'} title_bot={''}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div>
                            <form onSubmit={(e)=>[e.preventDefault(), createProduct()]} className={classes.product}>
                                <p>Create Product</p>
                                <div>
                                    <label htmlFor="img">img</label>
                                    <input type="file" name="img" id="img" onChange={(e)=>setProductIMG(e.target.files[0])} required/>
                                </div>
                                <div>
                                    <label htmlFor="name">name</label>
                                    <input type="text" name="name" id="name" value={ProductName} onChange={(e)=>setProductName(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="desc">desc</label>
                                    <input type="text" name="desc" id="desc"  value={ProductDesc} onChange={(e)=>setProductDesc(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="rating">rating</label>
                                    <input type="number" name="rating" id="rating"  value={ProductRating} onChange={(e)=>setProductRating(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="price">price</label>
                                    <input type="number" name="price" id="price"  value={ProductPrice} onChange={(e)=>setProductPrice(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="category">category</label>
                                    <select name="products" id="products">
                                    <option>null</option>
                                        {categories.map((data, key) => {
                                            return(
                                                <option key={key} onClick={()=>setProductCategory(data.id)}>{data.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type="submit">submit</button>
                            </form>
                            <br />
                            <form onSubmit={(e)=>[e.preventDefault(), editProduct()]}>
                                <p>Edit Product</p>
                                <label htmlFor="products">product</label>
                                <select name="products" id="products">
                                <option>null</option>
                                    {data.map((data, key) => {
                                        return(
                                            <option key={key} onClick={()=>setProductId(data.id)}>{data.name}</option>
                                        )
                                    })}
                                </select>
                                <div>
                                    <label htmlFor="img">img</label>
                                    <input type="file" name="img" id="img" onChange={(e)=>setProductIMG(e.target.files[0])} required/>
                                </div>
                                <div>
                                    <label htmlFor="name">name</label>
                                    <input type="text" name="name" id="name" value={ProductName} onChange={(e)=>setProductName(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="desc">desc</label>
                                    <input type="text" name="desc" id="desc"  value={ProductDesc} onChange={(e)=>setProductDesc(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="rating">rating</label>
                                    <input type="number" name="rating" id="rating"  value={ProductRating} onChange={(e)=>setProductRating(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="price">price</label>
                                    <input type="number" name="price" id="price"  value={ProductPrice} onChange={(e)=>setProductPrice(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor="category">category</label>
                                    <select name="products" id="products">
                                    <option>null</option>
                                        {categories.map((data, key) => {
                                            return(
                                                <option key={key} onClick={()=>setProductCategory(data.id)}>{data.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type="submit">edit</button>
                            </form>
                            <br />
                            <form onSubmit={(e)=>[e.preventDefault(), deleteProduct()]}>
                                <p>Delete Product</p>
                                <label htmlFor="products">product</label>
                            <select name="products" id="products">
                                <option>null</option>
                                    {data.map((data, key) => {
                                        return(
                                            <option key={key} onClick={()=>[setProductId(data.id), console.log(data.id)]}>{data.name}</option>
                                        )
                                    })}
                                </select>
                                <br />
                                <button type="submit">delete</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )}
    else{return(
        <>
            <ErrorPage/>
        </>
    )}
}
import classes from './adminPage.module.scss'
import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
import ErrorPage from '../ErrorPage/errorPage'
import { useEffect, useState } from 'react'

import axios from 'axios'

export default function AdminPage(){
    
    const [data, setData] = useState([])

    const [ProductIMG, setProductIMG] = useState('')
    const [ProductName, setProductName] = useState('')
    const [ProductDesc, setProductDesc] = useState('')
    const [ProductRating, setProductRating] = useState()
    const [ProductPrice, setProductPrice] = useState()
    const [ProductCategory, setProductCategory] = useState()

    // function createProduct(){
    //     axios.post('http://localhost:5000/products/create', {
    //         img: ProductIMG,
    //         name: ProductName,
    //         desc: ProductDesc,
    //         rating: ProductRating,
    //         price: ProductPrice,
    //         categoryId: ProductCategory
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
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
              alert('Product with this name already exists!')
            });
        
    }

    

    // const data = axios({
    //     method: 'GET',
    //     url: 'http://localhost:5000/categories',
    //     headers: {'Content-Type': "application/json"}
    // })
   

    // console.log(data)

    return(
        <>
            <Header color={'red'} title_top={'Admin Page'} title_bot={''}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <form onSubmit={(e)=>[e.preventDefault(), createProduct()]} className={classes.product}>
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
                                <input type="number" name="category" id="category"  value={ProductCategory} onChange={(e)=>setProductCategory(e.target.value)} required/>
                            </div>
                            <button type="submit">submit</button>
                        </form>
                        <form action={(e)=>e.preventDefault()} className={classes.news}>

                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
    // return(
    //     <>
    //         <ErrorPage/>
    //     </>
    // )
}
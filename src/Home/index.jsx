import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css"


export default function Home(){
    const [listaHome, setHome] = useState([

        {

            id: 1,

            item: "Nome: Moletom Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLWIkoOawkYEMNEcpCi8AckUXMnBYI4bUUy-vsXBBEf-TWbOsPkr324fZAldqEvh4-J2NfUFGN8puZhYOQbzqZpLYbYCB1eRrIIiSS_yQ&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco: "Preço: R$ 199,00"

        },

        {

            id: 2,

            item: "Nome: Camiseta Baw",

            imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlUgUjgvXuCqsnTbxlyrZVp_qgTNwdwtLFUJMMbmPoi2jTH_ChQZNwtQ0t41f7ZFmklYKgwTs433QGQXV0Xwcw00cq4IQHzQeTFL5WVRvpHIzd-dDpzXGq&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco: "Preço: R$ 179,00"

        },

        {

            id: 3,

            item: "Nome: Moletom Roxo Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn0IGkoZqIokG4SM0lrpCAllDXxFx7Xs1wOP2eAXgUkMYs_t6VxmEGUVl9c0fUF4bMFaADSqGHUkJZcTY0HflJNs5XmfTWTtn8WLiIRrTnvP_KD7lvXME77w&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco: "Preço: R$ 199,00"

        },

        {

            id: 4,

            item: "Nome: Camisa Over Baw",

            imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPufhdi2N1YwjNSJW32ZMgknxwsL8nDgZLtUXdTq9WPLlqcTr5JQ1FnPl4kbS2Zv_2IxiGb7bOVDHMeJc20DDa6ZBHUI47VaTI9XNGTeCqwgtANz4KNFwUIA&usqp=CAE",
 
            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco: "Tamanho: R$ 119,00"

        },
        {
            id:5,

            item:"Nome: Bermuda Baw",

            imagem:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5IAdCg7M7a6pOtgl3Dp9NXuRrJSw0fxsMfm55qXdubpzROW0ei4mTW9Q5COIcXBmM_8EXkZvoMxWzcmxPXXM2agaP7pvTjc7i1j7mS4wWv4u2qj8SGBDvBg&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco:"Preço: R$ 104,45"
        },
        {
            id:6,

            item:"Nome: Calça Street Baw",

            imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnHqiySKMHsmxRudN7_Y3oJc1x1TYdNSPMIueKjABHCjFiXUJkGzs3TykNlnTtKQouCdf_zlS4jbtpI6q7lSjK3A9A7q5GlqGwsYPfbfRyFlaxNwKMb-ms&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            preco:"Preço: R$ 249,00"
        },
        {
          id:17,

          item: "Nome: Moletom Bunny",

          imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F332239%2F0085759010_02.jpg%3Fv%3D638542452271400000&fit=cover&width=560&height=840",

          tamanho:["Tamanho: PP-P-M-G-GG-3G"],

          composicao:"Composição: 100% Algodão",

          preco:"Preço: R$ 279,00"
      },
      {
          id:18,

          item: "Nome: Moletom Hoodie R",

          imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F282771%2F0084583901_02.jpg%3Fv%3D638464733972630000&fit=cover&width=560&height=840",

          tamanho:["Tamanho: PP-P-M-G-GG"],

          composicao:"Composição: 100% Poliéster",

          preco:"Preço: R$ 369,00"
      },
      {
          id:19,

          item: "Nome: Gorro Tricot",

          imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F332724%2F0085451040_01.jpg%3Fv%3D638555384723930000&fit=cover&width=1240&height=1860",

          tamanho:["Tamanho: U"],

          composicao:"Composição: 100% Acrílico",

          preco:"Preço: R$ 149,00"
      }
    ]);

    
    


    return(
    <>
    
    <Header/>
    <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
                <div>
                    <img className='img-carousel' src="https://rsv-blog-hml.s3.us-east-2.amazonaws.com/BANNER_LP_BONITE_09a7a1ada9.jpg"
                     alt="Slide 1" />
                </div>
               <div>
                <img className='img-carousel' src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1285/4cb0e077-bd04-483a-b811-9cfedf3f814f"
                 alt="Slide 2"/>
               </div>
               <div>
                <img className='img-carousel' src="https://abramark.com.br/wp-content/uploads/2023/07/BannerNoticias-38.png"
                 alt="Slide 3"/>
               </div>
            </Carousel>
            
            
            <ListarProdutos lista={listaHome}/>


<Footer/>






          
    </>

    )
}
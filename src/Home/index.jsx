import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home(){
    const [listaProdutos, setProdutos] = useState([

        {

            id: 1,

            item: "Moletom Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLWIkoOawkYEMNEcpCi8AckUXMnBYI4bUUy-vsXBBEf-TWbOsPkr324fZAldqEvh4-J2NfUFGN8puZhYOQbzqZpLYbYCB1eRrIIiSS_yQ&usqp=CAE",

            tamanho:"M",

            composicao:" 100% Algodão",

            preco: "R$ 199,00"

        },

        {

            id: 2,

            item: "Camiseta Baw",

            imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlUgUjgvXuCqsnTbxlyrZVp_qgTNwdwtLFUJMMbmPoi2jTH_ChQZNwtQ0t41f7ZFmklYKgwTs433QGQXV0Xwcw00cq4IQHzQeTFL5WVRvpHIzd-dDpzXGq&usqp=CAE",

            tamanho:"M",

            composicao:" 100% Algodão",

            preco: "R$ 179,00"

        },

        {

            id: 3,

            item: "Moletom Roxo Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn0IGkoZqIokG4SM0lrpCAllDXxFx7Xs1wOP2eAXgUkMYs_t6VxmEGUVl9c0fUF4bMFaADSqGHUkJZcTY0HflJNs5XmfTWTtn8WLiIRrTnvP_KD7lvXME77w&usqp=CAE",

            tamanho:"GG",

            composicao:" 100% Algodão",

            preco: "R$ 199,00"

        },

        {

            id: 4,

            item: "Camisa Over Baw",

            imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPufhdi2N1YwjNSJW32ZMgknxwsL8nDgZLtUXdTq9WPLlqcTr5JQ1FnPl4kbS2Zv_2IxiGb7bOVDHMeJc20DDa6ZBHUI47VaTI9XNGTeCqwgtANz4KNFwUIA&usqp=CAE",
 
            tamanho:"P",

            composicao:" 100% Algodão",

            preco: "R$ 119,00"

        },
        {
            id:5,

            item:"Bermuda Baw",

            imagem:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5IAdCg7M7a6pOtgl3Dp9NXuRrJSw0fxsMfm55qXdubpzROW0ei4mTW9Q5COIcXBmM_8EXkZvoMxWzcmxPXXM2agaP7pvTjc7i1j7mS4wWv4u2qj8SGBDvBg&usqp=CAE",

            tamanho:"M",

            composicao:" 100% Algodão",

            preco:"R$ 104,45"
        },
        {
            id:6,

            item:"Calça Street Baw",

            imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnHqiySKMHsmxRudN7_Y3oJc1x1TYdNSPMIueKjABHCjFiXUJkGzs3TykNlnTtKQouCdf_zlS4jbtpI6q7lSjK3A9A7q5GlqGwsYPfbfRyFlaxNwKMb-ms&usqp=CAE",

            tamanho:"G",

            composicao:" 100% Algodão",

            preco:"R$ 249,00"
        }
    ]);

    


    return(
    <>
    
    <Header/>
    <div></div>
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
                    <img src="https://adnews.com.br/wp-content/uploads/2022/04/Banner-8-3.png"
                     alt="Slide 1" />
                </div>
               <div>
                <img src="https://atendimento.bawclothing.com.br/hc/theming_assets/01HZPG2RJ0DT5AWX440RA9Z7F9"
                 alt="Slide 2"/>
               </div>
               <div>
                <img src="https://abramark.com.br/wp-content/uploads/2023/07/BannerNoticias-38.png"
                 alt="Slide 3"/>
               </div>
            </Carousel>
            
            {
            listaProdutos.map((produto)=>
            <div key = {produto.id}>
            <p>{produto.item}</p>
            <p>{produto.preco}</p>
            <button onClick={()=> adicionarPedidos(produto)}>Adicionar</button>
            </div>
            )
          }


<Footer/>






          
    </>

    )
}
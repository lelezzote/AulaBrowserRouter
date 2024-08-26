
import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutosOferta from "../components/ListarProdutosOferta";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Oferta(){
    const [listaOferta, setOferta] = useState([

        {

            id: 1,

            item: "Nome: Moletom Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLWIkoOawkYEMNEcpCi8AckUXMnBYI4bUUy-vsXBBEf-TWbOsPkr324fZAldqEvh4-J2NfUFGN8puZhYOQbzqZpLYbYCB1eRrIIiSS_yQ&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal: "199,00",

            precoNovo: "179,00"

        },

        {

            id: 2,

            item: "Nome: Camiseta Baw",

            imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlUgUjgvXuCqsnTbxlyrZVp_qgTNwdwtLFUJMMbmPoi2jTH_ChQZNwtQ0t41f7ZFmklYKgwTs433QGQXV0Xwcw00cq4IQHzQeTFL5WVRvpHIzd-dDpzXGq&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal: "179,00",

            precoNovo: "159,00"

        },

        {

            id: 3,

            item: "Nome: Moletom Roxo Baw",

            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn0IGkoZqIokG4SM0lrpCAllDXxFx7Xs1wOP2eAXgUkMYs_t6VxmEGUVl9c0fUF4bMFaADSqGHUkJZcTY0HflJNs5XmfTWTtn8WLiIRrTnvP_KD7lvXME77w&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal: "199,00",

            precoNovo: "179,00"

        },

        {

            id: 4,

            item: "Nome: Camisa Over Baw",

            imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPufhdi2N1YwjNSJW32ZMgknxwsL8nDgZLtUXdTq9WPLlqcTr5JQ1FnPl4kbS2Zv_2IxiGb7bOVDHMeJc20DDa6ZBHUI47VaTI9XNGTeCqwgtANz4KNFwUIA&usqp=CAE",
 
            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal: "119,00",

            precoNovo: "99,00"

        },
        {
            id:5,

            item:"Nome: Bermuda Baw",

            imagem:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5IAdCg7M7a6pOtgl3Dp9NXuRrJSw0fxsMfm55qXdubpzROW0ei4mTW9Q5COIcXBmM_8EXkZvoMxWzcmxPXXM2agaP7pvTjc7i1j7mS4wWv4u2qj8SGBDvBg&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal:"104,45",

            precoNovo: "84,45"
        },
        {
            id:6,

            item:"Nome: Calça Street Baw",

            imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnHqiySKMHsmxRudN7_Y3oJc1x1TYdNSPMIueKjABHCjFiXUJkGzs3TykNlnTtKQouCdf_zlS4jbtpI6q7lSjK3A9A7q5GlqGwsYPfbfRyFlaxNwKMb-ms&usqp=CAE",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal:"249,00",

            precoNovo: "229,00"
        },
        {
            id:7,

            item: "Nome: Pochete Baw",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F271096%2Fimage-77fb26393d224056ac971ff94c45b03d.jpg%3Fv%3D638230556951900000&fit=cover&width=1240&height=1860",

            tamanho:["Tamanho: U"],

            composicao:"Composição: 100% Poliamida",

            precoOriginal:"69,80",

            precoNovo: "49,80"
        },
        {
            id:8,

            item: "Nome: Parachute Paants",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F332981%2F0085770040_02.jpg%3Fv%3D638557918595370000&fit=cover&width=560&height=840",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100%  Poliamida",

            precoOriginal:"379,00",

            precoNovo: "359,00"
        },
        {
            id:9,

            item: "Nome: Jaqueta Jeans",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F332738%2F0086605040_02.jpg%3Fv%3D638555419557330000&fit=cover&width=560&height=840",
            
            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição: 100% Algodão",

            precoOriginal:"339,00",

            precoNovo: "319,00"
        },
        {
            id:10,

            item: "Nome: Denim Jacket",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F332869%2F0085454040_02.jpg%3Fv%3D638556116912970000&fit=cover&width=560&height=840",

            tamanho:["Tamanho: PP-P-M-G-GG-3G"],

            composicao:"Composição:100% Algodão",

            precoOriginal:"519,00",

            precoNovo: "499,00"
        },
        {
            id:11,

            item: "Nome: Gorro Smiley",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F281972%2F0084647503_02.jpg%3Fv%3D638459303387700000&fit=cover&width=560&height=840",

            tamanho:["Tamanho: U"],

            composicao:"Composição: 100% Acrílico",

            precoOriginal:"149,00",

            precoNovo: "129,00"
        },
        {
            id:12,

            item: "Nome: Boné Five",

            imagem: "https://www.bawclothing.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fbawclothing.vtexassets.com%2Farquivos%2Fids%2F330562%2F0086078040_01.jpg%3Fv%3D638518160582870000&fit=cover&width=1240&height=1860",

            tamanho:["Tamanho: U"],

            composicao:"Composição: 100% Poliamida",

            precoOriginal:"259,00",

            precoNovo: "239,00"
        }
    ]);
    
    
    


    


    return(
    <>
    
    <Header/>
    
    <ListarProdutosOferta lista={listaOferta}/> 
    
    
    


<Footer/>






          
    </>

    )
}

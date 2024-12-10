'use client'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ChevronDown, CircleOff, Heart, HeartIcon, Instagram, Lightbulb, Linkedin, Minus, Package, PackageOpen, Plus, Ruler, Search, ShieldCheck, ShoppingCart, Truck, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import Carousel from './components/Carousel'
import Carousel2 from './components/Carousel2'



const Page = () => {

  const subNavbar = [{
    title: 'Art de la table',
  }
    , {
    title: 'Mobilier',
  }
    , {
    title: 'Nappage',
  }
    , {
    title: 'Matériel de salle',
  }
    , {
    title: 'Cuisine',
  }
    , {
    title: 'Barbecue',
  }
    , {
    title: 'Tente',
  }
    , {
    title: 'Chauffage',
  }
    , {

    title: 'Podium - Piste de danse',
  }
    , {
    title: 'Son et lumière',
  }
    , {
    title: 'Packs',
  }
    , {
    title: 'Consommables',
  }
  ]

  const [count, setcount] = useState(0)
  return (
    <div className='min-h-screen w-full bg-white'>
      <div className='h-32  w-full flex justify-between px-5 items-center font-sans text-black font-medium'>
        <div className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" fill="none" viewBox="0 0 82 40"><path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path><path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path><path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path><path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
        </div>
        <div className='bg-[#F9FAFB] hidden sm:flex items-center rounded-md p-4 w-[40rem]'>
          <input type="text" className=' w-full outline-none bg-transparent font-normal ' placeholder='Rechercher un produit' />
          <Search className='text-zinc-300 cursor-pointer' />
        </div>
        <div className='lg:flex gap-x-10 hidden'>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <Lightbulb />
            <h1>Inspirations</h1>
          </div>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <Heart />
            <h1>Mes favoris</h1>
            <Badge variant="secondary">24</Badge>
          </div>

          <div>
            <button className=' p-4 rounded-xl bg-[#0093D0] text-white flex gap-x-2 items-center'><ShoppingCart />Panier</button>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='bg-zinc-400/60 rounded-full size-12'></div>
            <h1 className='flex cursor-pointer'>FR <ChevronDown /></h1>
          </div>
        </div>

      </div>
      <div className='w-full h-10 hidden  lg:flex items-center justify-between lg:px-5 gap-x-3'>

        {subNavbar?.map((item, index) => (
          <h1 key={index} className={`uppercase text-zinc-400 font-normal font-sans ${index === 0 && "border-b-2 border-[#0093D0] text-[#0093D0] font-semibold "} cursor-pointer h-full `}>{item.title}</h1>
        ))}
      </div>
      <div className="w-full h-14 font-sans text-lg   flex items-center gap-x-3 pl-10">
        <h1 className='font-semibold '>Home</h1>
        <span className='bg-[#9C9C9C]/90 size-2 rounded-full'></span>
        <h1>Art de la table</h1>
      </div>

      <div className="flex flex-col sm:flex-row h-fit sm:h-[40rem] w-full py-5  sm:justify-between items-center sm:px-5">
        
        <div className='bg-[#F8F6F4] h-full p-5 rounded-md flex justify-center  relative w-full sm:w-1/2'>
          <div className='h-full w-14  flex flex-col gap-y-3 absolute left-5'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMiUHuZpoRfvCz7IdNj2nYMIEe9tvEPdyyCHF0DOBg8L0OJ0nW5qGr18a6bumiC9KC5NNOc7sPBq2jVeZg87n4UMD7tLNWF5h2a~fDsdjH8EqSlkDaU9YHIbWQtbKQgxbEUJGWIeLkwH2X6VitjFrDWno~7ErXq82GFbCLacNn-W4G439x0Nx318gI1~lWTerCrW~Yq1NrBe3OdSB~8MgZaevo2ZWSsz3Ceb2mmjPctR2710Cv~8XM8ye-cN-~6HqDhBdRsI2ctsjWp7aRm9MvBW0MTsjsMhihSn~DX5Cz4f-wnHu3RJOQjpH6WGyytDlXvAbNju85hZG83l4VpnCQ__"
                  alt="Image description"
                  className="rounded-md cursor-pointer "
                />
              </div>
            ))}
          </div>
          <div className=''>
            <img src="https://s3-alpha-sig.figma.com/img/a697/3509/f0a6397c22547c66edb2d8aa2737a300?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAgvBKhptyNn2X9wgoUT-2AImt5tPN~DqXmg9ivpm7afXoMGoMccm87TaTIdmy3DVZ2kt62od2NsKxgv8d2xJWMexc2CldAnLMpI2uEHIYxZNe~DKesHflJm7g37IrCHmdXH3P-bVYeL-xK5tTUfbx2RO5Tw4NbRRtpJoMm-6ElwvG98gmIwH-4ptk9z-znzlHf9hyS9jqtKnJ6XdszWzlOVnz~YKnG8a2I1C6uZlt8m3~LHTzwx8Oj7mugjPlLqU8ZyHuGXsDWCKl7jrzeaj9Bl9sdr4ZnVbJgPI1zL~cQlce7eM0BSjgegYhzuKS8boN8eGR5vwL64WcQYlqHUNw__" alt="" className='w-full h-full mix-blend-multiply ' />
          </div>
        </div>

        <div className='w-full sm:w-1/2 h-full flex flex-col px-3 font-sans'>
          <div className=' w-full flex justify-between px-5 border-b pb-2'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='text-2xl font-medium '>Cheese – appareil à raclette 1/2 roue</h1>
              <h1 className='text-2xl'>39,50€/pièce</h1>
            </div>

            <HeartIcon className='size-8 cursor-pointer' />

          </div>
          <div className='flex justify-between px-5 h-10 w-full p-7 items-center border-b '>
            <div className='flex gap-x-5'>
              <div className='flex items-center gap-x-2'>

                <Ruler />
                <h1>20cm</h1>
              </div>

              <div className='flex items-center gap-x-2'>
                <CircleOff />
                <h1>50cm</h1>
              </div>
            </div>
            <div>
              <h1 className='font-medium text-[#9C9C9C]'>RÉF : VABGN5</h1>
            </div>
          </div>
          <div className='font-sans font-medium text-lg text-zinc-500 p-5 border-b h-full'>
            <h1>Location appareil à raclette - Raclette traditionnelle 1/2 roue <br />
              Réglable en hauteur <br />
              Appareil à raclette professionnel <br />
              Boîtier de chauffe horizontal réglable en hauteur <br />
              <br />
              220V <br />
              900W</h1>
          </div>
          <div className='flex items-center justify-center p-4 gap-x-5'>


            <div className='flex gap-x-8 items-center border p-3 rounded-lg'>
              <Minus className='text-zinc-400 size-4 cursor-pointer' onClick={() => setcount(count - 1)} />
              <h1 className=' select-none'>{count < 0 ? 0 : count}</h1>
              <Plus className='text-zinc-400 size-4 cursor-pointer' onClick={() => setcount(count + 1)} />
            </div>

            <button className='bg-[#5CD2DD] p-3 rounded-lg w-[70%] select-none'>Ajouter au panier</button>
          </div>
        </div>

      </div>

      <div className=' h-fit sm:h-[15rem] w-full flex justify-between items-center gap-x-5 px-5 p-10'>
        <div className='w-1/2 h-full'>
          <h1 className='text-xl pb-2'>Description produit</h1>
          <h1 className='text-zinc-500'>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</h1>
        </div>
        <div className='w-1/2 h-fit  bg-[#FBF9F899] rounded-xl'>

          <div className='w-full flex justify-between p-5'>
            <h1 className='text-lg'>Livraisons</h1>
            <Plus className='size-5 text-zinc-400' />
          </div>

          <div className='w-full flex justify-between p-5'>
            <h1 className='text-lg'>Questions</h1>
            <Plus className='size-5 text-zinc-400' />
          </div>
        </div>

      </div>


      <div>

        <Carousel />
      </div>
      <div>

        <Carousel2 />
      </div>

      <div className='w-full bg-gradient-to-t from-[#FFFFFF] to-[#EE4197]/10 py-20 p-5 border-b' >

        <div className='flex flex-col items-center w-full justify-center '>
          <h1 className='font-semibold text-3xl'>On s’occupe de <span className='text-[#5CD2DD]'>tout</span></h1>
          <h1 className='font-medium'>Office ipsum you must be muted. It meeting commitment busy pain.</h1>
        </div>
        <div className='w-full flex justify-center items-center  py-20 gap-x-2 text-xl '>
          <div className='flex flex-col items-center  '>

            <Truck className='size-12 ' />
            <h1>Livraison & Reprise</h1>
            <h1 className='text-[1rem] font-medium text-zinc-600'>Selon vos besoins</h1>
          </div>
          <div className='w-24 h-[1px] bg-zinc-600  '></div>
          <div className='flex flex-col items-center '>

            <ShieldCheck className='size-12 ' />
            <h1>Nettoyage</h1>
            <h1 className='text-[1rem] font-medium text-zinc-600'>Selon vos besoins</h1>
          </div>
          <div className='w-24 h-[1px] bg-zinc-600  '></div>
          <div className='flex flex-col items-center '>

            <Package className='size-12 ' />
            <h1>Commande Illimitée</h1>
            <h1 className='text-[1rem] font-medium text-zinc-600'>Tout est possible</h1>
          </div>
          <div className='w-24 h-[1px] bg-zinc-600  '></div>
          <div className='flex flex-col items-center '>

            <PackageOpen className='size-12 ' />
            <h1>Transport & Enlèvement</h1>
            <h1 className='text-[1rem] font-medium text-zinc-600'>On s’occupe de tout.</h1>

          </div>


        </div>

        <div className='w-full h-[25rem] flex gap-x-5 '>
          <div className='w-1/2 h-full'>

            <img src="https://s3-alpha-sig.figma.com/img/cb2f/10dc/bd417ec3068aec151c8c21328b97422b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JgbnqYDwepMZh9oDPGnbOLwF20VADdqnffFbbsgDI51DfdxPH6gh6JxIOItb7Yk5W5un9JJcR0S7NmwbgJyYSqH4nAydsjTKpj09D-qrmw9QvYLd1GXavEoonOeBChj9~dgblj3bjGNgLE8-6g9luyXLN4sAEQjvaNamfEoNooU8zZf0YbL0Snc73bHSEwBJHdltmlPIxwsL-FBRdgObqy2Vdn0OzveGSfIGqdY7aU9pdMHxeZiYGTYl47oLRDJ9HEP~Xkd2bLWs3XaZlUzWHBZ4zNJXWmXfApoSzuKOzEdibF4lBzcQQZ6N64a9ULltgG9~wXkRSRQlXqHiV4mdYg__" alt="" className='rounded-lg h-full w-full object-cover object-center' />
          </div>
          <div className='w-1/2  flex flex-col gap-y-5 items-start justify-center bg-[#e2d7c2]/20 rounded-xl p-5'>
            <h1 className='text-zinc-600 font-medium text-3xl'>S'insrire & economiser <span className='text-blue-500'>10%</span></h1>
            <p className='text-zinc-400 font-medium text-sm'>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
            <div className='flex w-full gap-x-3'>

              <input type="text" className='outline-none border-zinc-600 w-[70%] bg-white border rounded-xl p-4 text-lg' placeholder='john@doe.com' />
              <button className='bg-[#5CD2DD] rounded-xl flex gap-x-1 p-4 w-[30%] justify-center items-center'>S’inscrire <ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:justify-between md:items-center h-[20rem] flex-col md:flex-row w-full md:px-10 p-5'>
        <div className='flex md:items-center gap-x-10 flex-col md:flex-row '>
          <div className='pr-8 pb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" fill="none" viewBox="0 0 82 40"><path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path><path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path><path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path><path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>

          </div>
          <div className='flex flex-col gap-y-2'>
            <h1 className='font-semibold'>INFOS PRATIQUES</h1>
            <h1>À propos</h1>
            <h1>Livraisons & Reprises</h1>
            <h1>Mode d’emploi</h1>
            <h1>F.A.Q</h1>
          </div>
          <div className='flex flex-col gap-y-2'>
            <h1 className='font-semibold'>LÉGAL</h1>
            <h1>Mentions légales</h1>
            <h1>CGU</h1>
            <h1>CGV</h1>
            <h1>Politique de confidentialité</h1>
          </div>
          <div className='flex flex-col gap-y-2'>
            <h1 className='font-semibold'>MON COMPTE</h1>
            <h1>Accéder à mon compte</h1>
            <h1>Ma liste d’envie</h1>
            <h1>Créer un compte</h1>
            <h1>Mot de passe oublié</h1>
          </div>
        </div>
        <div className='flex md:justify-center md:items-end flex-col gap-y-3 pt-3'>
          <h1 className='font-medium text-xl text-zinc-600'>NOUS SUIVRE</h1>
          <div className='flex gap-x-3'>

            <Twitter className='size-14 border rounded-xl p-3 cursor-pointer' />
            <Instagram className='size-14 border rounded-xl p-3 cursor-pointer' />
            <Linkedin className='size-14 border rounded-xl p-3 cursor-pointer' />
          </div>
        </div>
      </div>



    </div>
  )
}

export default Page

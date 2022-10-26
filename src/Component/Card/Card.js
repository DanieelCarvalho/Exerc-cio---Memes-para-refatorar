
export default function Card({titulo, img, alt}) {
   
    return (
        <div>

            <div className="post">
                <h1 className="titulo" >{titulo}</h1>
                <img src={img} alt={alt} />         
                   </div>

        </div>
    )
}
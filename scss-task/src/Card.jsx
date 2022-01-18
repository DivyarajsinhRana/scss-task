
const Card = ({image,title,name}) => {
    return (
        <div>
               <img src={image} alt="" />
               <h3>{title}</h3>
               <button>{name}</button>
        </div>
    )
}

export default Card



const Feature = ({feature}) => {
    const {title, description, image}= feature;
    return (
        <div >
            <img src={image} alt="" />
            <h2 className="text-[35px]">{title}</h2>
            <p className="w-[301px]">{description}</p>
        </div>
    );
};

export default Feature;
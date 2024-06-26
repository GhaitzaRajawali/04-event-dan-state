export function Tombol_2({isiPesan, namaTombol}) {
    return(
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    )
}

export function Tombol_3({message, buttonName}){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={(e) => {
                e.stopPropagation();
                alert(message)
                }
            }>
            {buttonName}
        </button>
    )
}

export default function Tombol_1(){
    function handleClick(){
        alert("Tombol Telah Ditekan!!");
    }

    function handleMouseOver(){
        alert("Eitss, mau mencet tombol ya?");
    }

    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        onMouseOver={handleMouseOver}>
            Ini Button 
        </button>
    );
}
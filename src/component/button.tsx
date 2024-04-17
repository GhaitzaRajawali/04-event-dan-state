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
export const Button = ({ content, href=null, additional_style="", handleClickFun=null}) => {
    return (
        <>
            {href ? <a href={href} className={`inline-block cursor-pointer font-semibold px-6 py-2 rounded-full uppercase bg-stone-900 text-white hover:bg-red-700 ${additional_style}`}>{ content }</a> : 
            <button className={`inline-block cursor-pointer font-semibold px-6 py-2 rounded-full uppercase bg-stone-900 text-white hover:bg-red-700 ${additional_style}`} onClick={handleClickFun}>{content}</button> }            
        </>
    )
}
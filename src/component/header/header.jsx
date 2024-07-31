import '../header/header.scss'

export default function Header(props){
    return(
        <div className='header'>
            <h1 className="header_title">{props?.title}</h1>
            <p className="header_description">{props?.description}</p>
        </div>
    )
}
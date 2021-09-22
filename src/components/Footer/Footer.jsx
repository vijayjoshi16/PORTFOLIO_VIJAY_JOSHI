import "./Footer.scss";

export default function Footer(){
    return(
        <div className="all_content_footer">
            <p className="footer_by">Coded with ❤ by Vijay Joshi</p>
            <p className="footer_by">Vijay Joshi © {new Date().getFullYear()}</p>
        </div>
    )
}
import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-credit">
                <h3 className="footer-name">Created By Rifqi Akmal Fauzi</h3>
                <div className='footer-social-container'>
                    <a href='https://www.instagram.com/rfqakmal_/' style={{width: "fit-content"}} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="instagram-logo" className='footer-social-logo'/></a>
                    <a href='https://www.linkedin.com/in/rifqi-akmal-fauzi/' style={{width: "fit-content"}} target='_blank'><img src='https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473' alt='linkedin-logo' className='footer-social-logo'/></a>
                    <a href='https://github.com/rifqi198' style={{width: "fit-content"}} target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png' alt='github-logo' className='footer-social-logo' /></a>
                </div>
            </div>
        </footer>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap'

function VideoPlayer(){
    

    return(
        <div>
            <Container>
                
                <div className="ratio ratio-16x9">
                    <iframe style={{borderRadius: 15, height: 300, padding: 0}} src="https://www.youtube.com/embed/qSqVVswa420?si=CcnCDh6HR-At0Wso" title="YouTube video" allowFullScreen></iframe>
                </div>
            </Container>
                
        </div>
    );
}

export default VideoPlayer


 